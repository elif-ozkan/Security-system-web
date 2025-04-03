using WebApplication1.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Mvc;

namespace WebApplication1.Repository
{
    public class SecurityProductAssigmentRepository
    {
        private readonly MyDbContext _context;
        public SecurityProductAssigmentRepository(MyDbContext context)
        {
            _context = context;
        }
       
        //Tüm güvenlik ürün siparişlerini getir
        public async Task<List<SecurityProductAssigment>> GetAllSecurityProductAssigmentsAsync()
        {
            return await _context.SecurityProductAssigments.ToListAsync();
        }

        //Tüm güvenlik ürünü siparişlerini ID numarasına göre getir
        public async Task<SecurityProductAssigment> GetSecurityProductByIdAssigmentAsync(int securtiyProductId)
        {
            return await _context.SecurityProductAssigments.FirstOrDefaultAsync(spd=>spd.SecurityProductId==securtiyProductId);

        }
        //Güvenlik ürünü sipariş ekle yeni
        public async Task AddSecurityProductAssigmentAsync(SecurityProductAssigment securityProductAssigment)
        {
             await _context.AddAsync(securityProductAssigment);
             await _context.SaveChangesAsync();
        }

        //Güvenlik ürünü siparişi güncelle
        public async Task<bool> UpdateSecurityAssigmentAsync(SecurityProductAssigment securityProductAssigment, int securtiyProductId)
        {
            // Eğer gelen securityProductId ile assigment'ın Id'si eşleşmiyorsa, hata döndürüyoruz
            if (securityProductAssigment.SecurityProductId!= securtiyProductId)
            {
                return false;
            }

            // ID ile veritabanından ilgili güvenlik ürününü alıyoruz
            var existingAssignment = await _context.SecurityProductAssigments
                .FirstOrDefaultAsync(s => s.SecurityProductId == securtiyProductId);

            if (existingAssignment == null)
            {
                return false;
            }

            // Güncellenen değerleri eski nesneye aktarıyoruz
            _context.Entry(existingAssignment).CurrentValues.SetValues(securityProductAssigment);

            // Değişiklikleri kaydediyoruz
            await _context.SaveChangesAsync();
            return true;   
        }
        //Ürün silme
        public async Task DeleteSecurityProductAssigment(int id)
        {
            _context.Remove(id);
            await _context.SaveChangesAsync();
        }






    }
}
