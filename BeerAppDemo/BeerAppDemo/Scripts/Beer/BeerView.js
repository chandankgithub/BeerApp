var beerView = function (ctrl, model) {

    //trigger when page loads
    var init = function () {
        bindEventHandler();
    }

    /*Class level private variables*/
    var privateVariables = {
        controller: ctrl,
        model: model,
        beer: {
            name: "",
            color: "",
            hasTasted:false
        }
    };

    /*class level private methods*/
    var privateMethods = {

        getInputValue: function (inputElement) {
            if (inputElement.is('input:text')) {
                return $(inputElement).val();
            }
        },

        getCheckboxValue: function (inputElement) {
            if ($(inputElement).is(':checkbox')) {
                return $(inputElement).is(':checked');
            }
        },

        prepareModel: function () {
            privateVariables.beer.name = privateMethods.getInputValue(editBeerForm.domElements.nameInput);
            privateVariables.beer.color = privateMethods.getInputValue(editBeerForm.domElements.colorInput);
            privateVariables.beer.hasTasted = privateMethods.getCheckboxValue(editBeerForm.domElements.hasTastedCheckbox);
            return privateVariables.beer;
        },

        saveNewBeer: function () {
            debugger;
            var beer = privateMethods.prepareModel();
            privateVariables.controller.SaveBeer(beer, editBeerForm.callbacks.saveBeerSuccessCallback, editBeerForm.callbacks.saveBeerFailureCallback);
        },

        confirmCancelForm: function () {
            var confirmOk = confirm('Are you sure you want to cancel the form and go to listing page ?');
            if (confirmOk) {
                beerController.GetMyName();
            }
        }

    }
    
    /*Edit form related changes*/
    var editBeerForm = {

        formCollection: {},

        domElements: {
            nameInput: $("#newName"),
            colorInput: $("#newColor"),
            hasTastedCheckbox: $("#newHasTasted"),
            saveButton: $("#newSave"),
            cancelButton: $("#newCancel")
        },

        eventHandlers: {
            onSaveButtonClick: function () {
                privateMethods.saveNewBeer();
                return false;
            },
            onCancelButtonClick: function () {
                privateMethods.confirmCancelForm();
                return false;
            }
        },

        callbacks: {
            saveBeerSuccessCallback: function (result) {
                alert('New Beer Saved');
            },
            saveBeerFailureCallback: function (error) {
                //alert('Exception occured: ' + error)
                console.log(error);
            }
        }
    }
   
    var bindEventHandler = function () {
        editBeerForm.domElements.saveButton.off('click').on('click', editBeerForm.eventHandlers.onSaveButtonClick);
        editBeerForm.domElements.cancelButton.off('click').on('click', editBeerForm.eventHandlers.onCancelButtonClick);
    }

    return {
        initialize:init()
    }
}