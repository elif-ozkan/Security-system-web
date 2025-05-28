using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.ViewModels;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SecurityProductController : ControllerBase
    {
        private readonly SecurityProductService _securityProductService;

        public SecurityProductController(SecurityProductService securityProductService)
        {
            _securityProductService = securityProductService;
        }

        // Tüm güvenlik ürünlerini getir
        [HttpGet]
        public async Task<ActionResult<IEnumerable<SecurityProducts>>> GetAllSecurityProducts()
        {
            var products = await _securityProductService.GetAllSecurityProductsAsync();
            return Ok(products); // 200 OK ile döndürür
        }

        // ID'ye göre güvenlik ürünü getir
        [HttpGet("{id}")]
        public async Task<ActionResult<SecurityProducts>> GetSecurityProductById(int id)
        {
            var product = await _securityProductService.GetSecurityProductByIdAsync(id);
            if (product == null)
            {
                return NotFound(); // Eğer ürün bulunmazsa 404 döner
            }

            return Ok(product); // 200 OK ile döner
        }

        // Yeni güvenlik ürünü ekle
        [HttpPost]
        public async Task<ActionResult<SecurityProducts>> AddSecurityProduct(SecurityProducts securityProduct)
        {
            if (securityProduct == null)
            {
                return BadRequest("Geçersiz ürün verisi."); // 400 Bad Request döner
            }

            var addedProduct = await _securityProductService.AddSecurityProductsAsync(securityProduct);
            return CreatedAtAction(nameof(GetSecurityProductById), new { id = addedProduct.SecurityProductId }, addedProduct); // 201 Created döner
        }

        // Güvenlik ürünü güncelle
        [HttpPut("{id:int}")]
        public async Task<ActionResult<SecurityProducts>> UpdateSecurityProduct(int id, SecurityProducts securityProduct)
        {
            if (id != securityProduct.SecurityProductId)  
            {
                return BadRequest("Ürün ID'si eşleşmiyor."); // 400 Bad Request döner
            }

            var updatedProduct = await _securityProductService.UpdateSecurityProductsAsync(securityProduct);
            if (updatedProduct == null)
            {
                return NotFound(); // Eğer ürün bulunmazsa 404 döner
            }

            return Ok(updatedProduct); // 200 OK ile döner
        }

        // Güvenlik ürününü sil
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteSecurityProduct(int id)
        {
            var product = await _securityProductService.GetSecurityProductByIdAsync(id);
            if (product == null)
            {
                return NotFound(); // 404 Not Found döner
            }

            await _securityProductService.DeleteSecurityProductsAsync(id);
            return NoContent(); // 204 No Content döner, başarılı bir silme işlemi sonrası içerik yok
        }
        [HttpGet("grouped-by-type")]
        public async Task<ActionResult<List<SecurityProductViewModel>>> GetGroupedProducts()
        {
            var result = await _securityProductService.GetSecurityProductsByTypeAsync();
            return Ok(result);
        }

    }
}

