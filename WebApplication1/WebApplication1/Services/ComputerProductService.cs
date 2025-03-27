using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class ComputerProductService
    {
        private readonly ComputerProductsRepository _productsRepository;

        public ComputerProductService(ComputerProductsRepository productsRepository)
        {
            _productsRepository = productsRepository;
        }
        //Tüm bilgisayar ürünlerini getir
        public async Task<List<ComputerProducts>> GetAllComputerProductsAsync()
        {
            var computerproducts=await _productsRepository.GetProductsAsync();
            return computerproducts.ToList();
        }
        //ID'ye göre ürünleri getir
        public async Task<ComputerProducts> GetComputersById(int id)
        {
            return await _productsRepository.GetComputerProductByIdAsync(id);
        }
        //Yeni bilgisayar ürünü güncelle
        public async Task<ComputerProducts> UpdateComputerProducts(ComputerProducts computerproducts)
        {
            if(computerproducts == null)
            {
                throw new ArgumentNullException(nameof(computerproducts));
            }
            await _productsRepository.UpdateComputerProductsAsync(computerproducts);
            return computerproducts;
        }
        //Bilgisayar ürününü siler
        public async Task DeleteComputerProducts(int id)
        {
             await _productsRepository.DeleteComputerProductsAsync(id);

        }
    }
}


