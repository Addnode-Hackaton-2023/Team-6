using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class City
{
    public int Id { get; set; }

    public string City1 { get; set; } = null!;

    public virtual ICollection<Giver> Givers { get; set; } = new List<Giver>();

    public virtual ICollection<Receiver> Receivers { get; set; } = new List<Receiver>();
}
