/**
 * Created with JetBrains WebStorm.
 * Project: OdessaJs.SPA
 * User: Sergii Danilov
 * Date: 2/20/13
 * Time: 4:09 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.view.popup.NewContractFirst', {
    extend: 'Ext.window.Window',
    alias: 'widget.newContractFirst',
    requires: [
        'Ext.ux.LinkButton'
    ],
    title: 'Contract',
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
                    html: '<div style="font-size: 22px;"><i class="icon-briefcase"></i> New Contract</div>'
                }, {
                    xtype: 'tbfill'
                }, {
                    xtype: 'button',
                    margin: '5',
                    action: 'contract-new-continue',
                    text: '<div style="font-size: 14px;">Continue <i class="icon-arrow-right" style="color: #90ee90"></i></div>',
                    scope: me,
                    handler: this.close
                }, {
                    xtype: 'button',
                    margin: '5',
                    action: 'contract-new-cancel',
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
                    xtype: 'textfield',
                    fieldLabel: 'Prime Contract No',
                    name: 'PrimeContractNo',
                    value: ''
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'Title',
                    name: 'Title',
                    value: ''
                }, {
                    xtype: 'combobox',
                    fieldLabel: 'Acquisition type:',
                    name: 'AcquisitionType',
                    value: 'Prime'
                }, {
                    xtype: 'textfield',
                    fieldLabel: 'GC Contract No:',
                    name: 'GCContractNo',
                    value: ''
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