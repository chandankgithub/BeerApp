var beerView = function () {
    var init = function () {
        bindEventHandler();
    }

    var editBeerForm = {
        domElements: {
            nameInput: $("#newName"),
            colorInput: $("#newColor"),
            hasTastedCheckbox: $("#newHasTasted"),
            saveButton: $("#newSave"),
            cancelButton: $("#newCancel")
        },

        eventHandlers: {
            onSaveButtonClick: function () {
                privateMethods.getControlValues();
                return false;
            }
        }
    }

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
        getControlValues: function () {
            var name = privateMethods.getInputValue(editBeerForm.domElements.nameInput);
            var color = privateMethods.getInputValue(editBeerForm.domElements.colorInput);
            var hasTasted = privateMethods.getCheckboxValue(editBeerForm.domElements.hasTastedCheckbox);
            alert(name + ', ' + color + ', ' + hasTasted);
        }

    }
    
   
    var bindEventHandler = function () {
        editBeerForm.domElements.saveButton.off('click').on('click', editBeerForm.eventHandlers.onSaveButtonClick)
    }

    return {
        initialize:init()
    }
}