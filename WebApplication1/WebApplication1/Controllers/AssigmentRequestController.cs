using WebApplication1.Models;
using Microsoft.AspNetCore.Mvc;
using WebApplication1.Services;
using Microsoft.AspNetCore.Http;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AssigmentRequestController : ControllerBase
    {
        private readonly AssigmentRequestService _service;
        public AssigmentRequestController(AssigmentRequestService service)
        {
            _service = service;
        }

        //Tüm assigmentlar gelsin
        [HttpGet]
        public async Task<List<AssigmentRequests>> GetAllAssigmentAsync()
        {
            return await _service.GetAllRequestsAsync();
        }

        [HttpGet("{id:int}")]
        public async Task<ActionResult<AssigmentRequests>> GetAllAssigmentByIdAsync(int id)
        {
            // ID sıfırsa, geçersiz olduğunu belirten hata mesajı döndürülür
            if (id <= 0)
            {
                return BadRequest("Geçersiz ID");
            }

            // ID ile ilgili veri çekme işlemi
            var request = await _service.GetRequestByIdAsync(id);

            // Eğer veri bulunamazsa, NotFound döndürülür
            if (request == null)
            {
                return NotFound("ID ile ilgili bir kayıt bulunamadı");
            }

            // Veri bulunduysa, başarılı yanıt döndürülür
            return Ok(request);
        }
        [HttpGet("my-request")]
        public async Task<IActionResult> GetMyRequest()
        {
            var userId = HttpContext.Session.GetInt32("userId");

            if (userId == null)
            {
                return Unauthorized("Oturum bulunamadı. Lütfen giriş yapın.");
            }

            var requests = await _service.GetRequestsByUserIdAsync(userId.Value);

            if (requests == null || !requests.Any())
            {
                return NotFound("Kullanıcıya ait herhangi bir istek bulunamadı.");
            }

            return Ok(requests); 

        }





    }
}
