
function beerController(model) {
    

    var init = function () {
      // alert('controller')
    }

    /*class level private variables*/

    var privateVariables = {
        model:model
    }
    var saveBeer = function (newBeer, successCallback, failureCallback) {
        privateVariables.model.SaveBeer(newBeer, successCallback, failureCallback);
    }
    return {
        initialize: init(),
        SaveBeer: function (newBeer, successCallback, failureCallback) {
            saveBeer(newBeer, successCallback, failureCallback);
        }
    }
   

}


