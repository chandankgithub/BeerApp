var objectFactory = {};

objectFactory.LoadAllDependencies = function (scriptName) {

    var controller = '/Scripts/Beer/' + scriptName + 'Controller.js';
    var view = '/Scripts/Beer/' + scriptName + 'View.js';
    var model = '/Scripts/Beer/' + scriptName + 'Model.js';

   
    $.get(controller, function () {
        beerController();
    })
    .pipe($.get(view, function () {
        beerView();
    }))
    .pipe($.get(model, function () {
        beerModel();
    }))
}
