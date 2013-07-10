/**
 * Created with JetBrains WebStorm.
 * Project: OdessaJsDemo
 * User: Sergii Danilov
 * Date: 4/10/13
 * Time: 11:26 AM
 */

/*global Ext:true*/

Ext.define('OdessaJs.view.customers.Home', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.customersHome',
    requires: [
        'OdessaJs.view.customers.List'
    ],
    title: 'Home',
    items: [{
        xtype: 'customersList'
    }, {
        xtype: 'panel',
        layout: {
            type: 'hbox',
            pack: 'center'
        },
        items: {
            xtype: 'chart',
            width: 800,
            height: 480,
            animate: true,
            store: 'Customers',
            axes: [{
                title: 'Customers',
                type: 'Category',
                position: 'left',
                fields: ['Name']
            }, {
                title: 'Cash',
                type: 'Numeric',
                position: 'bottom',
                fields: ['Cash'],
                grid: true,
                minimum: 0
            }],
            series: [{
                type: 'bar',
                axis: 'bottom',
                highlight: true,
                tips: {
                    trackMouse: true,
                    width: 140,
                    height: 28,
                    renderer: function (storeItem, item) {
                        'use strict';
                        this.setTitle(storeItem.get('Name') + ': $' + storeItem.get('Cash'));
                    }
                },
                label: {
                    display: 'insideEnd',
                    field: 'data1',
                    renderer: Ext.util.Format.numberRenderer('0'),
                    orientation: 'horizontal',
                    color: '#333',
                    'text-anchor': 'middle'
                },
                xField: 'Name',
                yField: ['Cash']
            }]
        }
    }]
});