using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class AssigmentRequestService
    {
        private readonly AssigmentRequestRepository _repository;

        public AssigmentRequestService(AssigmentRequestRepository repository)
        {
            _repository = repository;
        }

        // Tüm istekleri getir
        public async Task<List<AssigmentRequests>> GetAllRequestsAsync()
        {
            return await _repository.GetAllAsync();
        }

        // ID'ye göre belirli bir isteği getir
        public async Task<AssigmentRequests?> GetRequestByIdAsync(int id)
        {
            return await _repository.GetByIdAsync(id);
        }

        // Yeni bir istek oluştur
        public async Task CreateRequestAsync(AssigmentRequests assigmentRequest)
        {
            await _repository.AddAsync(assigmentRequest);
        }

        // Mevcut bir isteği güncelle
        public async Task UpdateRequestAsync(AssigmentRequests updatedRequest)
        {
            await _repository.UpdateAsync(updatedRequest);
        }

        // İsteği sil
        public async Task DeleteRequestAsync(int id)
        {
            await _repository.DeleteAsync(id);
        }

        // Kullanıcı ID'sine göre istekleri getir
        public async Task<List<AssigmentRequests>> GetRequestsByUserIdAsync(int userId)
        {
            return await _repository.GetByUserIdAsync(userId);
        }

        // Belirli bir duruma sahip istekleri getir
        public async Task<List<AssigmentRequests>> GetRequestsByStatusAsync(string status)
        {
            return await _repository.GetByStatusAsync(status);
        }
    }
}


