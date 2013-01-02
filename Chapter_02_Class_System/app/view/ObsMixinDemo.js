Ext.define('Chapter2ClassSystem.view.ObsMixinDemo', {
    extend: 'Chapter2ClassSystem.view.DemoPanel',
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
                    var template = '{0} the {1} is eating {2} the {3}!';
                    var name = this.getName();
                    var kind = this.getKind();
                    var preyName = prey.getName();
                    var preyKind = prey.getKind();
                    var txt = Ext.String.format(template, name, kind, preyName, preyKind);
                    console.log(txt);
                }
            }
        });

        var zebra = Ext.create('Animal', {
            name: 'Poomba',
            kind: 'Zebra',
            listeners: {
                beingEaten: function (predator) {
                    var template = '{0} the {1} is being eaten by {2} the {3}!';
                    var name = this.getName();
                    var kind = this.getKind();
                    var predName = predator.getName();
                    var predKind = predator.getKind();
                    var txt = Ext.String.format(template, name, kind, predName, predKind);
                    console.log(txt);
                }
            }
        });

        lion.eat(zebra);
    }
});


