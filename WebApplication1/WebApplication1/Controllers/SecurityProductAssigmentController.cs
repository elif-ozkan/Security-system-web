using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController] 
    public class SecurityProductAssigmentController
    {
        private readonly SecurityProductAssigmentService _service;
        public SecurityProductAssigmentController(SecurityProductAssigmentService service)
        {
            _service = service;
        }

        //Tüm ürünleri getir
        [HttpGet]
        public async Task<ActionResult<List<SecurityProductAssigments>>> GetAllSecurityProductAssigments()
        {
            return await _service.GetAllSecurityProductAssigmentsAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<SecurityProductAssigments>> GetSecurityProductByIdAsync(int id)
        {
            return await _service.GetSecurityProductByIdAssigmentAsync(id);
        }

        [HttpPost]

        public async Task<ActionResult<SecurityProductAssigments>> AddSecurityProductAssigmentAsync(SecurityProductAssigments securityProductAssigment)
        {
            return await _service.AddSecurityProductAssigmentAsync(securityProductAssigment);

        }

        [HttpPut("{id:int}")]
        public async Task<ActionResult> UpdateSecurityProductAssigmentAsync(int id, [FromBody] SecurityProductAssigments securityProductAssigment)
        {
            return await _service.UpdateSecurityAssigmentAsync(securityProductAssigment, id);
        }

        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteSecurityProductAssigmentAsync(int id)
        {
            return await _service.DeleteSecurityProductAssigmentAsync(id);
        }


    }
}
