/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/4/12
 * Time: 6:53 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.model.Customer', {
    extend: 'Ext.data.Model',
    idProperty: 'Id',
    fields: [
        {name: 'Id', type: 'int'},
        {name: 'Name', type: 'string'},
        {name: 'City', type: 'string'},
        {name: 'Cash', type: 'float'},
        {name: 'Registered', type: 'data'}
    ]
});