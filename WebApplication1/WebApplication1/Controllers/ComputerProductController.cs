using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Services;
using WebApplication1.ViewModels;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputerProductsController : ControllerBase
    {
        private readonly ComputerProductService _computerProductService;
        private readonly CategoryService _categoryService;

        public ComputerProductsController(ComputerProductService computerProductService, CategoryService categoryService)
        {
            _computerProductService = computerProductService;
            _categoryService = categoryService;
        }

        [HttpGet]
        public async Task<ActionResult<List<ComputerProducts>>> GetComputerProducts()
        {
            var products = await _computerProductService.GetAllComputerProductsAsync();
            return Ok(products);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ComputerProducts>> GetComputerProductById(int id)
        {
            var product = await _computerProductService.GetComputersById(id);

            if (product == null)
            {
                return NotFound($"Bilgisayar ürünü ID {id} ile bulunamadı.");
            }

            return Ok(product);
        }

        [HttpPost]
        public async Task<ActionResult<ComputerProducts>> AddComputerProduct(ComputerProducts computerProducts)
        {
            // Kategori kontrolü
            if (computerProducts.CategoryId == null || computerProducts.CategoryId <= 0)
            {
                return BadRequest("Geçerli bir kategori ID'si gereklidir.");
            }

            // Kategorinin var olup olmadığını kontrol et
            var category = await _categoryService.GetAllCategoryById(computerProducts.CategoryId.Value); // _categoryService kullanın
            if (category == null)
            {
                return BadRequest("Belirtilen kategori bulunamadı.");
            }

            return await _computerProductService.UpdateComputerProducts(computerProducts);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult<ComputerProducts>> UpdateComputerProduct(int id,[FromBody] ComputerProducts computerProducts)
        {
            // ID kontrolü
            if (id != computerProducts.ComputerProductId)
            {
                return BadRequest("Ürün ID'si eşleşmiyor.");
            }

            // Kategori kontrolü
            if (computerProducts.CategoryId == null || computerProducts.CategoryId <= 0)
            {
                return BadRequest("Geçerli bir kategori ID'si gereklidir.");
            }

            try
            {
                // Kategorinin var olup olmadığını kontrol et
                var category = await _categoryService.GetAllCategoryById(computerProducts.CategoryId.Value); // Değişiklik burası
                if (category == null)
                {
                    return BadRequest("Belirtilen kategori bulunamadı.");
                }

                var updatedProduct = await _computerProductService.UpdateComputerProducts(computerProducts);
                return Ok(updatedProduct);
            }
            catch (Exception)
            {
                // Hata günlüğü için log ekleyebilirsiniz
                return StatusCode(500, "Ürün güncellenirken bir hata oluştu.");
                
            }
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> DeleteComputerProduct(int id)
        {
            try
            {
                // Önce ürünün var olup olmadığını kontrol et
                var existingProduct = await _computerProductService.GetComputersById(id);
                if (existingProduct == null)
                {
                    return NotFound($"ID {id} ile bilgisayar ürünü bulunamadı.");
                }

                await _computerProductService.DeleteComputerProducts(id);
                return NoContent(); // Başarılı silme işlemi
            }
            catch (Exception)
            {
                // Hata günlüğü için log ekleyebilirsiniz
                return StatusCode(500, "Ürün silinirken bir hata oluştu.");
            }
        }
        [HttpGet("grouped-by-type")]
       public async Task<ActionResult<List<ComputerProductViewModel>>> GetGroupedProducts()
      {
    var result = await _computerProductService.GetAllComputerProductsAsync();
    return Ok(result);
      }

    }
}


