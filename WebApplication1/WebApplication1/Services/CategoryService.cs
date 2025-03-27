using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class CategoryService
    {
        private readonly CategoryRepository _repository;
        public CategoryService(CategoryRepository repository)
        {
            _repository = repository;
        }
        //Tüm kategorileri getir
        public async Task<List<Categories>> GetAllCategories()
        {
            var categories=await _repository.GetAllCategoriesAsync();
            return categories.ToList();
        }
        public async Task<Categories> GetAllCategoryById(int id)
        {
            return await _repository.GetCategoryByIdAsync(id);
        }
    
        //Kategori ekleme
        public async Task<Categories> AddCategory( Categories categories)
        {
            await _repository.AddCategoryAsync(categories);
            return categories;
        }
        // Kategori güncelleme
        public async Task<Categories> UpdateCategories(Categories categories)
        {
           
            await _repository.UpdateCategoryAsync(categories); 
            return categories;
            
        }
        //Kategori silme
        public async Task DeleteCategories(int id)
        {
            await _repository.DeleteCategoryAsync(id);
        }
    }
}
