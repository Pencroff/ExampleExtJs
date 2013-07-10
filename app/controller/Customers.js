/**
 * Created with JetBrains WebStorm.
 * Project: NJS.SPA
 * User: Sergii Danilov
 * Date: 12/4/12
 * Time: 3:55 PM
 */

/*global Ext:true*/

Ext.define('OdessaJs.controller.Customers', {
    extend: 'Ext.app.Controller',
    alias: 'customerController',
    stores: [
        'Customers'
    ],
    models: [
        'Customer'
    ],
    views: [
        'customers.Home',
        'customers.List',
        'customers.Edit'
    ],
    init: function () {
        'use strict';
        var me = this;
        this.control({
            'customersList': {
                itemdblclick: me.editCustomer
            },
            'customerEdit button[action=save]': {
                click: me.updateCustomer
            }
        });
    },
    home: function () {
        'use strict';
    },
    list: function () {
        'use strict';
    },
    updateCustomer: function (btn) {
        'use strict';
        var container = btn.up('window'),
            form = container.down('form'),
            values = form.getValues(),
            record = form.getRecord(),
            store = Ext.getStore('Customers');
        record.set(values);
        store.sync();
        container.close();
    },
    editCustomer: function (me, record, item, index, e, eOpts) {
        'use strict';
        if (record) {
            var view = Ext.widget('customerEdit');
            view.down('form').loadRecord(record);
        }
    }
});