using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class ComputerProductAssigmentService
    {
        private readonly ComputerProductAssigmentRepository _repository;
        public ComputerProductAssigmentService(ComputerProductAssigmentRepository repository)
        {
            _repository = repository;
        }
        public async Task<List<ComputerProductAssigments>> GetAllAssigmentAsync()
        {
            return await _repository.GetAllComputerProductAssigmentsAsync();
        }


        public async Task<List<ComputerProducts>> GetAllAssigmentByIdAsync(int userid)
        {
            return await _repository.GetAssignmentsByUserIdAsync(userid);
        }

        public async Task<ComputerProductAssigments> AddAsync(ComputerProductAssigments computerProductAssigment)
        {
            await _repository.AddAsync(computerProductAssigment);
            return computerProductAssigment;
        }

        public async Task<bool> UpdateAsync(ComputerProductAssigments entity)
        {
            if(entity!= null)
            {
                await _repository.UpdateAsync(entity);
                return true;
                
            }
            return false; 
        }
        public async Task DeleteAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

    }

}
 
    

