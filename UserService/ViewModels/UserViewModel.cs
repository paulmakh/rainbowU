using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserService.ViewModels
{
    public class UserViewModel
    {
        public string Id { get; set; }
        public int UserId { get; set; }
        public string UserName { get; set; }
        public string FullName { get; set; }
        public string Language { get; set; }
        public Nullable<int> RegionId { get; set; }
        public Nullable<int> Timezone { get; set; }
        public string PhoneNumber { get; set; }
        public string Email { get; set; }
        public bool IsLocked { get; set; }

    }
}