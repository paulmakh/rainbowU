using System.Web.Http;
using System.Web.Mvc;
using System.Web.Routing;
using UserService.Areas.HelpPage;

namespace UserService
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            //routes.MapRoute(
            //    name: "Default",
            //    url: "{action}/{apiId}",
            //    defaults: new { controller = "Help", action = "Index", apiId = UrlParameter.Optional }
            //);
        }
    }
}