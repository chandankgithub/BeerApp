using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;

namespace BeerAppDemo.Models
{
    public class BeerDbContext : DbContext
    {
        public DbSet<Beer> Beers { get; set; }
    }
}