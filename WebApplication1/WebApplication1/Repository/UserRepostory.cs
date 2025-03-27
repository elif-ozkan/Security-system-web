using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Repository
{
    public class UserRepository
    {
        private readonly MyDbContext _dbContext;

        public UserRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Tüm kullanıcıları getir
        public async Task<IEnumerable<Users>> GetAllUsersAsync()
        {
            return await _dbContext.Users.ToListAsync();
        }

        // ID'ye göre kullanıcıyı getir
        public async Task<Users> GetUserByIdAsync(int id)
        {
            return await _dbContext.Users.FindAsync(id);  // ID'ye göre kullanıcıyı bulur
        }

        // Yeni kullanıcı ekle
        public async Task AddUserAsync(Users user)
        {
            await _dbContext.Users.AddAsync(user);  // Yeni kullanıcıyı ekler
            await _dbContext.SaveChangesAsync();    // Değişiklikleri kaydeder
        }

        // Kullanıcıyı güncelle
        public async Task UpdateUserAsync(Users user)
        {
            _dbContext.Users.Update(user);  // Kullanıcıyı günceller
            await _dbContext.SaveChangesAsync();  // Değişiklikleri kaydeder
        }

        // Kullanıcıyı sil
        public async Task DeleteUserAsync(int id)
        {
            var user = await _dbContext.Users.FindAsync(id);
            if (user != null)
            {
                _dbContext.Users.Remove(user);  // Kullanıcıyı siler
                await _dbContext.SaveChangesAsync();  // Değişiklikleri kaydeder
            }
        }

        // E-posta ile kullanıcıyı getir
        public async Task<Users> GetUserByEmailAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u => u.Email == email);  // E-posta ile kullanıcıyı getir
        }
    }
}

