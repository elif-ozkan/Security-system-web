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
builder.Services.AddScoped<AdminRepository>();
builder.Services.AddScoped<AdminService>();
builder.Services.AddScoped<AssignmentRepository>();
builder.Services.AddScoped<AssignmentService>();
builder.Services.AddScoped<AssigmentRequestRepository>();
builder.Services.AddScoped<AssigmentRequestService>();

// Session servisi eklendi
builder.Services.AddDistributedMemoryCache();
builder.Services.AddSession(options =>
{
    options.IdleTimeout = TimeSpan.FromMinutes(30);
    options.Cookie.HttpOnly = true;
    options.Cookie.IsEssential = true;
});

// Authentication (Cookie) yapýlandýrmasý
builder.Services.AddAuthentication("MyCookieAuth")
    .AddCookie(options =>
    {
        options.LoginPath = "/Login/Index"; // Giriþ sayfasý
        options.LogoutPath = "/Login/Logout"; // Çýkýþ sayfasý
        options.ExpireTimeSpan = TimeSpan.FromMinutes(60); // Oturum süresi
    });

builder.Services.AddControllersWithViews();
builder.Services.AddRazorPages();  
builder.Services.AddControllersWithViews();  


//CORS Politikasý kýsmý
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
app.UseRouting();
app.UseSession();

app.UseAuthentication();
app.UseAuthorization();
app.UseCors("AllowLocalhost"); //CORS Politikasý aktif

app.MapControllers();


app.Run();
