var objectFactory = {};

objectFactory.LoadAllDependencies = function (scriptName) {

    var controller = '/Scripts/Beer/' + scriptName + 'Controller.js';
    var view = '/Scripts/Beer/' + scriptName + 'View.js';
    var model = '/Scripts/Beer/' + scriptName + 'Model.js';
    var globalHelper = '/Scripts/Global/GlobalHelper.js'
   
    $.get(controller, function () {
        beerController();
    })
    .pipe($.get(globalHelper, function () {
        gHelper();
    }))
    .pipe($.get(model, function () {
        beerModel();
    }))
    .pipe($.get(view, function () {
        beerView(new beerController(new beerModel(), new gHelper()));
    }))
}
