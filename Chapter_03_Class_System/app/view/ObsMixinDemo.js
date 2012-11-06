Ext.define('Chapter3ClassSystem.view.ObsMixinDemo', {
    extend: 'Chapter3ClassSystem.view.DemoPanel',
    xtype: 'obsdemo',

    getPrefix: function () {
        return 'Ext.mixin.Observable';
    },

    getFunctions: function () {
        return [ 'main' ];
    },

    mainDemo: function () {
        Ext.define('Animal', {
            mixins: ['Ext.mixin.Observable'],

            config: {
                name: '(some animal name here)',
                kind: '(animal kind here)'
            },

            constructor: function(config) {
                this.initConfig(config);
            },

            eat: function (animal) {
                this.fireEvent('eating', animal);
                animal.fireEvent('beingEaten', this);
            }
        });

        var lion = Ext.create('Animal', {
            name: 'Simba',
            kind: 'Lion',
            listeners: {
                eating: function (prey) {
                    console.log(Ext.String.format('{0} the {1} is eating {2} the {3}!', this.getName(), 
                                                  this.getKind(), prey.getName(), prey.getKind()));
                }
            }
        });

        var zebra = Ext.create('Animal', {
            name: 'Poomba',
            kind: 'Zebra',
            listeners: {
                beingEaten: function (predator) {
                    console.log(Ext.String.format('{0} the {1} is being eaten by {2} the {3}!', this.getName(),
                                                  this.getKind(), predator.getName(), predator.getKind()));
                }
            }
        });

        lion.eat(zebra);
    }
});


