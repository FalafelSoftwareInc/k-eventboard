/*
* Conference detail
*/

define([
    'api',
    'utils/alerts',
    'views/baseview'
], function (Api, Alerts, BaseView) {

    var context = null;

    var View = BaseView.extend({

        view: null,

        //CONSTRUCTOR
        init: function () {
            BaseView.fn.init.call(this);

            //CACHE CONTEXT FOR LATER
            context = this;
        },

        //EVENTS
        onInit: function (e) {

        },

        onShow: function (e) {

            //CACHE VIEW FOR LATER USE
            context.view = e.view;
           
            Alerts.initLoading();

            //GET REQUESTED ITEM FOR POPULATING DETAILS
            Api.getConference(e.view.params.id).then(function (data) {

                var conference = data.result;

                context.view.content.find('.welcome').text(conference.WelcomeMsg);

                context.data = conference;

                Alerts.exitLoading();

            });

        }

    });

    //RETURN VIEW
    return new View();
});