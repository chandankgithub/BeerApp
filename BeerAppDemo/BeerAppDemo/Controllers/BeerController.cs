using BeerAppDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BeerAppDemo.Controllers
{
    public class BeerController : Controller
    {
        //
        // GET: /Beer/
        public ActionResult Index()
        {
            BeerDbContext context = new BeerDbContext();
            var Beers = context.Beers.ToList();
            return View(Beers);
        }

        public ActionResult GetNewBeerForm()
        {
            return View("NewBeerForm");
        }

        [HttpPost]
        public ActionResult Create(FormCollection coll)
        {
            return new JsonResult();
        }
	}
}