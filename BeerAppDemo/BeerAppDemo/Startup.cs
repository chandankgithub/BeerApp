using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BeerAppDemo.Startup))]
namespace BeerAppDemo
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
