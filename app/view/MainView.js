/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/6/12
 * Time: 6:15 PM
 */

/*global Ext:true */

Ext.define('OdessaJs.view.MainView', {
    extend: 'Ext.container.Container',
    alias: 'widget.mainview',
    xtype: 'container',
    itemId: 'viewport-target',
    region: 'center',
    margin: '20 15',
    style: 'border: 1px #CCC solid;',
    height: 600
});