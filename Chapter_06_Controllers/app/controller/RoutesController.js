Ext.define('Chapter6Controllers.controller.RoutesController', {
    extend: 'Ext.app.Controller',
    config: {
        refs: {
            splitView: 'akosplitview',
            indexView: 'indexview'
        },
        routes: {
            'checkboxes': 'showCheckboxes',
            'radio': 'showRadioButtons',
            'form': 'showForm',
            'form/:id': 'fillForm'
        }
    },
    init: function () {
        console.log('INIT from RoutesController');
    },
    launch: function () {
        console.log('LAUNCH from RoutesController');
    },
    showCheckboxes: function () {
        var widget = Ext.widget('checkboxsample', {
            title: 'Checkboxes'
        });
        this.showWidget(widget);
    },
    showRadioButtons: function () {
        var widget = Ext.widget('radiobuttonsample', {
            title: 'Radio Buttons'
        });
        this.showWidget(widget);
    },
    showForm: function () {
        var widget = Ext.widget('textfieldsample', {
            title: 'Form'
        });
        this.showWidget(widget);
    },
    fillForm: function (id) {
        var widget = Ext.widget('textfieldsample', {
            title: 'Form'
        });
        widget.down('#sampleTextField').setValue('ID: ' + id);
        this.showWidget(widget);
    },
    showWidget: function(widget) {
        if (Ext.os.is.Phone) {
            this.getIndexView().push(widget);
        }
        else {
            this.getSplitView().displayComponent(widget);
        }
    }
});

