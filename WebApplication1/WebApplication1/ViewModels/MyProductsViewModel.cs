using WebApplication1.Models;

namespace WebApplication1.ViewModels
{
    public class MyProductsViewModel
    {
        public List<SecurityProducts> SecurityProducts { get; set; } = new();
        public List<ComputerProducts> ComputerProducts { get; set; } = new();
    }
}
