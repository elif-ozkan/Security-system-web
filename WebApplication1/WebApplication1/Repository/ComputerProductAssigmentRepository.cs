using WebApplication1.Models;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Repository
{
    public class ComputerProductAssigmentRepository
    {
        private readonly MyDbContext _context;
        public ComputerProductAssigmentRepository(MyDbContext context)
        {
            _context = context;
        }

        // Kullanıcı tüm bilgisayar siparişlerini getirir
        public async Task<List<ComputerProductAssigment>> GetAllComputerProductAssigmentsAsync()
        {
            return await _context.ComputerProductAssigments
                .Include(ca => ca.ComputerProduct) // Bilgisayar ürünü bilgilerini de getir
                .Include(ca => ca.User) // Kullanıcı bilgilerini de getir
                .ToListAsync();
        }

        public async Task<List<ComputerProducts>> GetAssignmentsByUserIdAsync(int userId)
        {
            return await _context.ComputerProductAssigments 
                .Where(ca => ca.UserId == userId)
                .Include(ca => ca.ComputerProduct) // Bilgisayar ürünlerini getir
                .Select(ca => ca.ComputerProduct) // Sadece ürünleri döndür
                .ToListAsync();
        }
        //Kullanıcı assigment ekler
        public async Task AddAsync(ComputerProductAssigment computerProductsAssigment)
        {
            await _context.ComputerProductAssigments.AddAsync(computerProductsAssigment);
            await _context.SaveChangesAsync();
        }
        //Kullanıcı Assigment günceller
        public async Task UpdateAsync(ComputerProductAssigment computerProductAssigment)
        {
             _context.ComputerProductAssigments.Update(computerProductAssigment);
              await _context.SaveChangesAsync();
        }
        //Kullanıcı Assigment  siler
        public async Task DeleteAsync(int id)
        {
            var assigment=await _context.ComputerProductAssigments.FindAsync(id);
            if (assigment != null)
            {
                _context.ComputerProductAssigments.Remove(assigment);
                await _context.SaveChangesAsync();
            }
        }

    }
}