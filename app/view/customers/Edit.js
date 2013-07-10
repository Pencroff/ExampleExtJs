/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/11/12
 * Time: 2:45 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.view.customers.Edit', {
    extend: 'Ext.window.Window',
    alias: 'widget.customerEdit',
    title: 'Edit customer',
    layout: 'fit',
    resizable: false,
    autoShow: true,
    collapsible: false,
    width: 360,
    height: 185,
    initComponent: function () {
        'use strict';
        var me = this,
            required = '<span style="color:red;font-weight:bold" data-qtip="Required field">*</span>';
        this.items = [
            {
                xtype: 'form',
                fieldDefaults: {
                    msgTarget: 'side',
                    labelWidth: 75,
                    width: 345,
                    labelAlign: 'right'
                },
                items: [
                    {
                        xtype: 'hiddenfield',
                        fieldLabel: 'Id',
                        name: 'Id'
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'Name',
                        afterLabelTextTpl: required,
                        name: 'Name',
                        allowBlank: false
                    }, {
                        xtype: 'textfield',
                        fieldLabel: 'City',
                        name: 'City'
                    }, {
                        xtype: 'numberfield',
                        name : 'Cash',
                        fieldLabel: 'Cash'
                    }, {
                        xtype: 'datefield',
                        name : 'Registered',
                        fieldLabel: 'Registered'
                    }
                ]
            }
        ];
        me.buttons = [
            {
                text: 'Save',
                action: 'save'
            },
            {
                text: 'Cancel',
                scope: this,
                handler: me.close
            }
        ];
        //this.callParent(arguments);
        this.superclass.initComponent.apply(me, arguments);
    }
});