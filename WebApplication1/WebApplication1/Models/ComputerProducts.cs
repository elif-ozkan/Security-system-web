using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class ComputerProducts
{
    [Key] public int ComputerProductId { get; set; }

    public string Name { get; set; } = null!;

    public string Brand { get; set; } = null!;

    public string Model { get; set; } = null!;

    public string? Ram { get; set; }

    public int? CategoryId { get; set; }

    public virtual ICollection<AssigmentRequests> AssigmentRequests { get; set; } = new List<AssigmentRequests>();

    public virtual ICollection<Assignments> Assignments { get; set; } = new List<Assignments>();

    public virtual Categories? Category { get; set; }
    public ICollection<ComputerProductAssigments> ComputerProductAssigments { get; set; }= new List<ComputerProductAssigments>();
}
