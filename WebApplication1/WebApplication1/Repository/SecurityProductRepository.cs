using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Repository
{
    // Interface tanımı
    public interface ISecurityProductRepository
    {
        Task<IEnumerable<SecurityProducts>> GetAllSecurityProductsAsync();
        Task<SecurityProducts> GetSecurityProductByIdAsync(int securityProductID);
        Task AddSecurityProductsAsync(SecurityProducts securityProduct);
        Task UpdateSecurityProductsAsync(SecurityProducts securityProduct);
        Task DeleteSecurityProductsAsync(int securityProductID);
    }
    //Repository sınıfı
    public class SecurityProductRepository :ISecurityProductRepository
    {
        private readonly MyDbContext _dbContext;

        public SecurityProductRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Tüm güvenlik ürünlerini getirir
        public async Task<IEnumerable<SecurityProducts>> GetAllSecurityProductsAsync()
        {
            return await _dbContext.SecurityProducts.ToListAsync();
        }

        // Belirtilen ID'ye göre güvenlik ürününü getirir
        public async Task<SecurityProducts> GetSecurityProductByIdAsync(int securityProductID)
        {
            return await _dbContext.SecurityProducts.FirstOrDefaultAsync(sp => sp.SecurityProductId == securityProductID);
        }

        // Yeni bir güvenlik ürünü ekler
        public async Task AddSecurityProductsAsync(SecurityProducts securityProduct)
        {
            await _dbContext.SecurityProducts.AddAsync(securityProduct);
            await _dbContext.SaveChangesAsync();
        }

        // Bir güvenlik ürününü günceller
        public async Task UpdateSecurityProductsAsync(SecurityProducts securityProduct)
        {
            _dbContext.Entry(securityProduct).State = EntityState.Modified;
            await _dbContext.SaveChangesAsync();
        }

        // Belirtilen ID'ye sahip güvenlik ürününü siler
        public async Task DeleteSecurityProductsAsync(int securityProductID)
        {
            var product = await _dbContext.SecurityProducts.FindAsync(securityProductID);
            if (product != null)
            {
                _dbContext.SecurityProducts.Remove(product);
                await _dbContext.SaveChangesAsync();
            }
        }
    }
}

