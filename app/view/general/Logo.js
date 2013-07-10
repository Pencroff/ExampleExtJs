/**
 * Created with JetBrains WebStorm.
 * Project: OdessaJs.SPA
 * User: Sergii Danilov
 * Date: 2/15/13
 * Time: 12:55 PM
 */

/*global Ext:true */

Ext.define('OdessaJs.view.general.Logo', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.mainLogo',
    height: 53,
    cls: 'header-background',
    border: 0,
    region: 'north',
    padding: '0',
    items: [{
        xtype: 'box',
        padding: '0',
        height: 53,
        autoEl: {tag: 'img', src: 'Images/mcd-logo.png'}
    }, {
        xtype: 'tbfill'
    }, {
        xtype: 'panel',
        frame: false,
        border: false,
        bodyStyle: 'background:transparent;',
        layout: 'vbox',
        height: 47,
        items: [{
            xtype: 'panel',
            frame: false,
            border: false,
            bodyStyle: 'background:transparent; color: #EFFFEA;',
            layout: 'hbox',
            defaults: {
                height: 24,
                color: '#EFFFEA'
            },
            items: [{
                xtype: 'box',
                width: 160,
                style: 'text-align: left; color: #FCD116',
                autoEl: {tag: 'a', href: 'https://github.com/Pencroff/ExampleExtJs', html: 'Fork me on GitHub', cls: 'link', target:'_blank'}
            }, {
                xtype: 'tbspacer',
                cls: 'link-spacer',
                width: 8,
                border: false
            }, {
                xtype: 'box',
                id: 'userProfileLink',
                width: 160,
                style: 'text-align: right;',
                autoEl: {tag: 'a', href: '#user-profile', html: 'User profile', cls: 'link'}
            }, {
                xtype: 'tbspacer',
                html: '|',
                cls: 'link-spacer',
                width: 8,
                border: false
            }, {
                xtype: 'box',
                autoEl: {tag: 'a', href: '#main-help', html: 'Help', cls: 'link'}
            }, {
                xtype: 'tbspacer',
                html: '|',
                cls: 'link-spacer',
                width: 8,
                border: false
            }, {
                xtype: 'box',
                autoEl: {tag: 'a', href: '/Auth/Logout', html: 'Logout', cls: 'link'}
            }, {
                xtype: 'tbspacer',
                width: 25
            }]
        }]
    }]
});