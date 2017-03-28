using System.Linq;
using System.Web.Http;
using System.Linq.Dynamic;
using System.Text;
using UserService.Models;
using System.Data.Entity;
using UserService.ViewModels;
using AutoMapper;
using Microsoft.AspNet.Identity;

namespace UserService.Controllers
{
    public class UsersController : BaseApiController
    {
        const string DEFAULT_PASSWORD = "q1w2e3r4!";

        private readonly ApplicationDbContext _dbContext = new ApplicationDbContext();

        // GET api/<controller>
        [Authorize]
        public ListResult<UserViewModel> Get([FromUri] PageParams pageParams)
        {
            // ordering
            string orderExpression = pageParams.SortColumn + " " + pageParams.SortDirection;
            var result = _dbContext.Users.OrderBy(orderExpression);

            // filtering
            if (!string.IsNullOrEmpty(pageParams.FilterValues))
            {
                var filterColumns = pageParams.FilterColumns.Split(',');
                var filterValues = pageParams.FilterValues.Split(',');

                StringBuilder  sb = new StringBuilder();
                for (int i=0; i < filterColumns.Length; i++)
                {
                    if(string.IsNullOrEmpty(filterColumns[i]) || string.IsNullOrEmpty(filterValues[i]))
                        continue;

                    if (sb.Length > 0)
                        sb.Append(" and ");

                    sb.Append($"{filterColumns[i]}.Contains(\"{filterValues[i]}\")");
                }

                if(sb.Length > 0)
                    result = result.Where(sb.ToString());
            }

            // paging
            var items = result.Skip(pageParams.Skip).Take(pageParams.Take).ToArray();

            return new ListResult<UserViewModel>
            {
                Items = items.Select(u => Mapper.Map<UserViewModel>(u)),
                TotalCount = _dbContext.Users.Count(),
                Page = pageParams.Skip % pageParams.Take,
                Take = items.Length,
                Skip = pageParams.Skip
            };
        }

        // GET api/<controller>/5
        public UserViewModel Get(int id)
        {
            return Mapper.Map<UserViewModel>(_dbContext.Users.Where(u => u.UserId == id).FirstOrDefault());
        }

        // POST api/<controller>
        public UserViewModel Post([FromBody]UserViewModel user)
        {
            ApplicationUser applicationUser = Mapper.Map<ApplicationUser>(user);
            IdentityResult result = AppUserManager.Create(applicationUser, DEFAULT_PASSWORD);
            return Mapper.Map<UserViewModel>(_dbContext.Users.Find(applicationUser.Id));
        }

        // PUT api/<controller>/5
        public UserViewModel Put(int id, [FromBody]UserViewModel user)
        {
            var u = Mapper.Map<ApplicationUser>(user);
            _dbContext.Entry(u).State = EntityState.Modified;
            _dbContext.Entry(u).Property(x => x.PasswordHash).IsModified = false;
            _dbContext.Entry(u).Property(x => x.SecurityStamp).IsModified = false;
            _dbContext.SaveChanges();
            return user;
        }

        // DELETE api/<controller>/5
        public void Delete(int id)
        {
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                _dbContext.Dispose();
            }
            base.Dispose(disposing);
        }

    }
}