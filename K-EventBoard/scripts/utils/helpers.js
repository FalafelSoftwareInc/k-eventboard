define(['jquery'], function($) {

    var isPhoneGap = function() {
        return window.device && navigator.userAgent.indexOf('Browzr') < 0;
    };

    return {
        isPhoneGap : isPhoneGap
    };

});