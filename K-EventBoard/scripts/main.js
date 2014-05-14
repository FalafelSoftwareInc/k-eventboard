(function () {

    //DETERMINE BASE URL FROM CURRENT SCRIPT PATH
    var scripts = document.getElementsByTagName('script');
    var src = scripts[scripts.length - 1].src;
    var currentPath = src.substring(src.indexOf(window.location.pathname), src.lastIndexOf('/'));

    //REGISTER DEFAULT JS MODULE
    define('jquery', [], function () { return window.jQuery; });

    require.config({
        baseUrl: currentPath,
        paths: {
            spin: 'libs/spin/spin.min',
            text: 'libs/require/text',
            toastr: 'libs/toastr/toastr.min',
            underscore: 'libs/underscore/underscore-min',
            'underscore.string': 'libs/underscore/underscore.string.min',
            kendoui: 'libs/kendoui/js', //FOR AMD USE
            rsvp: "libs/everlive/rsvp.min",
            reqwest: "libs/everlive/reqwest.min",
            "kendo.data.everlive": "libs/everlive/kendo.data.everlive.min",
            Everlive: "libs/everlive/everlive.min"
        },
        shim: {
            toastr: {
                deps: ['jquery'],
                exports: 'toastr'
            },
            underscore: {
                deps: ['underscore.string'],
                exports: '_',
                init: function (_s) {
                    //MERGE STRING PLUGIN TO UNDERSCORE NAMESPACE
                    _.mixin(_s.exports());
                    return _;
                }
            },
            Everlive: {
                deps: ["underscore", "rsvp", "reqwest"],
                exports: 'Everlive',
                init: function (underscore, rsvp, reqwest) {
                    this.reqwest = reqwest;
                    return this.Everlive;
                }
            },
            "kendo.data.everlive": {
                deps: ["Everlive"]
            }
        }

    });

    require([
    	'app'
    ], function (App) {
        App.init();
    });

})();