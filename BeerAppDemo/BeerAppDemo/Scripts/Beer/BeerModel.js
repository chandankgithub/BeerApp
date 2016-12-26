var beerModel = function () {
    var init = function () {
       
    }

    var saveBeer = function (newBeer, successCallback, failureCallback) {
        
        $.ajax({
            type: "POST",
            url: "/Beer/Update",
            data: JSON.stringify(newBeer ),
            contentType: "application/json; charset=utf-8",
            dataType: "json"
        }).success(successCallback).fail(failureCallback);
        
    }


    return {
        initialize: init(),
        SaveBeer: function (newBeer, successCallback, failureCallback) {
            saveBeer(newBeer, successCallback, failureCallback);
        }
    }
}