//var gHelper = function () {

//    var route = {
//        Default: "/Beer/Index"
//    }

//    var getRoute = function (routeName, routeUrl) {
//        //routeName : mandatory, routeUrl : optional
//        switch (routeName.toUpperCase()) {
//            case "HOME":
//                return gHelper.route.Default;

//        }
//    }

//}

var gHelper = function () {
    var init = function () {

    }

    route = {
        APPROOT: window.location.protocol + '//' + window.location.host,
        BEERHOME: "/Beer/Index"
        
    }

    var getRoute = function (routeName, routeUrl) {
        //routeName : mandatory, routeUrl : optional
        var url = '';

        switch (routeName.toUpperCase()) {
            case "HOME":
                url = route.APPROOT;
                break;
            case "BEER_HOME":
                url = route.APPROOT + route.BEERHOME;
                break;
            default:
                url = route.APPROOT;
        }

        return url;
    }

    getRootPath = function () {
        return window.location.host;
    }

    return {
        initialize: init(),
        GetRoute: function (routeName, routeUrl) {
            return getRoute(routeName, routeUrl);
        },
        GetRootPath: function () {
            return route.APPROOT;
        }
    }
}
