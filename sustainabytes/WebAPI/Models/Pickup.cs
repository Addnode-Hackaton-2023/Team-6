using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace WebAPI.Models;

public partial class Pickup
{
    public int DriveId { get; set; }

    public int GiverId { get; set; }

    public DateTime PickupTime { get; set; }

    public double Weight { get; set; }

    [JsonIgnore]
    public virtual Drive Drive { get; set; } = null!;

    [JsonIgnore]
    public virtual Giver Giver { get; set; } = null!;
}
