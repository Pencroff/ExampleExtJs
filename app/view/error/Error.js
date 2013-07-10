/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/7/12
 * Time: 4:52 PM
 */

/*global Ext:true */

Ext.define('OdessaJs.view.error.Error', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.error',
    border: false,
    styleHtmlContent: true,
    autoScroll: true,
    bodyPadding: '0 20 20 20',
    html: [
        '<h1>Ext Js Single Page App Example</h1>',
        '</br>',
        '</br>',
        '</br>',
        '<p style="text-align: center; font-size: 64px; color: red; font-weight: bold;">Error 404</p>',
        '</br>',
        '</br>',
        '<p>Wrong path: <div id="token"></div></p>'
    ]
});