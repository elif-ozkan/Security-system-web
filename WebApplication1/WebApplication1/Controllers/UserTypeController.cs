using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.DbModels;
using WebApplication1.Models;
using Microsoft.AspNetCore.Mvc;


namespace WebApplication1.Controllers
{
    public class UserTypeController : ControllerBase
    {
        private readonly MyDbContext _dbContext;
        public UserTypeController(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        //Tüm kullanıcı Türlerini getir
        // Tüm kullanıcı türlerini getir
        [HttpGet]
        public async Task<ActionResult<IEnumerable<UserTypes>>> GetUserTypes()
        {
            return await _dbContext.UserTypes.ToListAsync();
        }
        [HttpPost]
        public async Task<ActionResult<UserTypes>> PostUserType(UserTypes userType)
        {
            _dbContext.UserTypes.Add(userType);
            await _dbContext.SaveChangesAsync();
            return CreatedAtAction("GetUserTypes", new { id = userType.UserTypeId }, userType);
        }
        //Kullanıcı Türünü Güncelle
        [HttpPut("{id}")]
        public async Task<IActionResult> PutUserType(int id,UserTypes userTypes)
        {
            if (id != userTypes.UserTypeId)
            {
                return BadRequest();
            }
            _dbContext.Entry(userTypes).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
            return NoContent(); 

        }
        //Kullanıcı Türünü Sil
        [HttpDelete]
        public async Task<IActionResult> DeleteUserType(int id)
        {
            var userType = await _dbContext.UserTypes.FindAsync(id);
            if (userType == null)
            {
                return NotFound();
            }

            _dbContext.UserTypes.Remove(userType);
            await _dbContext.SaveChangesAsync();
            return NoContent(); 
        }
    }
}
