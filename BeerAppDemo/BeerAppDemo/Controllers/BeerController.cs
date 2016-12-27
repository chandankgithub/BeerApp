using BeerAppDemo.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

using Beer.Business;
using System.Web.Helpers;
namespace BeerAppDemo.Controllers
{
    public class BeerController : Controller
    {
        private BeerBusiness business = new BeerBusiness();
        //
        // GET: /Beer/
        public ActionResult Index()
        {
            var beers = business.GetBeers();
            return View(beers);
            
        }

        public ActionResult GetBeers()
        {
            var beers = business.GetBeers();
            return Json(beers, JsonRequestBehavior.AllowGet);

        }

        public ActionResult EditBeer()
        {
            return View();
        }

        
        [HttpPost]
        public JsonResult Update(BeerAppDemo.Models.Beer newBeer)
        {
            if (newBeer != null)
            {
                var beer = business.AddBeer(newBeer);
                return Json(beer);
            }
            return new JsonResult();
        }

        [HttpPost]
        public JsonResult Edit(BeerAppDemo.Models.Beer newBeer)
        {
            if (newBeer != null)
            {
                var beer = business.AddBeer(newBeer);
                return Json(beer, JsonRequestBehavior.AllowGet);
            }
            return new JsonResult();
        }
	}
}