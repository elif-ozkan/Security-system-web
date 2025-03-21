using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public interface ICategoryRepository
    {
        Task<IEnumerable<Categories>> GetAllCategoriesAsync();
        Task<Categories> GetCategoryByIdAsync(int categoryId);
        Task AddCategoryAsync(Categories category);
        Task UpdateCategoryAsync(Categories category);
        Task DeleteCategoryAsync(int categoryId);
    }

    public class CategoryRepository : ICategoryRepository
    {
        private readonly MyDbContext _dbContext;

        public CategoryRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Categories>> GetAllCategoriesAsync()
        {
            return await _dbContext.Categories.ToListAsync();
        }

        public async Task<Categories> GetCategoryByIdAsync(int categoryId)
        {
            return await _dbContext.Categories.FindAsync(categoryId);
        }

        public async Task AddCategoryAsync(Categories category)
        {
            _dbContext.Categories.Add(category);
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateCategoryAsync(Categories category)
        {
            _dbContext.Entry(category).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteCategoryAsync(int categoryId)
        {
            var category = await _dbContext.Categories.FindAsync(categoryId);
            if (category != null)
            {
                _dbContext.Categories.Remove(category);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}

