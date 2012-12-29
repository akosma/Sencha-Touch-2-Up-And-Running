Ext.require('Ext.app.Application');

Ext.Loader.setConfig({
    paths: {
        'ToDoListApp': '../Chapter_08_ToDoApp/app'
    }
});

var Application = null;

Ext.onReady(function() {
    Application = Ext.create('Ext.app.Application', {
        name: 'ToDoListApp',
        models: [ 'Task' ],
        
        launch: function() {
            //include the tests in the test.html head
            jasmine.getEnv().addReporter(new jasmine.TrivialReporter());
            jasmine.getEnv().execute();
        }
    });
});

