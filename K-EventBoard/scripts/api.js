/*
* API
*/

define([
    'jquery',
    'utils/settings',
    'utils/helpers'
], function ($, Settings, Helpers) {

    var getConferences = function() {
        return App.everlive.data('Conferences').get();
    };

    var getConference = function(id) {
        return App.everlive.data('Conferences').getById(id);
    };

    return {
        getConferences: getConferences,
        getConference: getConference
    };

});