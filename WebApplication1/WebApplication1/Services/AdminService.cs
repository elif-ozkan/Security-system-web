using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class AdminService
    {
        private readonly AdminRepository _adminRepository;

        public AdminService(AdminRepository adminRepository)
        {
            _adminRepository = adminRepository;
        }

        // --------- COMPUTER PRODUCTS ---------

        public async Task<IEnumerable<ComputerProducts>> GetAllComputerProductsAsync()
        {
            return await _adminRepository.GetProductsAsync();
        }

        public async Task<ComputerProducts> GetComputerProductByIdAsync(int id)
        {
            return await _adminRepository.GetComputerProductByIdAsync(id);
        }

        public async Task AddComputerProductAsync(ComputerProducts product)
        {
            await _adminRepository.AddComputerProductsAsync(product);
        }

        public async Task UpdateComputerProductAsync(ComputerProducts product)
        {
            await _adminRepository.UpdateComputerProductsAsync(product);
        }

        public async Task DeleteComputerProductAsync(int id)
        {
            await _adminRepository.DeleteComputerProductsAsync(id);
        }

        // --------- SECURITY PRODUCTS ---------

        public async Task<IEnumerable<SecurityProducts>> GetAllSecurityProductsAsync()
        {
            return await _adminRepository.GetAllSecurityProductsAsync();
        }

        public async Task<SecurityProducts> GetSecurityProductByIdAsync(int id)
        {
            return await _adminRepository.GetSecurityProductByIdAsync(id);
        }

        public async Task AddSecurityProductAsync(SecurityProducts product)
        {

            if (product.LicenseStartDate.HasValue)
                product.LicenseStartDate = DateTime.SpecifyKind(product.LicenseStartDate.Value, DateTimeKind.Utc);

            if (product.LicenseEndDate.HasValue)
                product.LicenseEndDate = DateTime.SpecifyKind(product.LicenseEndDate.Value, DateTimeKind.Utc);

            await _adminRepository.AddSecurityProductsAsync(product);
        }


        public async Task UpdateSecurityProductAsync(SecurityProducts product)
        {
            if (product.LicenseStartDate.HasValue)
                product.LicenseStartDate = DateTime.SpecifyKind(product.LicenseStartDate.Value, DateTimeKind.Utc);

            if (product.LicenseEndDate.HasValue)
                product.LicenseEndDate = DateTime.SpecifyKind(product.LicenseEndDate.Value, DateTimeKind.Utc);

            await _adminRepository.UpdateSecurityProductsAsync(product);
        }

        public async Task DeleteSecurityProductAsync(int id)
        {
            await _adminRepository.DeleteSecurityProductsAsync(id);
        }
    }
}

