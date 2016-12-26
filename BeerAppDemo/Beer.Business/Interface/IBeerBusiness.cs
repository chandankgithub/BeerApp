using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models = BeerAppDemo.Models;

namespace Beer.Business.Interface
{
    public interface IBeerBusiness
    {
        List<Models.Beer> GetBeers();
        Models.Beer AddBeer(Models.Beer beer);
    }
}
