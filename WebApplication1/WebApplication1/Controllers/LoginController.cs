using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LoginController : ControllerBase
    {

        private readonly MyDbContext _context;

        private readonly Dictionary<int, string> _roleRedirectMap = new()
        {
            {1,"/admin/dashboard" },
            {2,"/ITWorker/dashboard" },
            {3,"/NOITWorker/dashboard" },
            {4,"/Guest/dashboard" }

        };

        public LoginController(MyDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            var user = await _context.Users
                .Include(u => u.UserType)
                .FirstOrDefaultAsync(u => u.Email == request.Username && u.Password == request.Password);

            if (user == null)
            {
                return Unauthorized(new { message = "Geçersiz kullanıcı bilgileri" });
            }

            return Ok(new
            {
                id = user.UserId,
                name = user.Name,
                role = user.UserType.UserType
            });
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}


