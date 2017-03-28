using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace UserService.Models
{
    public class SessionErrorLog
    {
        public System.DateTime CreateDateTime { get; set; }
        public string Login { get; set; }
        public string Error { get; set; }
    }
}