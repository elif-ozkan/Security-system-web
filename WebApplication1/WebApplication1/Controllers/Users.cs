


using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Controllers
{
    public class UserController: ControllerBase
    {
        private readonly MyDbContext _dbContext;

        public UserController(MyDbContext dbContext) {  _dbContext = dbContext; }

        [HttpGet]
        public async Task<IEnumerable<Users>>GetUsers()
        {
            return await _dbContext.Users.ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult> PutUser(int id,Users users)
        {
            if (id != users.UserId)
            {
                return BadRequest();
            }
            _dbContext.Entry(users).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }
        //Kullanıcıyı Sil
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(int id)
        {
            var user = await _dbContext.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _dbContext.Users.Remove(user);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }

    }
}
