/**
 * Created with JetBrains WebStorm.
 * Project: OdessaJs.SPA
 * User: Sergii Danilov
 * Date: 2/19/13
 * Time: 3:37 PM
 */
/*global Ext:true*/

Ext.define('OdessaJs.view.popup.CustomerSearch', {
    extend: 'Ext.window.Window',
    alias: 'widget.customerSearch',
    requires: [
        'Ext.ux.LinkButton'
    ],
    title: 'Customer',
    layout: 'fit',
    resizable: false,
    autoShow: true,
    padding: '1 1 25 1',
    collapsible: false,
    width: 480,
    height: 320,
    initComponent: function () {
        'use strict';
        var me = this,
            searchPanel = {
                xtype: 'panel',
                layout: 'hbox',
                width: '100%',
                border: 0,
                items: [{
                    xtype    : 'textfield',
                    margin: '5 5 5 10',
                    labelWidth: 'auto',
                    labelSeparator: '',
                    fieldLabel: 'Search',
                    emptyText: 'enter search value'
                }, {
                    xtype: 'button',
                    action: 'searchCustomer',
                    margin: '5 0',
                    text: '<div style="font-size: 14px;"><i class="icon-search"></i></div>'
                }, {
                    xtype: 'tbspacer',
                    width: 15
                }, {
                    xtype: 'button',
                    action: 'newCustomer',
                    margin: '5 0',
                    text: '<div style="font-size: 14px;"><i class="icon-edit"></i> New</div>'
                }, {
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    action: 'clearSearchCustomer',
                    margin: '5',
                    style: 'background-color: #ff7f50;',
                    text: '<div style="font-size: 14px; color: #fdd;"><i class="icon-trash"></i> Clear Search Result</div>'
                }]
            },
            headerPanel = {
                xtype: 'panel',
                layout: 'hbox',
                width: 455,
                height: 32,
                margin: '0 10',
                border: 0,
                style: 'border-top: 0px; border-right: 0px; border-bottom: 2px solid #999;',
                items: [{
                    xtype: 'label',
                    margin: '2 10',
                    html: '<div style="font-size: 22px;"><i class="icon-user"></i> Customer</div>'
                }]
            },
            tablePanel = {
                xtype: 'panel',
                width: 455,
                border: 0,
                margin: '5 10',
                items: [{
                    xtype: 'gridpanel',
                    store: 'Customers',
                    height: 190,
                    columns: {
                        defaults: {
                            draggable: false,
                            resizable: false,
                            hideable: false
                        },
                        items: [
                            { menuDisabled: true, width: 3 },
                            { header: 'Customer #', width: 75, xtype: 'templatecolumn', tpl: '{CompanyId}-{DivisionId}-{CustomerId}'},
                            { header: 'Name', flex: 1, xtype: 'templatecolumn', tpl: '{Name}'},
                            { header: 'City - State - Zip', flex: 1, xtype: 'templatecolumn', tpl: '{City}-{State}-{Zip}'}]
                    }
                }]
            };
        me.items = [{
            xtype: 'panel',
            layout: 'vbox',
            items: [
                searchPanel,
                headerPanel,
                tablePanel
            ]
        }];

        me.superclass.initComponent.apply(this, arguments);
    }
});