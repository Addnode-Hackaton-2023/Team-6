using System;
using System.Collections.Generic;

namespace WebAPI.Models;

public partial class Deviation
{
    public int Id { get; set; }

    public string Text { get; set; } = null!;

    public int DriveId { get; set; }

    public virtual Drive Drive { get; set; } = null!;
}
