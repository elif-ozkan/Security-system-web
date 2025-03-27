using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class CategoryRepository 
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

        public async Task<bool> AddCategoryAsync(Categories category)
        {
            // Aynı ID'ye sahip kategori var mı kontrol et
          var exists = await _dbContext.Categories
        .AnyAsync(c => c.CategoryId == category.CategoryId);

            if (exists)
            {
                // Eğer varsa, güncelle veya hata ver
                return false;
            }

            // Id'yi otomatik ata
            category.CategoryId = 0; // Entity Framework'e otomatik ID ataması için

            await _dbContext.Categories.AddAsync(category);
            await _dbContext.SaveChangesAsync();
            return true;
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

