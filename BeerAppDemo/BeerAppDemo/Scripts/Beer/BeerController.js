
function beerController(model,helper) {
    

    var init = function () {
      // alert('controller')
    }

    /*class level private variables*/

    var privateVariables = {
        model: model,
        helper:helper
    }

    /******************************************Private functions **********************************/

    var saveBeer = function (newBeer, successCallback, failureCallback) {
        privateVariables.model.SaveBeer(newBeer, successCallback, failureCallback);
    };

    var redirectTo = function (routeName, routeUrl, successCallback, failureCallback) {
        var url = privateVariables.helper.GetRoute(routeName, routeUrl, successCallback, failureCallback);
        //privateVariables.model.RedirectTo(route, successCallback, failureCallback);
        window.location.href = url;
    }


    /******************************************Public functions **********************************/
    return {
        initialize: init(),
        SaveBeer: function (newBeer, successCallback, failureCallback) {
            saveBeer(newBeer, successCallback, failureCallback);
        },
        RedirectTo: function (routeName, routeUrl, successCallback, failureCallback) {
            redirectTo(routeName, routeUrl, successCallback, failureCallback);
        }
    }
   

}


