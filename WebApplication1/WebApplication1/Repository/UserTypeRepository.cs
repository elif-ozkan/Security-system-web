using WebApplication1.Models;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Repository
{
    public class UserTypeRepository
    {
        private readonly MyDbContext _dbContext;

        public UserTypeRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        public async Task<List<UserTypes>> GetAllUserTypesAsync()
        {
            return await _dbContext.UserTypes.ToListAsync();
        }
        public async Task<UserTypes> GetUserTypeById(int id)
        {
            return await _dbContext.UserTypes.FindAsync(id);
        }
        public async Task<UserTypes> AddUserTypeAsync(UserTypes userTypes)
        {
            await _dbContext.UserTypes.AddAsync(userTypes);
            await _dbContext.SaveChangesAsync();
            return userTypes;
        }
        public async Task UpdateUserType(UserTypes userTypes)
        {
             _dbContext.UserTypes.Update(userTypes);
            await _dbContext.SaveChangesAsync();
            
        }
        public async Task DeleteUserType(int id)
        {
            var userType = await _dbContext.UserTypes.FindAsync(id);
            if (userType != null)
            {
                _dbContext.UserTypes.Remove(userType);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}
