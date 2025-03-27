using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly CategoryService _categoryService;

        public CategoriesController(CategoryService categoryService)
        {
            _categoryService = categoryService;
        }

        // Tüm kategorileri getir
        [HttpGet]
        public async Task<List<Categories>> GetCategories()
        {
            return await _categoryService.GetAllCategories();
        }

        // ID'ye göre kategori getir
        [HttpGet("{id}")]
        public async Task<Categories> GetCategoryById(int id)
        {
            return await _categoryService.GetAllCategoryById(id);
        }

        // Yeni kategori ekle
        [HttpPost]
        public async Task<Categories> PostCategory(Categories categories)
        {
            return await _categoryService.AddCategory(categories);
        }

        // Kategori güncelle
        [HttpPut]
        public async Task<Categories> PutCategory(Categories categories)
        {
            return await _categoryService.UpdateCategories(categories);
        }

        // Kategori sil
        [HttpDelete("{id}")]
        public async Task DeleteCategory(int id)
        {
            await _categoryService.DeleteCategories(id);
        }
    }
}

