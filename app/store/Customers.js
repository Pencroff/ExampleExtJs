/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/4/12
 * Time: 6:47 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.store.Customers', {
    extend: 'Ext.data.Store',
    requires: [
        'Ext.ux.data.PagingMemoryProxy'
    ],
    model: 'OdessaJs.model.Customer',
    groupField: 'City',
    pageSize: 5,
    proxy: {
        type: 'pagingmemory',
        //url: '/api/Customers',
        reader: {
            root: 'List',
            totalProperty: 'TotalItemCount'
        }
    },
    data: {
        List: [
            {Id: 1, Name: 'Name 1', City: 'City 1', Cash: '1234.12', Registered: '04/12/2013'},
            {Id: 2, Name: 'Name 2', City: 'City 2', Cash: '527.54', Registered: '04/12/2013'},
            {Id: 3, Name: 'Name 3', City: 'City 3', Cash: '6548.15', Registered: '04/12/2013'},
            {Id: 4, Name: 'Name 4', City: 'City 4', Cash: '4573.48', Registered: '04/12/2013'},
            {Id: 5, Name: 'Name 5', City: 'City 5', Cash: '5796.45', Registered: '04/12/2013'},
            {Id: 6, Name: 'Name 6', City: 'City 1', Cash: '1284.12', Registered: '04/12/2013'},
            {Id: 7, Name: 'Name 7', City: 'City 2', Cash: '597.54', Registered: '04/12/2013'},
            {Id: 8, Name: 'Name 8', City: 'City 3', Cash: '2348.15', Registered: '04/12/2013'},
            {Id: 9, Name: 'Name 9', City: 'City 4', Cash: '4243.48', Registered: '04/12/2013'},
            {Id: 10, Name: 'Name 10', City: 'City 5', Cash: '5466.45', Registered: '04/12/2013'},
            {Id: 11, Name: 'Name 11', City: 'City 1', Cash: '1814.12', Registered: '04/12/2013'},
            {Id: 12, Name: 'Name 12', City: 'City 2', Cash: '572.54', Registered: '04/12/2013'},
            {Id: 13, Name: 'Name 13', City: 'City 3', Cash: '6218.15', Registered: '04/12/2013'},
            {Id: 14, Name: 'Name 14', City: 'City 4', Cash: '4893.48', Registered: '04/12/2013'},
            {Id: 15, Name: 'Name 15', City: 'City 5', Cash: '5346.45', Registered: '04/12/2013'},
            {Id: 16, Name: 'Name 16', City: 'City 1', Cash: '1434.12', Registered: '04/12/2013'},
            {Id: 17, Name: 'Name 17', City: 'City 2', Cash: '477.54', Registered: '04/12/2013'},
            {Id: 18, Name: 'Name 18', City: 'City 3', Cash: '3248.15', Registered: '04/12/2013'},
            {Id: 19, Name: 'Name 19', City: 'City 4', Cash: '5873.48', Registered: '04/12/2013'},
            {Id: 20, Name: 'Name 20', City: 'City 5', Cash: '9296.45', Registered: '04/12/2013'}
        ],
        TotalItemCount: 20
    }
});
