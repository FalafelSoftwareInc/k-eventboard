/*
* Shared View
*/
define([
    'jquery',
    'views/baseview'
], function($, BaseView) {

    var context = null;

    var View = BaseView.extend({
        view: null,

        //CONSTRUCTOR
        init: function () {
            BaseView.fn.init.call(this);

            //CACHE CONTEXT FOR LATER
            context = this;
        }
    });

    return new View();

});
