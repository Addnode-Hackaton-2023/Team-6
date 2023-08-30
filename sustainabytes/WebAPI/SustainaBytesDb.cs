using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using WebAPI.Models;

namespace WebAPI;

public partial class SustainaBytesDb : DbContext
{
    public SustainaBytesDb(DbContextOptions<SustainaBytesDb> options)
        : base(options)
    {
    }

    public virtual DbSet<City> Cities { get; set; }

    public virtual DbSet<Company> Companies { get; set; }

    public virtual DbSet<Deviation> Deviations { get; set; }

    public virtual DbSet<Drive> Drives { get; set; }

    public virtual DbSet<Giver> Givers { get; set; }

    public virtual DbSet<Pickup> Pickups { get; set; }

    public virtual DbSet<Receiver> Receivers { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<City>(entity =>
        {
            entity.ToTable("City", "dbo");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.City1)
                .HasMaxLength(50)
                .HasColumnName("City");
        });

        modelBuilder.Entity<Company>(entity =>
        {
            entity.ToTable("Company", "dbo");

            entity.Property(e => e.Name).HasMaxLength(100);
        });

        modelBuilder.Entity<Deviation>(entity =>
        {
            entity.ToTable("Deviation", "dbo");

            entity.Property(e => e.Id).ValueGeneratedNever();
            entity.Property(e => e.Text).HasMaxLength(500);

            entity.HasOne(d => d.Drive).WithMany(p => p.Deviations)
                .HasForeignKey(d => d.DriveId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Deviation_Drive");
        });

        modelBuilder.Entity<Drive>(entity =>
        {
            entity.ToTable("Drive", "dbo");

            entity.Property(e => e.EndTime).HasColumnType("datetime");
            entity.Property(e => e.EstimatedDeliveryTime).HasColumnType("datetime");
            entity.Property(e => e.StartTime).HasColumnType("datetime");

            entity.HasOne(d => d.Receiver).WithMany(p => p.Drives)
                .HasForeignKey(d => d.ReceiverId)
                .OnDelete(DeleteBehavior.ClientSetNull)
                .HasConstraintName("FK_Drive_Receiver");
        });

        modelBuilder.Entity<Giver>(entity =>
        {
            entity.ToTable("Giver", "dbo");

            entity.Property(e => e.Address).HasMaxLength(200);
            entity.Property(e => e.Name).HasMaxLength(100);

            entity.HasOne(d => d.City).WithMany(p => p.Givers)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("FK_Giver_City");

            entity.HasOne(d => d.Company).WithMany(p => p.Givers)
                .HasForeignKey(d => d.CompanyId)
                .HasConstraintName("FK_Giver_Company");
        });

        modelBuilder.Entity<Pickup>(entity =>
        {
            entity
                .HasNoKey()
                .ToTable("Pickup", "dbo");

            entity.Property(e => e.PickupTime).HasColumnType("datetime");

            entity.HasOne(d => d.Drive).WithMany()
                .HasForeignKey(d => d.DriveId)
                .HasConstraintName("FK_Pickup_Drive");

            entity.HasOne(d => d.Giver).WithMany()
                .HasForeignKey(d => d.GiverId)
                .HasConstraintName("FK_Pickup_Giver");
        });

        modelBuilder.Entity<Receiver>(entity =>
        {
            entity.ToTable("Receiver", "dbo");

            entity.Property(e => e.Name).HasMaxLength(100);

            entity.HasOne(d => d.City).WithMany(p => p.Receivers)
                .HasForeignKey(d => d.CityId)
                .HasConstraintName("FK_Receiver_City");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
