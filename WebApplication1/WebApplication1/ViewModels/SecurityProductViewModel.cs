using WebApplication1.Models;

namespace WebApplication1.ViewModels
{
    public class SecurityProductViewModel
    {
        public string  ProductType {  get; set; }=string.Empty;
        public List<SecurityProducts> SecurityProducts {  get; set; }=new(); 
    }
}