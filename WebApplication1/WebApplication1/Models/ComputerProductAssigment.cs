namespace WebApplication1.Models
{
    public class ComputerProductAssigments
    {
        public int AssignmentId { get; set; }
        public int ComputerProductId { get; set; }
        public int UserId { get; set; }
        public DateTime AssignmentDate { get; set; }
        public DateTime? ReturnDate { get; set; }  // Nullable çünkü ReturnDate boş olabilir

        // Navigational Properties
        public virtual ComputerProducts ComputerProduct { get; set; }
        public virtual Users User { get; set; }
    }
}
