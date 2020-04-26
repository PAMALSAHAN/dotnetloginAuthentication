using Microsoft.EntityFrameworkCore;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using WebApi.model;

namespace WebApi.models {
    public class AuthenticationContext : IdentityDbContext
    {
        public AuthenticationContext (DbContextOptions options) : base (options) { }
        public DbSet<ApplicationUser> AUserTBL { get; set; }
    }
}
