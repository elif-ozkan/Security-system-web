using WebApplication1.Models;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Repository
{
   // Repository Sınıfı
    public class ComputerProductsRepository
    {
        private readonly MyDbContext _dbContext;

        public ComputerProductsRepository(MyDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        // Tüm bilgisayar ürünlerini alır
        public async Task<IEnumerable<ComputerProducts>> GetProductsAsync()
        {
            return await _dbContext.ComputerProducts.ToListAsync();
        }

        // ID'ye göre bilgisayar ürününü alır
        public async Task<ComputerProducts> GetComputerProductByIdAsync(int computerProductId)
        {
            return await _dbContext.ComputerProducts
                                   .FirstOrDefaultAsync(c => c.ComputerProductId == computerProductId);
        }

        // Yeni bilgisayar ürünü ekler
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
    }
}


