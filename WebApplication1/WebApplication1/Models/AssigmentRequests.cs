using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class AssigmentRequests
{
    [Key] public int RequestId { get; set; }

    public int? UserId { get; set; }

    public int? ComputerProductId { get; set; }

    public DateTime RequestDate { get; set; }

    public string Status { get; set; } = null!;

    public string? RequestType { get; set; }

    public DateTime RequestedReturnDate { get; set; }

    public DateTime ApprovalDate { get; set; }

    public virtual ComputerProducts? ComputerProduct { get; set; }

    public virtual Users? User { get; set; }
}
