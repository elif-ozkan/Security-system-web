using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class Categories
{
    [Key]  public int CategoryId { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<ComputerProducts> ComputerProducts { get; set; } = new List<ComputerProducts>();

    public virtual ICollection<SecurityProducts> SecurityProducts { get; set; } = new List<SecurityProducts>();
}
