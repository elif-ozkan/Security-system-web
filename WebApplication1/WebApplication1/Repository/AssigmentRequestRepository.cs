using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class AssigmentRequestRepository
    {
        private readonly MyDbContext _context;

        public AssigmentRequestRepository(MyDbContext context)
        {
            _context = context;
        }

        // Yeni bir AssignmentRequest ekler
        public async Task AddAsync(AssigmentRequests assignmentRequest)
        {
            _context.AssigmentRequests.Add(assignmentRequest);
            await _context.SaveChangesAsync();
        }

        // Tüm AssignmentRequest'leri getirir
        public async Task<List<AssigmentRequests>> GetAllAsync()
        {
            return await _context.AssigmentRequests.Include(a => a.User)  // User tablosunu da dahil etmek için
                                                     .Include(a => a.ComputerProduct) // ComputerProduct tablosunu dahil edebiliriz.
                                                     .ToListAsync();
        }

        // Id'ye göre AssignmentRequest alır
        public async Task<AssigmentRequests> GetByIdAsync(int requestId)
        {
            return await _context.AssigmentRequests.Include(a => a.User)
                                                     .Include(a => a.ComputerProduct)
                                                     .FirstOrDefaultAsync(a => a.RequestId == requestId);
        }

        // AssignmentRequest günceller
        public async Task UpdateAsync(AssigmentRequests assignmentRequest)
        {
            _context.AssigmentRequests.Update(assignmentRequest);
            await _context.SaveChangesAsync();
        }

        // AssignmentRequest siler
        public async Task DeleteAsync(int requestId)
        {
            var request = await GetByIdAsync(requestId);
            if (request != null)
            {
                _context.AssigmentRequests.Remove(request);
                await _context.SaveChangesAsync();
            }
        }

        // Kullanıcı ID'sine göre AssignmentRequest'leri getirir
        public async Task<List<AssigmentRequests>> GetByUserIdAsync(int userId)
        {
            return await _context.AssigmentRequests.Include(a => a.User)
                                                     .Include(a => a.ComputerProduct)
                                                     .Where(a => a.UserId == userId)
                                                     .ToListAsync();
        }

        // Durumuna göre AssignmentRequest'leri getirir
        public async Task<List<AssigmentRequests>> GetByStatusAsync(string status)
        {
            return await _context.AssigmentRequests.Include(a => a.User)
                                                     .Include(a => a.ComputerProduct)
                                                     .Where(a => a.Status == status)
                                                     .ToListAsync();
        }
    }
}

