using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Services;

namespace WebApplication1.Controllers
{
    // Kullanıcı Controller'ı
    [Route("api/[controller]")]
    [ApiController]
    public class UsersController : ControllerBase
    {
        private readonly UserService _userService;

        public UsersController(UserService userService)
        {
            _userService = userService;
        }

        // Tüm kullanıcıları getir
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Users>>> GetAllUsers()
        {
            var users = await _userService.GetAllUsersAsync();
            return Ok(users);
        }

        // ID'ye göre kullanıcıyı getir
        [HttpGet("{id}")]
        public async Task<ActionResult<Users>> GetUserById(int id)
        {
            var user = await _userService.GetUserByIdAsync(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

        // Yeni kullanıcı kaydet
        [HttpPost]
        public async Task<ActionResult<Users>> RegisterUser([FromBody] Users user)
        {
            if (user == null)
            {
                return BadRequest();
            }

            var createdUser = await _userService.RegisterUserAsync(user);
            return CreatedAtAction(nameof(GetUserById), new { id = createdUser.UserId }, createdUser);
        }

        // Kullanıcı güncelle
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(int id, [FromBody] Users user)
        {
            if (id != user.UserId)
            {
                return BadRequest();
            }

            await _userService.UpdateUserAsync(user);
            return NoContent();
        }

        // Kullanıcıyı sil
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            await _userService.DeleteUserAsync(id);
            return NoContent();
        }

        // E-posta ve şifre doğrulama ile kullanıcı kimlik doğrulama
        [HttpPost("authenticate")]
        public async Task<ActionResult<Users>> AuthenticateUser([FromBody] UserLoginModel loginModel)
        {
            if (loginModel == null || string.IsNullOrEmpty(loginModel.Email) || string.IsNullOrEmpty(loginModel.Password))
            {
                return BadRequest("Geçersiz e-posta veya şifre.");
            }

            var user = await _userService.AuthenticateUserAsync(loginModel.Email, loginModel.Password);
            if (user == null)
            {
                return Unauthorized("Geçersiz kimlik bilgileri.");
            }

            return Ok(user);  // Kimlik doğrulama başarılı
        }
    }

    // Kimlik doğrulama için kullanılan model
    public class UserLoginModel
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}

