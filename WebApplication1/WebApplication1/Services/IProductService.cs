using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    // Interface tanımı
    public interface IProductService
    {
        Task<IEnumerable<ComputerProducts>> GetAllComputerProductsAsync(); // Tüm bilgisayar ürünlerini getir
        Task<ComputerProducts> GetComputerProductsByIdAsync(int id);
        Task<ComputerProducts> CreateComputerProductsAsync(ComputerProducts computerProducts);
        Task<ComputerProducts> UpdateComputerProductsAsync(ComputerProducts computerProducts);
        Task DeleteComputerProductsAsync(int id);
    }

    public class ProductService : IProductService
    {
        private readonly MyDbContext _dbcontext;

        public ProductService(MyDbContext dbcontext)
        {
            _dbcontext = dbcontext ?? throw new ArgumentNullException(nameof(dbcontext));
        }

        public async Task<IEnumerable<ComputerProducts>> GetAllComputerProductsAsync()
        {
            return await _dbcontext.ComputerProducts.Include(c => c.Category).ToListAsync();
        }

        public async Task<ComputerProducts> GetComputerProductsByIdAsync(int id)
        {
            return await _dbcontext.ComputerProducts.Include(c => c.Category)
                .FirstOrDefaultAsync(c => c.ComputerProductId == id);
        }

        public async Task<ComputerProducts> CreateComputerProductsAsync(ComputerProducts products)
        {
            if (products == null)
                throw new ArgumentNullException(nameof(products));

            _dbcontext.ComputerProducts.Add(products);
            await _dbcontext.SaveChangesAsync();
            return products;
        }

        public async Task<ComputerProducts> UpdateComputerProductsAsync(ComputerProducts products)
        {
            if (products == null)
                throw new ArgumentNullException(nameof(products));

            _dbcontext.ComputerProducts.Update(products);
            await _dbcontext.SaveChangesAsync();
            return products;
        }

        public async Task DeleteComputerProductsAsync(int id)
        {
            var product = await _dbcontext.ComputerProducts.FindAsync(id);
            if (product != null)
            {
                _dbcontext.ComputerProducts.Remove(product);
                await _dbcontext.SaveChangesAsync();
            }
            else
            {
                throw new KeyNotFoundException($"Product with ID {id} not found.");
            }
        }
    }
}

