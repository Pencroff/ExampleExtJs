/**
 * Created with JetBrains WebStorm.
 * Project: OdessaJs.SPA
 * User: Sergii Danilov
 * Date: 4/4/13
 * Time: 3:03 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.view.popup.NewExternalCustomer', {
    extend: 'Ext.window.Window',
    alias: 'widget.newExternalCustomer',
    requires: [
        'Ext.ux.LinkButton'
    ],
    title: 'External customer',
    layout: 'fit',
    resizable: false,
    autoShow: true,
    padding: '1 1 25 1',
    collapsible: false,
    width: 480,
    height: 190,
    initComponent: function () {
        'use strict';
        var me = this,
            required = '<span style="color:red;font-weight:bold" data-qtip="Required field">|</span>',
//            searchPanel = {
//                xtype: 'panel',
//                layout: 'hbox',
//                width: '100%',
//                border: 0,
//                items: [{
//                    xtype    : 'textfield',
//                    margin: '5 5 5 10',
//                    labelWidth: 'auto',
//                    labelSeparator: '',
//                    fieldLabel: 'Search',
//                    emptyText: 'enter search value'
//                }, {
//                    xtype: 'button',
//                    action: 'searchCustomer',
//                    margin: '5 0',
//                    text: '<div style="font-size: 14px;"><i class="icon-search"></i></div>'
//                }, {
//                    xtype: 'tbspacer',
//                    width: 15
//                }, {
//                    xtype: 'button',
//                    action: 'newCustomer',
//                    margin: '5 0',
//                    text: '<div style="font-size: 14px;"><i class="icon-edit"></i> New</div>'
//                }, {
//                    xtype: 'tbfill'
//                }, {
//                    xtype: 'button',
//                    action: 'clearSearchCustomer',
//                    margin: '5',
//                    style: 'background-color: #ff7f50;',
//                    text: '<div style="font-size: 14px; color: #fdd;"><i class="icon-trash"></i> Clear Search Result</div>'
//                }]
//            },
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
                    html: '<div style="font-size: 22px;"><i class="icon-plane"></i> External Customer</div>'
                }, {
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    margin: '5',
                    action: 'external-customer-continue',
                    text: '<div style="font-size: 14px;"><i class="icon-save" style="color: #90ee90"></i> Save</div>',
                    scope: me,
                    handler: this.close
                }, {
                    xtype: 'button',
                    margin: '5',
                    action: 'external-customer-cancel',
                    text: '<div style="font-size: 14px;"><i class="icon-remove-sign" style="color: #ffa07a;"></i> Cancel</div>',
                    scope: me,
                    handler: this.close
                }]
            },
            fieldsPanel = {
                xtype: 'panel',
                width: 455,
                border: 0,
                margin: '5 10',
                padding: '5 35',
                layout: 'form',
                defaults: {
                    labelWidth: '35%',
                    labelAlign: 'left',
                    labelStyle: 'font-weight:bold;',
                    xtype: 'displayfield'
                },
                items: [{
                    xtype: 'combobox',
                    fieldLabel: 'Customer type',
                    name: 'ExtCustomerType',
                    value: 'Owner'
                }, {
                    xtype: 'selectfield',
                    fieldLabel: 'Customer',
                    name: 'CustomerId',
                    value: 'CLARK CONSTRUCTION GROUP (980)'
                }, {
                    xtype: 'selectfield',
                    fieldLabel: 'Contact',
                    name: 'ContactId',
                    value: 'Patricia A. Peters 6991 Petten Curv Memphis, TN 38133-4878'
                }]
            };
        me.items = [{
            xtype: 'panel',
            layout: 'vbox',
            items: [
                headerPanel,
                fieldsPanel
            ]
        }];

        me.superclass.initComponent.apply(this, arguments);
    }
});