using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class Users
{
    [Key] public int UserId { get; set; }

    public string? Name { get; set; }

    public string? Surname { get; set; }

    public string Email { get; set; } = null!;

    public string Password { get; set; } = null!;

    public int? UserTypeId { get; set; }

    public virtual ICollection<AssigmentRequests> AssigmentRequests { get; set; } = new List<AssigmentRequests>();

    public virtual ICollection<Assignments> Assignments { get; set; } = new List<Assignments>();
    
    public virtual UserTypes? UserType { get; set; } 
}
