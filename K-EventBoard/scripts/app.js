var App = {};

define([
    'jquery',
    'underscore',
    'Everlive',
    'utils/alerts',
    'utils/helpers',
    'utils/settings',
    'layouts/default',
    'views/home',
    'views/conference',
    'views/shared'
], function ($, _, Everlive, Alerts, Helpers, Settings, Default, Home, Conference, Shared) {

    var isApiKeySet = (Settings.everlive.apiKey !== '$EVERLIVE_API_KEY$');

    var init = function () {

        Alerts.initSpinner();

        Alerts.exitSpinner();

        //INITIALIZE APP
        initData();
        initLayouts();
        initViews();
        initMobile();
        initPlugins();
        initStats();

    };

    var initData = function () {

        if (!isApiKeySet) {
            App.everlive = null;
            return;
        }

        // Initialize Everlive SDK
        var el = new Everlive({

            apiKey: Settings.everlive.apiKey,
            scheme: Settings.everlive.scheme

        });

        App.everlive = el;

    };



    var initLayouts = function () {
        App.layouts = {
            Default: Default
        };
    };

    var initViews = function () {
        App.views = {
            Home: Home,
            Conference: Conference
        };
    };

    var initMobile = function () {
        //RUN APP AND STORE IN GLOBAL
        var startApp = function () {
            //SET MOBILE APP OPTIONS
            var options = {
                initial: 'views/home.html',
                skin: 'flat'
            };

            //FIX FOR IOS7 STATUS BAR FOR APPS
            if (kendo.support.mobileOS.ios && kendo.support.mobileOS.flatVersion >= 700)
                options.statusBarStyle = 'black-translucent';

            //FIX FOR REMOVING INITIAL HASH SINCE KENDO CRASHES
            history.pushState('', document.title, window.location.pathname);

            //START KENDO MOBILE AND CACHE FOR LATER USE
            App.mobile = new kendo.mobile.Application(document.body, options);
        };

        //INITIALIZE MOBILE APP BASED ON ENVIRONMENT
        if (Helpers.isPhoneGap()) {
            //ATTACH TO DEVICE READY EVENT FOR PHONEGAP
            document.addEventListener('deviceready', startApp, false);
        } else {
            //IMMEDIATE FOR WEB BROWSERS
            startApp();
        }

    };

    var initPlugins = function () {
        //INITIALIZE MOBILE PLUGINS IF DEVICE
        if (Helpers.isPhoneGap()) {
            //INITIALIZE CHILD BROWSER IF APPLICABLE
            $(document).on('click', 'a[data-rel="external"][target="_blank"]', function (e) {
                e.preventDefault();
                //OPEN LINKS VIA CHILD BROWSER PLUGIN
                window.open($(this).attr('href'), '_blank');
            });
        }
    };

    var initStats = function () {

    };

    //PUBLIC PROPERTIES
    return {
        init: init
    };

});