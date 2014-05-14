/* Home View   */
define([
    'views/baseview',
    'text!../../views/conferences/listTemplate.html',
    'data/datasourceConferences'
], function (BaseView, listTemplate) {

    var context = null;

    var View = BaseView.extend({
        view: null,
        dataSource: null,

        //CONSTRUCTOR
        init: function () {
            BaseView.fn.init.call(this);

            //CACHE CONTEXT FOR LATER
            context = this;
        },
        
        //EVENTS
        onInit: function(e) {
            
        },

        onShow: function (e) {
            //CACHE VIEW FOR LATER USE
            context.view = e.view;

            //BIND CONFERENCES TO LIST

            if (!e.view.element.find(".km-filter-form").length) {

                e.view.element.find('.listview').kendoMobileListView({
                    dataSource: new kendo.ui.DataSourceConferences(),
                    template: listTemplate,
                    endlessScroll: true,
                    pullToRefresh: true,
                    virtualViewSize: 10,
                    filterable: {
                        field: 'Title',
                        operator: 'contains',
                        ignoreCase: true
                    }
                });

            }
        }
    });

    //RETURN VIEW
    return new View();

});