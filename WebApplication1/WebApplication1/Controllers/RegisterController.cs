using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using System.Text.Json;

namespace WebApplication1.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RegisterController : ControllerBase
    {
        private readonly MyDbContext myDbContext;
        private readonly ILogger<RegisterController> _logger;

        public RegisterController(MyDbContext context, ILogger<RegisterController> logger)
        {
            myDbContext = context;
            _logger = logger;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            try
            {
                // Gelen isteği logla
                _logger.LogInformation($"Register isteği alındı: {JsonSerializer.Serialize(request)}");

                // Request doğrulama
                if (request == null)
                {
                    _logger.LogWarning("Boş istek gönderildi");
                    return BadRequest(new { message = "İstek verileri bulunamadı." });
                }

                if (string.IsNullOrEmpty(request.Email) || string.IsNullOrEmpty(request.Password) ||
                    string.IsNullOrEmpty(request.Name) || string.IsNullOrEmpty(request.Surname) ||
                    string.IsNullOrEmpty(request.Usertype))
                {
                    _logger.LogWarning("Eksik veri: Gerekli alanlardan biri veya birkaçı boş");
                    return BadRequest(new { message = "Tüm alanlar doldurulmalıdır." });
                }

                // E-posta adresi daha önce kullanılmış mı kontrol et
                if (await myDbContext.Users.AnyAsync(u => u.Email == request.Email))
                {
                    _logger.LogWarning($"E-posta zaten kullanımda: {request.Email}");
                    return BadRequest(new { message = "Bu e-posta zaten kullanılıyor." });
                }

                // Kullanıcı tipinin geçerli olup olmadığını kontrol et
                var userTypeList = await myDbContext.UserTypes.ToListAsync();
                _logger.LogInformation($"Mevcut kullanıcı tipleri: {JsonSerializer.Serialize(userTypeList.Select(ut => ut.UserType))}");
                
                var userType = userTypeList.FirstOrDefault(x => x.UserType == request.Usertype);
                if (userType == null)
                {
                    _logger.LogWarning($"Geçersiz kullanıcı türü: {request.Usertype}");
                    return BadRequest(new { message = $"Geçersiz kullanıcı türü: '{request.Usertype}'." });
                }

                // Yeni kullanıcı oluştur
                var newUser = new Users
                {
                    Name = request.Name,
                    Surname = request.Surname,
                    Email = request.Email,
                    Password = request.Password, // ⚠️ Gerçek uygulamada şifre mutlaka hashlenmeli
                    UserTypeId = userType.UserTypeId
                };

                // Kullanıcıyı veritabanına ekle
                myDbContext.Users.Add(newUser);
                await myDbContext.SaveChangesAsync();

                _logger.LogInformation($"Yeni kullanıcı oluşturuldu: ID={newUser.UserId}, Email={newUser.Email}");

                // Başarılı yanıt dön (userId de içeriyor)
                return Ok(new { message = "Kayıt başarılı", userId = newUser.UserId });
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Kullanıcı kaydı sırasında hata oluştu");
                return StatusCode(500, new { message = "Sunucu hatası oluştu." });
            }
        }

        public class RegisterRequest
        {
            public string Name { get; set; }
            public string Email { get; set; }
            public string Password { get; set; }
            public string Surname { get; set; }
            public string Usertype { get; set; }  // UserType tablosundaki değer ile eşleşmeli

            public override string ToString()
            {
                return $"Name: {Name}, Surname: {Surname}, Email: {Email}, Usertype: {Usertype}";
            }
        }
    }
}