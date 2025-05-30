﻿using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using System.Linq;

namespace WebApplication1.Repository
{
    
    public class AssignmentRepository
    {
        private readonly MyDbContext _dbcontext;

        public AssignmentRepository(MyDbContext dbcontext)
        {
            _dbcontext = dbcontext;
        }

        public async Task<IEnumerable<Assignments>> GetAllAssignmentsAsync()
        {
            return await _dbcontext.Assignments
                .Include(a => a.User)
                .Include(a => a.ComputerProduct)
                .Include(a=>a.SecurityProduct)
                .ToListAsync();
        }

        public async Task<Assignments> GetAssignmentsByIdAsync(int assignmentId)
        {
            return await _dbcontext.Assignments
                .Include(a => a.User)
                .Include(a => a.ComputerProduct)
                .FirstOrDefaultAsync(a => a.AssignmentId == assignmentId);
        }

        public async Task<IEnumerable<Assignments>> GetAssignmentsByUserIdAsync(int userId)
        {
            return await _dbcontext.Assignments
                .Include(a => a.User)
                .Include(a => a.ComputerProduct)
                .Include(a => a.SecurityProduct)
                .Where(a => a.UserId == userId)
                .ToListAsync();
        }

        public async Task AddAssignmentAsync(Assignments assignment)
        {
            await _dbcontext.Assignments.AddAsync(assignment);
            await _dbcontext.SaveChangesAsync();
        }

        public async Task UpdateAssignmentAsync(Assignments assignment)
        {
            _dbcontext.Entry(assignment).State = EntityState.Modified;
            await _dbcontext.SaveChangesAsync();
        }

        public async Task DeleteAssignmentAsync(int assignmentId)
        {
            var assignment = await _dbcontext.Assignments.FindAsync(assignmentId);
            if (assignment != null)
            {
                _dbcontext.Assignments.Remove(assignment);
                await _dbcontext.SaveChangesAsync();
            }
        }
    }
}


