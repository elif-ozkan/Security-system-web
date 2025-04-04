namespace WebApplication1.Models
{
    public class SecurityProductAssigments 
    {
        public int AssignmentId { get; set; }
        public int SecurityProductId { get; set; }
        public int UserId { get; set; }
        public DateTime AssignmentDate { get; set; }
        public DateTime? ReturnDate { get; set; }  // Nullable çünkü ReturnDate boş olabilir

        // Navigational Properties
        public virtual SecurityProducts SecurityProduct { get; set; }
        public virtual Users User { get; set; } 
    }
}
