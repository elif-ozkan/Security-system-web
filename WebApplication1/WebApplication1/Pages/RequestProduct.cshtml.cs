using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using Microsoft.AspNetCore.Mvc.Rendering;
using Microsoft.EntityFrameworkCore;
using System;
using WebApplication1.Models;

namespace WebApplication1.Pages
{
    public class RequestProductModel : PageModel
    {
        private readonly MyDbContext _context;

        public RequestProductModel(MyDbContext context)
        {
            _context = context;
        }

        [BindProperty]
        public int SelectedUserId { get; set; }

        [BindProperty]
        public int? SelectedComputerProductId { get; set; }

        [BindProperty]
        public int? SelectedSecurityProductId { get; set; }

        [BindProperty]
        public string RequestType { get; set; } = "Yeni Talep";

        [BindProperty]
        public DateTime RequestedReturnDate { get; set; }

        public List<SelectListItem> UserList { get; set; }
        public List<SelectListItem> ComputerProductList { get; set; }
        public List<SelectListItem> SecurityProductList { get; set; }

        public string? Message { get; set; }

        public async Task OnGetAsync()
        {
            await LoadDropdowns();
        }

        public async Task<IActionResult> OnPostAsync()
        {
            if (!ModelState.IsValid)
            {
                await LoadDropdowns();
                return Page();
            }

            var request = new AssigmentRequests
            {
                UserId = SelectedUserId,
                ComputerProductId = SelectedComputerProductId,
                SecurityProductId = SelectedSecurityProductId,
                RequestDate = DateTime.Now,
                RequestedReturnDate = RequestedReturnDate,
                Status = "Beklemede",
                RequestType = RequestType
            };

            _context.AssigmentRequests.Add(request);
            await _context.SaveChangesAsync();

            Message = "Talebiniz başarıyla alındı.";

            await LoadDropdowns(); // Tekrar doldurulmalı
            return Page();
        }

        private async Task LoadDropdowns()
        {
            UserList = await _context.Users
                .Select(u => new SelectListItem { Value = u.UserId.ToString(), Text = u.Name })
                .ToListAsync();

            ComputerProductList = await _context.ComputerProducts
                .Select(p => new SelectListItem { Value = p.ComputerProductId.ToString(), Text = p.Name })
                .ToListAsync();

            SecurityProductList = await _context.SecurityProducts
                .Select(p => new SelectListItem { Value = p.SecurityProductId.ToString(), Text = p.Name })
                .ToListAsync ();
        }
    }
}
   

