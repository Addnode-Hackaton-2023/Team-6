using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class Giver
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public int? CompanyId { get; set; }

    public string? Address { get; set; }

    public int? CityId { get; set; }

    public virtual City? City { get; set; }

    public virtual Company? Company { get; set; }

    public virtual ICollection<Pickup> Pickups { get; set; } = new List<Pickup>();
}
