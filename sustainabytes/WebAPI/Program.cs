using Microsoft.EntityFrameworkCore;
using System.Text.Json.Serialization;
using WebAPI;
using WebAPI.DataStore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddControllers().AddJsonOptions(x =>
                x.JsonSerializerOptions.ReferenceHandler = ReferenceHandler.IgnoreCycles);

builder.Services.AddDbContext<SustainaBytesDb>(opt => opt.UseSqlServer("Server=tcp:add-hack.database.windows.net,1433;Initial Catalog=add-hack-6;Persist Security Info=False;User ID=addhack6;Password=Dontwastefood1!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;"));
builder.Services.AddScoped<GiversRepository>();
builder.Services.AddScoped<ReceiversRepository>();
builder.Services.AddScoped<DrivesRepository>();
//builder.Services.AddDatabaseDeveloperPageExceptionFilter();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
