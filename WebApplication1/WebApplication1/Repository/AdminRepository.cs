using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;

namespace WebApplication1.Repository
{
    public class AdminRepository
    {
        private readonly ComputerProductsRepository _productsRepository;
        private readonly SecurityProductRepository _securityProductRepository;
        private readonly MyDbContext _dbContext;

        public AdminRepository(ComputerProductsRepository productsRepository, SecurityProductRepository securityProductRepository,MyDbContext dbContext)
        {
            _productsRepository = productsRepository;
            _securityProductRepository = securityProductRepository;
            _dbContext = dbContext;
        }

        public async Task<IEnumerable<ComputerProducts>> GetProductsAsync()
        {
            return await _dbContext.ComputerProducts.ToListAsync();
        }

        public async Task<ComputerProducts> GetComputerProductByIdAsync(int computerProductId)
        {
            return await _dbContext.ComputerProducts
                                   .FirstOrDefaultAsync(c => c.ComputerProductId == computerProductId);
        }

        public async Task AddComputerProductsAsync(ComputerProducts computerProduct)
        {
            await _dbContext.ComputerProducts.AddAsync(computerProduct);  // Ürün eklenir
            await _dbContext.SaveChangesAsync();  // Değişiklikler kaydedilir
        }

        // Bilgisayar ürününü günceller
        public async Task UpdateComputerProductsAsync(ComputerProducts computerProduct)
        {
            _dbContext.Entry(computerProduct).State = EntityState.Modified;  // Ürün durumu değiştirilir
            await _dbContext.SaveChangesAsync();  // Değişiklikler kaydedilir
        }

        // Bilgisayar ürününü siler
        public async Task DeleteComputerProductsAsync(int computerProductId)
        {
            var product = await _dbContext.ComputerProducts.FindAsync(computerProductId);  // Ürün bulunur
            if (product != null)
            {
                _dbContext.ComputerProducts.Remove(product);  // Ürün silinir
                await _dbContext.SaveChangesAsync();  // Değişiklikler kaydedilir
            }
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
