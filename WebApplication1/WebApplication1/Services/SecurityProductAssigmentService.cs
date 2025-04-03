using WebApplication1.Models;
using WebApplication1.Repository;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Services
{
    public class SecurityProductAssigmentService
    {
        private readonly SecurityProductAssigmentRepository _repository;

        public SecurityProductAssigmentService(SecurityProductAssigmentRepository repository)
        {
            _repository = repository;
        }

        // Tüm güvenlik ürün siparişlerini getir
        public async Task<ActionResult<List<SecurityProductAssigment>>> GetAllSecurityProductAssigmentsAsync()
        {
            var result = await _repository.GetAllSecurityProductAssigmentsAsync();
            if (result == null || result.Count == 0)
            {
                return new NotFoundObjectResult("No security product assignments found.");
            }
            return new OkObjectResult(result);
        }

        // Güvenlik ürünü siparişini ID ile getir
        public async Task<ActionResult<SecurityProductAssigment>> GetSecurityProductByIdAssigmentAsync(int securityProductId)
        {
            var result = await _repository.GetSecurityProductByIdAssigmentAsync(securityProductId);
            if (result == null)
            {
                return new NotFoundObjectResult($"Security product assignment with ID {securityProductId} not found.");
            }
            return new OkObjectResult(result);
        }

        // Yeni güvenlik ürünü siparişi ekle
        public async Task<ActionResult> AddSecurityProductAssigmentAsync(SecurityProductAssigment securityProductAssigment)
        {
            try
            {
                await _repository.AddSecurityProductAssigmentAsync(securityProductAssigment);
                return new CreatedAtActionResult("GetSecurityProductByIdAssigment", "SecurityProductAssigment", new { id = securityProductAssigment.SecurityProductId }, securityProductAssigment);
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult($"Error adding assignment: {ex.Message}");
            }
        }

        // Güvenlik ürünü siparişi güncelle
        public async Task<ActionResult> UpdateSecurityAssigmentAsync(SecurityProductAssigment securityProductAssigment, int securityProductId)
        {
            var updateResult = await _repository.UpdateSecurityAssigmentAsync(securityProductAssigment, securityProductId);
            if (!updateResult)
            {
                return new NotFoundObjectResult($"Security product assignment with ID {securityProductId} not found or ID mismatch.");
            }
            return new NoContentResult(); // Success, no content returned
        }

        // Güvenlik ürünü siparişi sil
        public async Task<ActionResult> DeleteSecurityProductAssigmentAsync(int id)
        {
            try
            {
                await _repository.DeleteSecurityProductAssigment(id);
                return new NoContentResult(); // Success, no content returned
            }
            catch (Exception ex)
            {
                return new BadRequestObjectResult($"Error deleting assignment: {ex.Message}");
            }
        }
    }
}

