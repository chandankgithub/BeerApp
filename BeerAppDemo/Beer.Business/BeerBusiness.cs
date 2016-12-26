using Beer.Business.Interface;
using BeerAppDemo.DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Models = BeerAppDemo.Models;

namespace Beer.Business
{
    public class BeerBusiness : IBeerBusiness
    {

        public List<Models.Beer> GetBeers()
        {
            BeerDbContext context = new BeerDbContext();
            var beers = context.Beers.ToList();
            return beers;
        }


        public Models.Beer AddBeer(Models.Beer beer)
        {
            BeerDbContext context = new BeerDbContext();
            context.Beers.Add(beer);
            context.SaveChanges();
            return beer;
        }
    }
}
