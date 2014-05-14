/**
 * This is a base view
 */
define([
    'jquery'
], function($) {

    var context = null;

    //CREATE BASE CLASS FOR LATER INHERITANCE
    var BaseView = kendo.Class.extend({

        //CONSTRUCTOR CALLED ON NEW INSTANCES
        init: function (scope) {
            //MUST CALL BELOW IN DERIVED CLASSES IF NEEDED
            //BaseView.fn.init.call(this);
        },

        //EVENTS
        onInit: function (e) {

        },

        onBeforeShow: function (e) {

        },

        onAfterShow: function (e) {

        },

        onShow: function (e) {

        },

        onHide: function (e) {

        },

        reset: function (e, data) {


        }
    });

    //STORE ORIGINAL SCOPE FOR LATER USE
    context = BaseView.fn;

    return BaseView;

});