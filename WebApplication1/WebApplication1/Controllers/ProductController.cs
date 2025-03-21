
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.DbModels;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class ProductController:ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public ProductController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        //Tüm ürünleri getir
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ComputerProducts>>> GetComputerProducts()
        {
            return await _dbContext.ComputerProducts.ToListAsync();
        }

        // POST: api/computerproduct
        [HttpPost]
        public async Task<ActionResult<ComputerProducts>> PostComputerProduct(ComputerProducts computerProduct)
        {
            _dbContext.ComputerProducts.Add(computerProduct);
            await _dbContext.SaveChangesAsync();

            return CreatedAtAction("GetComputerProducts", new { id = computerProduct.ComputerProductId }, computerProduct);
        }


    }
}

