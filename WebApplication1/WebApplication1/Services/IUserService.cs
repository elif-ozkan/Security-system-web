using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    // Kullanıcı Servisi Arayüzü
    public interface IUserService
    {
        Task<IEnumerable<Users>> GetAllUsersAsync(); // Tüm kullanıcıları getir
        Task<Users> GetUserByIdAsync(int id); // ID'ye göre kullanıcı getir
        Task<Users> RegisterUserAsync(Users user); // Kullanıcı kaydet
        Task<Users> AuthenticateUserAsync(string email, string password); // Kullanıcı giriş işlemi
        Task UpdateUserAsync(Users user); // Kullanıcı güncelle
        Task DeleteUserAsync(int id); // Kullanıcı sil
    }

    // Kullanıcı Servisi
    public class UserService : IUserService
    {
        private readonly IUserRepository _userRepository;

        public UserService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        // Tüm kullanıcıları getir
        public async Task<IEnumerable<Users>> GetAllUsersAsync()
        {
            return await _userRepository.GetAllUsersAsync();
        }

        // ID'ye göre kullanıcı getir
        public async Task<Users> GetUserByIdAsync(int id)
        {
            return await _userRepository.GetUserByIdAsync(id);
        }

        // Kullanıcı kaydetme
        public async Task<Users> RegisterUserAsync(Users user)
        {
            // Şifre Hashleme işlemi veya başka işlemler burada yapılabilir
            await _userRepository.AddUserAsync(user);
            return user;
        }

        // Kullanıcı güncelleme
        public async Task UpdateUserAsync(Users user)
        {
            await _userRepository.UpdateUserAsync(user);
        }

        // Kullanıcı silme
        public async Task DeleteUserAsync(int id)
        {
            await _userRepository.DeleteUserAsync(id);
        }

        // Kullanıcı kimlik doğrulama işlemi
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


