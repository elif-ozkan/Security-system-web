using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    // Kullanıcı Servisi
    public class UserService
    {
        private readonly UserRepository _userRepository;

        public UserService(UserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // Tüm kullanıcıları getir
        public async Task<IEnumerable<Users>> GetAllUsersAsync()
        {
            return await _userRepository.GetAllUsersAsync();
        }

        // ID'ye göre kullanıcıyı getir
        public async Task<Users> GetUserByIdAsync(int id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }

        // Yeni kullanıcı kaydet
        public async Task<Users> RegisterUserAsync(Users user)
        {
            // Şifre Hashleme işlemi veya başka işlemler burada yapılabilir
            await _userRepository.AddUserAsync(user);
            return user;
        }

        // Kullanıcı güncelle
        public async Task UpdateUserAsync(Users user)
        {
            await _userRepository.UpdateUserAsync(user);
        }

        // Kullanıcıyı sil
        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteUserAsync(id);
        }

        // E-posta ve şifre doğrulama ile kullanıcı kimlik doğrulama işlemi
        public async Task<Users> AuthenticateUserAsync(string email, string password)
        {
            var user = await _userRepository.GetUserByEmailAsync(email);
            if (user != null && BCrypt.Net.BCrypt.Verify(password, user.Password))  // Şifre doğrulama
            {
                return user;
            }
            return null;  // Kullanıcı bulunamazsa veya şifre yanlışsa
        }
    }
}



