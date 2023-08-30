using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class Pickup
{
    public int? DriveId { get; set; }

    public int? GiverId { get; set; }

    public DateTime? PickupTime { get; set; }

    public double? Weight { get; set; }

    public virtual Drive? Drive { get; set; }

    public virtual Giver? Giver { get; set; }
}
