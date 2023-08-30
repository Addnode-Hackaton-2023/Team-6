using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class Company
{
    public int Id { get; set; }

    public string Name { get; set; } = null!;

    public virtual ICollection<Giver> Givers { get; set; } = new List<Giver>();
}
