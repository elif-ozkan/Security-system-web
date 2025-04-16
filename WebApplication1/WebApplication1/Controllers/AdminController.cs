using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using WebApplication1.Models;
using WebApplication1.Repository;
using WebApplication1.Services;
using WebApplication1.View;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AdminController : ControllerBase
    {
        private readonly AdminService _adminService;

        public AdminController(AdminService adminService)
        {
            _adminService = adminService;
        }

        // ----------- COMPUTER PRODUCTS -----------

        [HttpGet("computer-products")]
        public async Task<IActionResult> GetAllComputerProducts()
        {
            var products = await _adminService.GetAllComputerProductsAsync();
            return Ok(products);
        }


        [HttpGet("computer-products/{id}")]
        public async Task<IActionResult> GetComputerProduct(int id)
        {
            var product = await _adminService.GetComputerProductByIdAsync(id);
            if (product == null)
                return NotFound($"Computer product with ID {id} not found.");
            return Ok(product);
        }


        [HttpPost("computer-products")]
        public async Task<IActionResult> AddComputerProduct([FromBody] ComputerProducts product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _adminService.AddComputerProductAsync(product);
            return Ok(new { message = "Computer product added successfully." });
        }


        [HttpPut("computer-products/{id}")]
        public async Task<IActionResult> UpdateComputerProduct(int id, [FromBody] ComputerProducts product)
        {
            if (id != product.ComputerProductId)
                return BadRequest("Product ID mismatch.");

            await _adminService.UpdateComputerProductAsync(product);
            return Ok(new { message = "Computer product updated successfully." });
        }

        [HttpDelete("computer-products/{id}")]
        public async Task<IActionResult> DeleteComputerProduct(int id)
        {
            await _adminService.DeleteComputerProductAsync(id);
            return Ok(new { message = "Computer product deleted successfully." });
        }


        // ----------- SECURITY PRODUCTS -----------

        [HttpGet("security-products")]
        public async Task<IActionResult> GetAllSecurityProducts()
        {
            var products = await _adminService.GetAllSecurityProductsAsync();
            return Ok(products);
        }


        [HttpGet("security-products/{id}")]
        public async Task<IActionResult> GetSecurityProduct(int id)
        {
            var product = await _adminService.GetSecurityProductByIdAsync(id);
            if (product == null)
                return NotFound($"Security product with ID {id} not found.");
            return Ok(product);
        }


        [HttpPost("security-products")]
        public async Task<IActionResult> AddSecurityProduct([FromBody] SecurityProducts product)
        {
            if (!ModelState.IsValid)
                return BadRequest(ModelState);

            await _adminService.AddSecurityProductAsync(product);
            return Ok(new { message = "Security product added successfully." });
        }
        

        [HttpPut("security-products/{id}")]
        public async Task<IActionResult> UpdateSecurityProduct([FromBody] SecurityProducts product)
        {
            if (product.SecurityProductId == 0)
                return BadRequest("Product ID is required.");

            await _adminService.UpdateSecurityProductAsync(product);
            return Ok(new { message = "Security product updated successfully." });
        }


        [HttpDelete("security-products/{id}")]
        public async Task<IActionResult> DeleteSecurityProduct(int id)
        {
            await _adminService.DeleteSecurityProductAsync(id);
            return Ok(new { message = "Security product deleted successfully." });
        }
    }
}