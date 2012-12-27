var Harness = Siesta.Harness.Browser.SenchaTouch;

Harness.configure({
    title         : 'Testing the To Do List Application',
    transparentEx : false,
    loaderPath    : { 'ToDoListApp' : 'todoapp/app' }
});

Harness.start(
    {
        group : 'To Do List',

        // Load these files for each ST 2.0 test
        preload : [
            "/_libs/sencha/sencha-touch-all-debug.js",
            "/_libs/sencha/resources/css/sencha-touch.css"
        ],
        items : [
            'tests/sanity.js',
            'tests/model.js',
            'tests/createTask.js'
        ]
    }
);

