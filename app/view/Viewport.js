/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/5/12
 * Time: 4:09 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.view.Viewport', {
    extend: 'Ext.container.Viewport',
    renderTo: Ext.getBody(),
    id: 'viewport',
    height: 800,
    layout: 'border',
    style: 'background: #eee;',
    requires: [
        'OdessaJs.view.MainView',
        'OdessaJs.view.general.Logo'
    ],
    initComponent: function () {
        'use strict';
        this.items = [
            {   xtype: 'mainLogo'   },
            {   xtype: 'mainview'   }
        ];
        //this.callParent();
        this.superclass.initComponent.apply(this, arguments);
    }
});






