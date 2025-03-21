using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class Assignments
{
    [Key] public int AssignmentId { get; set; }

    public int? ComputerProductId { get; set; }

    public int? UserId { get; set; }

    public DateOnly? AssignmentDate { get; set; }

    public DateOnly? ReturnDate { get; set; }

    public virtual ComputerProducts? ComputerProduct { get; set; }

    public virtual Users? User { get; set; }
}
