using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

namespace WebAPI.Models;

public partial class Drive
{
    public int Id { get; set; }

    public DateTime StartTime { get; set; }

    public DateTime? EstimatedDeliveryTime { get; set; }

    public DateTime? EndTime { get; set; }

    public int ReceiverId { get; set; }

    public virtual ICollection<Deviation> Deviations { get; set; } = new List<Deviation>();

    public virtual ICollection<Pickup> Pickups { get; set; } = new List<Pickup>();

    [JsonIgnore]
    public virtual Receiver Receiver { get; set; } = null!;
}
