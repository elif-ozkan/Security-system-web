using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using WebApplication1.Models;
using WebApplication1.ViewModels;



namespace WebApplication1.Controllers
{
    [Authorize]
    public class UserController:Controller
    {
           private readonly MyDbContext _dbContext;
        public UserController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<IActionResult> MyProducts()
        {
            var userId = int.Parse(User.FindFirstValue(ClaimTypes.NameIdentifier)!);

            var assignedSecurityProducts = await _dbContext.SecurityProductAssigments
                .Include(x => x.SecurityProduct)
                .Where(x => x.UserId == userId)
            .Select(x => x.SecurityProduct)
            .ToListAsync();

            var assignedComputerProducts = await _dbContext.ComputerProductAssigments
                .Include(x => x.ComputerProduct)
                .Where(x => x.UserId == userId)
                .Select(x => x.ComputerProduct)
                .ToListAsync();

            var model = new MyProductsViewModel
            {
                SecurityProducts = assignedSecurityProducts,
                ComputerProducts = assignedComputerProducts
            };

            return View(model);
        }
        [HttpGet]
        [Route("api/user/{id}/products")]
        public async Task<IActionResult> GetUserProduct(int userId)
        {
            var assignedSecurityProducts = await _dbContext.SecurityProductAssigments
                .Include(x => x.SecurityProduct)
                .Where(x => x.UserId == userId)
                .Select(x => new
                {
                    Id=x.SecurityProduct.SecurityProductId,
                    name=x.SecurityProduct.Name,
                    product_type=x.SecurityProduct.ProductType,
                    license_start_date=x.SecurityProduct.LicenseStartDate,
                    license_end_date=x.SecurityProduct.LicenseEndDate,
                    category_id=x.SecurityProduct.CategoryId,
                })
                .ToListAsync();
            var assignedComputerProducts = await _dbContext.ComputerProductAssigments
                .Include(x => x.ComputerProduct)
                .Where(x => x.UserId == userId)
                .Select(x => new
                {
                    Id = x.ComputerProduct.CategoryId,
                    name = x.ComputerProduct.Name,
                    brand = x.ComputerProduct.Brand,
                    model=x.ComputerProduct.Model,
                    ram=x.ComputerProduct.Ram,
                    Category_Id=x.ComputerProduct.CategoryId,

                   
                })
                .ToListAsync();

            var response = new
            {
                SecurityProducts = assignedSecurityProducts,
                ComputerProducts = assignedComputerProducts
            };

            return Ok(response);
        }

    }
}
