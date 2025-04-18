﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace WebApplication1.Models;

public partial class SecurityProducts
{
    [Key] public int SecurityProductId { get; set; }

    public string Name { get; set; } = null!;

    public string ProductType { get; set; } = null!;

    
    public DateTime? LicenseStartDate { get; set; }

    public DateTime? LicenseEndDate { get; set; }

    public int? CategoryId { get; set; }

    public virtual Categories? Category { get; set; }
    public ICollection<SecurityProductAssigments> SecurityProductAssigments { get; set; }= new List<SecurityProductAssigments>();
}
