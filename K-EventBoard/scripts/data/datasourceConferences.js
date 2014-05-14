/*
* Base class for Conferences data source
*/
define([
    'api',
    'utils/alerts',
    'models/conference'
], function(Api, Alerts, Model) {

    var DataSource = kendo.data.DataSource.extend({

        init: function (element, options) {
            //BASE CALL TO WIDGET INITIALIZATION
            kendo.data.DataSource.fn.init.call(this, element, options);
        },

        options: {
            //THE NAME IS WHAT IT WILL APPEAR AS OFF THE KENDO NAMESPACE (i.e. kendo.ui.YouTube)
            //THE JQUERY PLUGIN WOULD BE jQuery.fn.kendoYouTube
            //http://www.kendoui.com/blogs/teamblog/posts/12-04-03/creating_custom_kendo_ui_plugins.aspx
            name: 'DataSourceConferences',
            type: 'everlive',
            transport: {
                read: function (options) {
                    Api.getConferences()
                        .then(function(data) {
                                options.success(data.result);
                            },
                            function(error) { // error callback
                                Alerts.error(JSON.stringify(error), "Error");
                            });

                }
            },
            schema: {
                model: Model
            }
        }

    });

    kendo.ui.plugin(DataSource);

    return {}

});