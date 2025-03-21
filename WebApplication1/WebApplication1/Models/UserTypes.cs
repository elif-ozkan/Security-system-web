using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class UserTypes
{
    [Key]public int UserTypeId { get; set; }

    public string UserType { get; set; } = null!;

    public virtual ICollection<Users> Users { get; set; } = new List<Users>();
}
