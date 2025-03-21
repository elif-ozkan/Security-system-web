using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace WebApplication1.Models;

public partial class MyDbContext : DbContext
{
    public MyDbContext()
    {
    }

    public MyDbContext(DbContextOptions<MyDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<AssigmentRequests> AssigmentRequests { get; set; }

    public virtual DbSet<Assignments> Assignments { get; set; }

    public virtual DbSet<Categories> Categories { get; set; }

    public virtual DbSet<ComputerProducts> ComputerProducts { get; set; }

    public virtual DbSet<SecurityProducts> SecurityProducts { get; set; }

    public virtual DbSet<UserTypes> UserTypes { get; set; }

    public virtual DbSet<Users> Users { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see https://go.microsoft.com/fwlink/?LinkId=723263.
        => optionsBuilder.UseNpgsql("Host=localhost;Port=5432;Database=Security System Database;Username=postgres;Password=12345");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<AssigmentRequests>(entity =>
        {
            entity.HasKey(e => e.RequestId).HasName("assigment_requests_pkey");

            entity.ToTable("assigment_requests");

            entity.Property(e => e.RequestId).HasColumnName("request_id");
            entity.Property(e => e.ApprovalDate).HasColumnName("approval_date");
            entity.Property(e => e.ComputerProductId).HasColumnName("computer_product_id");
            entity.Property(e => e.RequestDate).HasColumnName("request_date");
            entity.Property(e => e.RequestType)
                .HasMaxLength(50)
                .HasColumnName("request_type");
            entity.Property(e => e.RequestedReturnDate).HasColumnName("requested_return_date");
            entity.Property(e => e.Status)
                .HasMaxLength(50)
                .HasColumnName("status");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.ComputerProduct).WithMany(p => p.AssigmentRequests)
                .HasForeignKey(d => d.ComputerProductId)
                .HasConstraintName("assigment_requests_computer_product_id_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.AssigmentRequests)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("assigment_requests_user_id_fkey");
        });

        modelBuilder.Entity<Assignments>(entity =>
        {
            entity.HasKey(e => e.AssignmentId).HasName("assignments_pkey");

            entity.ToTable("assignments");

            entity.Property(e => e.AssignmentId).HasColumnName("assignment_id");
            entity.Property(e => e.AssignmentDate).HasColumnName("assignment_date");
            entity.Property(e => e.ComputerProductId).HasColumnName("computer_product_id");
            entity.Property(e => e.ReturnDate).HasColumnName("return_date");
            entity.Property(e => e.UserId).HasColumnName("user_id");

            entity.HasOne(d => d.ComputerProduct).WithMany(p => p.Assignments)
                .HasForeignKey(d => d.ComputerProductId)
                .HasConstraintName("assignments_computer_product_id_fkey");

            entity.HasOne(d => d.User).WithMany(p => p.Assignments)
                .HasForeignKey(d => d.UserId)
                .HasConstraintName("assignments_user_id_fkey");
        });

        modelBuilder.Entity<Categories>(entity =>
        {
            entity.HasKey(e => e.CategoryId).HasName("categories_pkey");

            entity.ToTable("categories");

            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.Name)
                .HasMaxLength(100)
                .HasColumnName("name");
        });

        modelBuilder.Entity<ComputerProducts>(entity =>
        {
            entity.HasKey(e => e.ComputerProductId).HasName("computer_products_pkey");

            entity.ToTable("computer_products");

            entity.Property(e => e.ComputerProductId).HasColumnName("computer_product_id");
            entity.Property(e => e.Brand)
                .HasMaxLength(255)
                .HasColumnName("brand");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.Model)
                .HasMaxLength(255)
                .HasColumnName("model");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Ram)
                .HasMaxLength(50)
                .HasColumnName("ram");

            entity.HasOne(d => d.Category).WithMany(p => p.ComputerProducts)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("computer_products_category_id_fkey");
        });

        modelBuilder.Entity<SecurityProducts>(entity =>
        {
            entity.HasKey(e => e.SecurityProductId).HasName("security_products_pkey");

            entity.ToTable("security_products");

            entity.Property(e => e.SecurityProductId).HasColumnName("security_product_id");
            entity.Property(e => e.CategoryId).HasColumnName("category_id");
            entity.Property(e => e.LicenseEndDate).HasColumnName("license_end_date");
            entity.Property(e => e.LicenseStartDate).HasColumnName("license_start_date");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.ProductType)
                .HasMaxLength(255)
                .HasColumnName("product_type");

            entity.HasOne(d => d.Category).WithMany(p => p.SecurityProducts)
                .HasForeignKey(d => d.CategoryId)
                .HasConstraintName("security_products_category_id_fkey");
        });

        modelBuilder.Entity<UserTypes>(entity =>
        {
            entity.HasKey(e => e.UserTypeId).HasName("user_types_pkey");

            entity.ToTable("user_types");

            entity.Property(e => e.UserTypeId).HasColumnName("user_type_id");
            entity.Property(e => e.UserType)
                .HasMaxLength(50)
                .HasColumnName("user_type");
        });

        modelBuilder.Entity<Users>(entity =>
        {
            entity.HasKey(e => e.UserId).HasName("users_pkey");

            entity.ToTable("users");

            entity.HasIndex(e => e.Email, "users_email_key").IsUnique();

            entity.Property(e => e.UserId).HasColumnName("user_id");
            entity.Property(e => e.Email)
                .HasMaxLength(100)
                .HasColumnName("email");
            entity.Property(e => e.Name)
                .HasMaxLength(255)
                .HasColumnName("name");
            entity.Property(e => e.Password)
                .HasMaxLength(64)
                .HasColumnName("password");
            entity.Property(e => e.Surname)
                .HasMaxLength(255)
                .HasColumnName("surname");
            entity.Property(e => e.UserTypeId).HasColumnName("user_type_id");

            entity.HasOne(d => d.UserType).WithMany(p => p.Users)
                .HasForeignKey(d => d.UserTypeId)
                .HasConstraintName("users_user_type_id_fkey");
        });

        OnModelCreatingPartial(modelBuilder);
    }

   

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
