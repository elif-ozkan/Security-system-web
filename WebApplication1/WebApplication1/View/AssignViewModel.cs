using WebApplication1.Models;

namespace WebApplication1.View
{
    public class AssignViewModel
    {
        public int SelectedUserId { get; set; }
        public int? SelectedComputerProductId { get; set; }
        public int? SelectedSecurityProductId { get; set; }
        public DateTime AssignmentDate { get; set; }
        public DateTime? ReturnDate { get; set; }

        public List<Users> Users { get; set; }
        public List<ComputerProducts> ComputerProducts { get; set; }
        public List<SecurityProducts> SecurityProducts { get; set; } 
    }
}
