using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using WebApplication1.Models;
using WebApplication1.Repository;

namespace WebApplication1.Services
{
    public class UserTypeService
    {
        private readonly UserTypeRepository _repository;
        public UserTypeService(UserTypeRepository repository)
        {
            _repository = repository;
        }
        //Tüm kullanıcı tiplerini liste halinde getir
        public async Task<List<UserTypes>> GetAllUserTypes()
        {
            var usertypes=await _repository.GetAllUserTypesAsync();
            return usertypes.ToList();
        }
        //Kullanıcı tiplerini ID ye göre getir
        public async Task<UserTypes> GetAllUserById(int id)
        {
            return await _repository.GetUserTypeById(id);
        }
        //Kullanıcı tipi ekle  
       public async Task<UserTypes> AddUserType(UserTypes userType)
        {
            var result = await _repository.AddUserTypeAsync(userType);
            return result; 
        }
        //Kullanıcı tipi güncelle
        public async Task<UserTypes> UpdateUserTypeAsync(UserTypes userTypes)
        {
            if (userTypes == null)
            {
                throw new ArgumentNullException(nameof(userTypes));
            }
            await _repository.UpdateUserType(userTypes);
            return userTypes;  
        }
        //Kullanıcı tipi sil
        public async Task DeleteUserType(int id)
        {
            await _repository.DeleteUserType(id);
        }

    }
}
