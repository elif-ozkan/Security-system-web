﻿using Microsoft.AspNetCore.Mvc;
using WebApplication1.Models;
using WebApplication1.Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace WebApplication1.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ComputerProductAssigmentController : ControllerBase
    {
        private readonly ComputerProductAssigmentService _service;
        public ComputerProductAssigmentController(ComputerProductAssigmentService service)
        {
            _service = service;
        }
        //Kullanıcının tüm bilgisayar siparişlerini getir
        [HttpGet]

        public async Task<ActionResult<List<ComputerProductAssigment>>> GetAllProductAssigmentAsync(ComputerProductAssigment computerProductAssigment)
        {
            await _service.GetAllAssigmentAsync();
            return Ok(computerProductAssigment);
        }

        // ID'ye göre sipariş bilgisayar ürünü getir
        [HttpGet("{id:int}")]
        public async Task<ActionResult<ComputerProductAssigment>> GetAllProductAssigmentByIdAsync(int id)
        {
            if (id < 0)
            {
                return BadRequest("Geçersiz ID");
            }

            if (id == null)
            {
                return NotFound("ID değeri yok");

            }
            var assigment = await _service.GetAllAssigmentByIdAsync(id);
            return Ok(assigment);

        }

        //Yeni sipariş bilgisayar ürünü seçilir
        [HttpPost]
        public async Task<ActionResult<ComputerProductAssigment>> AddComputerProductAssigment(ComputerProductAssigment computerProductAssigment)
        {
            if (computerProductAssigment == null)
            {
                return BadRequest("Geçersiz sipariş verisi");
            }
            var computerproductassigment = await _service.AddAsync(computerProductAssigment);
            return Ok(computerproductassigment);
        }

        //Sipariş ürün bilgisi güncellenir
        [HttpPut("{id:int}")]
        public async Task<ActionResult<ComputerProductAssigment>> UpdateComputerProductAssigment(int id ,ComputerProductAssigment computerProductAssigment)
        {
            if (computerProductAssigment == null)
            {
                return NotFound("Atama bulunamadı");
            }

            // Eğer gelen ID ile atama ID'si eşleşmiyorsa, BadRequest döndür
            if (id != computerProductAssigment.ComputerProductId)
            {
                return BadRequest("Ürün ID eşleşmiyor");
            }

            // Atama güncelleme işlemi başarılıysa, Ok döndür
            var updatedAssigment = await _service.UpdateAsync(computerProductAssigment);
            return Ok(updatedAssigment);
        }

        //Sipariş bilgisayar ürünü sil
        [HttpDelete("{id:int}")]
        public async Task<ActionResult> DeleteComputerProductAssigment(int id)
        {
            var computerproductassigment=await _service.GetAllAssigmentByIdAsync(id);
            if(computerproductassigment == null)
            {
                return NotFound("Silinecek ürün yok");
            }
            await _service.DeleteAsync(id);
            return NoContent();
        }




    }
}
