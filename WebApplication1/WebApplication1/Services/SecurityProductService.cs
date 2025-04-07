using WebApplication1.Models;
using WebApplication1.Repository;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.ViewModels;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Services
{
    public class SecurityProductService
    {
        private readonly SecurityProductRepository _repository;
        private readonly MyDbContext _dbcontext;

        public SecurityProductService(SecurityProductRepository repository, MyDbContext dbContext)
        {
            _repository = repository;
            _dbcontext=dbContext;
        }

        // Tüm güvenlik ürünlerini getir
        public async Task<IEnumerable<SecurityProducts>> GetAllSecurityProductsAsync()
        {
            return await _repository.GetAllSecurityProductsAsync();
        }

        // ID'ye göre güvenlik ürününü getir
        public async Task<SecurityProducts> GetSecurityProductByIdAsync(int id)
        {
            return await _repository.GetSecurityProductByIdAsync(id);
        }

        // Yeni güvenlik ürünü ekle
        public async Task<SecurityProducts> AddSecurityProductsAsync(SecurityProducts securityProduct)
        {
            if (securityProduct == null)
            {
                throw new ArgumentNullException(nameof(securityProduct));
            }

            await _repository.AddSecurityProductsAsync(securityProduct);
            return securityProduct;
        }

        // Güvenlik ürününü güncelle
        public async Task<SecurityProducts> UpdateSecurityProductsAsync(SecurityProducts securityProduct)
        {
            if (securityProduct == null)
            {
                throw new ArgumentNullException(nameof(securityProduct));
            }

            await _repository.UpdateSecurityProductsAsync(securityProduct);
            return securityProduct;
        }

        // Güvenlik ürününü sil
        public async Task DeleteSecurityProductsAsync(int id)
        {
            await _repository.DeleteSecurityProductsAsync(id);
        }
        //Ürün tipine göre gruplama 
        public async Task<List<SecurityProductViewModel>> GetSecurityProductsByTypeAsync()
        {
           var result = await _dbcontext.SecurityProducts.GroupBy(sp => sp.ProductType).Select(g => new SecurityProductViewModel
        {
            ProductType = g.Key,
             SecurityProducts = g.ToList()
        }).ToListAsync();
        return result;
        }
    }
}


