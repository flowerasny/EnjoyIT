﻿// <auto-generated />
using DataContext;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace API.Migrations
{
    [DbContext(typeof(DataBaseContext))]
    [Migration("20200502145715_users")]
    partial class users
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.3")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("API.Db.Dtos.Item", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("description")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("githubPage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("orginator")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("rate")
                        .HasColumnType("int");

                    b.Property<string>("solutionPage")
                        .HasColumnType("nvarchar(max)");

                    b.Property<byte>("status")
                        .HasColumnType("tinyint");

                    b.Property<string>("title")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Items");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            description = "opis...",
                            githubPage = "githubPage..",
                            orginator = "orginator..",
                            rate = 3,
                            solutionPage = "solutionPage",
                            status = (byte)1,
                            title = "title.."
                        },
                        new
                        {
                            Id = 2,
                            description = "opis...",
                            githubPage = "githubPage..",
                            orginator = "orginator..",
                            rate = 3,
                            solutionPage = "solutionPage",
                            status = (byte)1,
                            title = "title.."
                        },
                        new
                        {
                            Id = 3,
                            description = "opis...",
                            githubPage = "githubPage..",
                            orginator = "orginator..",
                            rate = 3,
                            solutionPage = "solutionPage",
                            status = (byte)1,
                            title = "title.."
                        });
                });

            modelBuilder.Entity("API.Db.Dtos.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("email")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("firstName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("lastName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("password")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });
#pragma warning restore 612, 618
        }
    }
}
