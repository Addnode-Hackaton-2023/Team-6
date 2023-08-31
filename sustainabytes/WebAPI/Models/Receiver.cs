using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class Receiver
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? CityId { get; set; }

    public string? Address { get; set; }

    public virtual City? City { get; set; }

    public virtual ICollection<Drive> Drives { get; set; } = new List<Drive>();
}
