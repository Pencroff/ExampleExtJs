
/*global Ext:true*/

Ext.Loader.setConfig({
    disableCaching: false, // Disable _dc parameter
    enabled: true, // dynamic dependency loading
    paths: {
        'Ext.ux.Router': 'app/common/data/Router.js',
        'Ext.ux.data.PagingMemoryProxy': 'app/common/data/PagingMemoryProxy.js'
    }
});

Ext.application({
    requires: [
        'Ext.ux.Router',
        'OdessaJs.view.error.Error'
    ],
    autoCreateViewport: true,
    name: 'OdessaJs',
    appFolder: 'app',
    models: [
        'Customer'
    ],
    stores: [
        'Customers'
    ],
    controllers: [
        'Customers'
    ],
    views: [
        'error.Error'
    ],
    enableRouter: true,
    routes: {
        '/'                         : 'customers#home',
        'customers'                 : 'customers#list'
    },
    launch: function () {
        'use strict';
        /*
         * Ext.ux.Router provides some events for better controlling
         * dispatch flow
         */
        Ext.ux.Router.on({

            routemissed: function (token) {
                var viewport = Ext.getCmp('viewport'),
                    target = viewport.down('#viewport-target'),
                    view  = Ext.widget('error'),
                    message = '<p>Wrong path: ' + token + '</p>';
                view.html[7] = message;
                target.removeAll();
                target.add(view);
            },
            beforedispatch: function (token, match, params) {
                var viewport    = Ext.getCmp('viewport');
                if (viewport) {
                    viewport.setLoading(true);
                }
            },
            dispatch: function (token, match, params, controller) {
                var view, viewClass, action,
                    viewport    = Ext.getCmp('viewport'),
                    target      = viewport.down('#viewport-target');

                // adjust controller and action names
                action      = Ext.String.capitalize(match.action);
                controller  = match.controller.charAt(0).toLowerCase() + match.controller.substr(1);

                // try to get the view by controller + action names
                viewClass   = Ext.ClassManager.get('OdessaJs.view.' + controller + '.' + action);

                if (viewClass) {

                    // create view
                    view = Ext.create(viewClass, {
                        border: false
                    });
                    view.on('afterrender', this.afterRenderView, view);
                    // clear target and add new view
                    target.removeAll();
                    target.add(view);
                }
            }
        });
        Ext.ux.Router.afterRenderView = function () {
            setTimeout(function () {
                var viewport    = Ext.getCmp('viewport');
                viewport.setLoading(false);
            }, 100);
        };
    }

});
