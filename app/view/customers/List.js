/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/4/12
 * Time: 4:25 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.view.customers.List',
    {
        extend: 'Ext.grid.Panel',
        alias: 'widget.customersList',
        title: 'Customers',
        store: 'Customers',
        features: [{ ftype: 'grouping' }],
        dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'Customers',   // same store GridPanel is using
            dock: 'bottom',
            width: 640,
            displayInfo: true,
            displayMsg: 'Displaying customers {0} - {1} of {2}',
            emptyMsg: "No customers to display"
        }],
        initComponent: function () {
            'use strict';
            var me = this;
            me.columns = {
                defaults: {
                    draggable: false,
                    resizable: false,
                    hideable: false
                },
                items: [
                    { menuDisabled: true, width: 25 },
                    { header: 'Id', dataIndex: 'Id', width: 75 },
                    { header: 'Name', flex: 1, xtype: 'templatecolumn', tpl: '{Name (Id)}'},
                    { header: 'City', dataIndex: 'City', width: 150},
                    { header: 'Cash', dataIndex: 'Cash', width: 200},
                    { header: 'Registered', dataIndex: 'Registered', width: 80},
                    { menuDisabled: true, width: 25 }]
            };
            me.superclass.initComponent.apply(me, arguments);
        }
    });