namespace WebApplication1.Models
{
    public class LoginRequest
    {
        public int Id { get; set; }
        public string Username { get; set; } = string.Empty;
        public int RoleId {  get; set; }
        public string RoleName { get; set; }

        public string Password { get; set; }
        public string RedirectUrl { get; set; }
    }
}
