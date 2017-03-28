using Microsoft.AspNet.Identity.EntityFramework;
using System;
using System.ComponentModel.DataAnnotations.Schema;
using System.Security.Claims;
using System.Threading.Tasks;
using UserService.Infrastructure;

namespace UserService.Models
{
    public class ApplicationUser : IdentityUser
    {
        [Column(Order = 1)]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int UserId { get; set; }
        [Column(Order = 2)]
        public string FullName { get; set; }
        [Column(Order = 3)]
        public string Language { get; set; }
        [Column(Order = 4)]
        public Nullable<int> RegionId { get; set; }
        [Column(Order = 5)]
        public Nullable<int> Timezone { get; set; }

        internal async Task<ClaimsIdentity> GenerateUserIdentityAsync(ApplicationUserManager userManager, string authenticationType)
        {
            var userIdentity = await userManager.CreateIdentityAsync(this, authenticationType);
            return userIdentity;
        }
    }
}