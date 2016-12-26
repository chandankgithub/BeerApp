using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using BeerAppDemo.Models;

namespace BeerAppDemo.DAL
{
    public class BeerDbContext : DbContext
    {
        public DbSet<Beer> Beers { get; set; }
    }
}