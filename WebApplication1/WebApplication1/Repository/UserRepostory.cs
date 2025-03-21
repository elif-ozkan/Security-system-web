using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Repository  // 'Repostory' yerine 'Repository'
{
    public interface IUserRepository  // 'IUserRepostory' yerine 'IUserRepository'
    {
        Task<IEnumerable<Users>> GetAllUsersAsync();  
        Task<Users> GetUserByIdAsync(int id);  
        Task AddUserAsync(Users user);
        Task UpdateUserAsync(Users user);
        Task DeleteUserAsync(int id);
        Task<Users> GetUserByEmailAsync(string email);
      
    }

    public class UserRepository : IUserRepository  
    {
        private readonly MyDbContext _dbContext;

        public UserRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<Users>> GetAllUsersAsync()
        {
            return await _dbContext.Users.ToListAsync();
        }

        public async Task<Users> GetUserByIdAsync(int id)
        {
            return await _dbContext.Users.FindAsync(id);
        }

        public async Task AddUserAsync(Users user)
        {
            await _dbContext.Users.AddAsync(user);  // Asenkron ekleme işlemi
            await _dbContext.SaveChangesAsync();
        }

        public async Task UpdateUserAsync(Users user)
        {
            _dbContext.Users.Update(user);  // `Entry(user).State = EntityState.Modified;` yerine Update() kullanımı daha temiz
            await _dbContext.SaveChangesAsync();
        }

        public async Task DeleteUserAsync(int id)
        {
            var user = await _dbContext.Users.FindAsync(id);
            if (user != null)
            {
                _dbContext.Users.Remove(user);
                await _dbContext.SaveChangesAsync();
            }
        }
        public async Task<Users> GetUserByEmailAsync(string email)
        {
            return await _dbContext.Users.FirstOrDefaultAsync(u=>u.Email==email);
        }


    }
}
