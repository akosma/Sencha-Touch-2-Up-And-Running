Ext.define('Chapter4LocalStorage.model.Person', {
    extend: 'Ext.data.Model',
    config: {
        identifier: 'uuid',
        fields: [{
            name: 'entryId', type: 'int' 
        }, {
            name: 'firstName', type: 'string'
        }, {
            name: 'lastName', type: 'string'
        }, {
            name: 'phone', type: 'string'
        }, {
            name: 'email', type: 'string'
        }, {
            name: 'address', type: 'string'
        }, {
            name: 'city', type: 'string'
        }, {
            name: 'zip', type: 'string'
        }, {
            name: 'state', type: 'string'
        }, {
            name: 'country', type: 'string'
        }, {
            name: 'description', type: 'string'
        }, {
            name: 'password', type: 'string'
        }, {
            name: 'createdOn',  type: 'string'
        }, {
            name: 'modifiedOn', type: 'string'
        }],
        idProperty: 'entryId'
    }
});

