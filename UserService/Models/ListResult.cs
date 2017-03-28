using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Web;

namespace UserService.Models
{
    public class PageParams
    {
        public int Skip {get; set; }    
        public int Take { get; set; }
        public string SortDirection { get; set; }
        public string SortColumn { get; set; }
        public string FilterColumns { get; set; }
        public string FilterValues { get; set; }
    }

    public class ListResult<T>
    {
        public IEnumerable<T> Items { get; set; }
        public int TotalCount { get; set; }
        public int Page { get; set; }
        public int Take { get; set; }
        public int Skip { get; set; }
    }
}