using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserService.Models
{
    public partial class Session
    {
        public System.Guid SessionId { get; set; }
        public Nullable<System.DateTime> LoginDateTime { get; set; }
        public string LoginName { get; set; }
        public Nullable<System.DateTime> LastActionDateTime { get; set; }
        public Nullable<bool> IsExpired { get; set; }
    }
}