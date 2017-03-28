using System.Data.Entity;

namespace UserService
{
    public class Initializer: MigrateDatabaseToLatestVersion<ApplicationDbContext, Configuration>
    {
    }
}