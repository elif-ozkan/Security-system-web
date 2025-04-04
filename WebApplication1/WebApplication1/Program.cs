using Microsoft.EntityFrameworkCore;
using WebApplication1;
using WebApplication1.DbModels;
using WebApplication1.Models;
using WebApplication1.Repository;
using WebApplication1.Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<MyDbContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("DefaultConnection")));
builder.Services.AddScoped<CategoryService>();
builder.Services.AddScoped<CategoryRepository>();
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<ComputerProductsRepository>();
builder.Services.AddScoped<ComputerProductService>();
builder.Services.AddScoped<SecurityProductRepository>();
builder.Services.AddScoped<SecurityProductService>();
builder.Services.AddScoped<UserTypeRepository>();
builder.Services.AddScoped<UserTypeService>();
builder.Services.AddScoped<SecurityProductAssigmentRepository>();
builder.Services.AddScoped<SecurityProductAssigmentService>();
builder.Services.AddScoped<ComputerProductAssigmentRepository>();
builder.Services.AddScoped<ComputerProductAssigmentService>();

//CORS Politikası kısmı
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowLocalhost",
        policy =>
        {
            policy.WithOrigins("http://localhost:5173") 
                  .AllowAnyMethod()
                  .AllowAnyHeader();
        });
});


var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();
app.UseCors("AllowLocalhost"); //CORS Politikası aktif

app.MapControllers();

app.Run();
