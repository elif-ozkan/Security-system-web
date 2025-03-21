using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.DbModels;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController:ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public CategoriesController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        //Tüm kategoriler gelsin
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Categories>>> GetCategories()
        {
            return await _dbContext.Categories.ToListAsync();
        }
        [HttpPost]

        public async Task<ActionResult<Categories>> PostCategories(Categories categories)
        {
            _dbContext.Categories.Add(categories);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction("GetCategories", new {id=categories.CategoryId}, categories); 
        }

    }
}
