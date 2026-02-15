using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TaskManagerApi.Data;

public class AppDbContextFactory : IDesignTimeDbContextFactory<AppDbContext>
{
    public AppDbContext CreateDbContext(string[] args)
    {
        var optionsBuilder = new DbContextOptionsBuilder<AppDbContext>();

        optionsBuilder.UseSqlServer(
            "Server=(localdb)\\MSSQLLocalDB;Database=TaskDb;Trusted_Connection=True;");

        return new AppDbContext(optionsBuilder.Options);
    }
}
