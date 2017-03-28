using AutoMapper;
using UserService.Models;
using UserService.ViewModels;

namespace UserService
{
    public static class MapperConfig
    {
        public static void Bind()
        {
            Mapper.Initialize(cfg =>
            {
            cfg.CreateMap<ApplicationUser, UserViewModel>();
            cfg.CreateMap<UserViewModel, ApplicationUser>()
                .ForMember(dest => dest.Id,
                    opt => opt.ResolveUsing(source => (new ApplicationUser()).Id));
            });
        }
    }
}