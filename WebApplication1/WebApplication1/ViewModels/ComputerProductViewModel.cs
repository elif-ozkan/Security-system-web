using WebApplication1.Models;

namespace WebApplication1.ViewModels
{
  public class ComputerProductViewModel
  {
     public string ProductType {get;set;}=string.Empty;
     public List<ComputerProductViewModel> ComputerProducts {get; set;}=new(); 
  }

}