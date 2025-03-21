using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.DbModels;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]

    public class SecurityProductsController:ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public SecurityProductsController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        //Tüm güvenlik ürünlerini getir
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SecurityProducts>>> GetSecurityProducts()
        {
            var securityProducts= await _dbContext.SecurityProducts.ToListAsync();
            return Ok(securityProducts); 

        }
        [HttpPost]
        public async Task<ActionResult<SecurityProducts>> PostSecurityProducts(SecurityProducts securityProducts)
        {
            _dbContext.SecurityProducts.Add(securityProducts);
              await _dbContext.SaveChangesAsync();
            return CreatedAtAction("GetSecurityProducts", new {id=securityProducts.SecurityProductId}, securityProducts);
    
        }


    }
}
