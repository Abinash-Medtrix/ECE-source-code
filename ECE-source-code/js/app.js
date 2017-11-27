var app = angular.module("eceApp", ['ngRoute', 'ngAnimate', 'ngTouch', 'snap', 'ngSanitize']);
app.controller('LoginController', LoginController);
app.controller('MenuController', MenuController);
app.controller('SubMenuController', SubMenuController);
app.controller('ContactController', ContactController);
app.controller('NotificationController', NotificationController);
app.controller('CalenderController', CalenderController);


angular.module('eceApp').run(function ($rootScope, $location) {
    $rootScope.onClickslideMenu = function (ele) {
        $('.slide_menu_list').removeClass('active');
       
        if (ele == "list4") {
            PageStack.push("#contact");
        }
        if (ele == "list2") {
            PageStack.push("#calender");
        }

        $('.' + ele).addClass('active');
    }  
    $rootScope.onClickLogout = function (ele) {
       
        PageStack.push("index.html");
    }
    $rootScope.shownotification = function () {
        PageStack.push("#notification");
    }
    $rootScope.screening = true;
    $rootScope.activescreen = function (id) {
        $('.scrollmenu').find("a").removeClass('activefooter');
        $('#' + id).addClass('activefooter');

        if (id == "screening")
            $rootScope.screening = true;

        if (id != "screening")
            $rootScope.screening = false;
    }
    $rootScope.viewGuide = function (id) {
        sessionStorage.setItem('showchildfor', id);
        PageStack.push("#sub_menu");
    }  
},
function ($cordovaPush) {

    var androidConfig = {
        "senderID": "replace_with_sender_id",
    };

document.addEventListener("deviceready", function () {
        $cordovaPush.register(androidConfig).then(function (result) {
            // Success
        }, function (err) {
            // Error
        })

        $rootScope.$on('$cordovaPush:notificationReceived', function (event, notification) {
            switch (notification.event) {
                case 'registered':
                    if (notification.regid.length > 0) {
                        alert('registration ID = ' + notification.regid);
                    }
                    break;

                case 'message':
                    // this is the actual push notification. its format depends on the data model from the push server
                    alert('message = ' + notification.message + ' msgCount = ' + notification.msgcnt);
                    break;

                case 'error':
                    alert('GCM error = ' + notification.msg);
                    break;

                default:
                    alert('An unknown GCM event has occurred');
                    break;
            }
        });


        // WARNING: dangerous to unregister (results in loss of tokenID)
        $cordovaPush.unregister(options).then(function (result) {
            // Success!
        }, function (err) {
            // Error
        })

    }, false);
})
.directive('setHeight', function ($window) {
    return {
        link: function (scope, element, attrs) {
            element.css('height', $window.innerHeight);
        }
    }
});

app.config(function ($routeProvider) {
  
    $routeProvider
    .when('/', {
        templateUrl: 'templates/login.html',
        controller: 'LoginController'
    })
    .when('/menu', {
        templateUrl: 'templates/menu.html',
        controller: 'MenuController'
    })
    .when('/sub_menu', {
        templateUrl: 'templates/sub_menu.html',
        controller: 'SubMenuController'
    })
    .when('/contact', {
        templateUrl: 'templates/contact.html',
        controller: 'ContactController'
    })
    .when('/notification', {
        templateUrl: 'templates/notification.html',
        controller: 'NotificationController'
    })
    .when('/calender', {
        templateUrl: 'templates/calender.html',
        controller: 'CalenderController'
    })
});


var PageStack = {
    stack: [],
    currenturl: "#",
    push: function (newurl) {
        this.stack.push(this.currenturl);
        window.location = newurl;
        this.currenturl = newurl;

    },
    pop: function () {
        if (this.stack.length > 0) {
            var page = this.stack.pop();
            window.location = page;
            this.currenturl = page;
        }
        return "true";
    },
  
   
};


app.run(function ($rootScope) {
   
});


app.directive('onFinishRender', function ($timeout) {
    return {
        restrict: 'A',
        link: function (scope, element, attr) {
            if (scope.$last === true) {
                $timeout(function () {
                    scope.$emit(attr.onFinishRender);
                });
            }
        }
    }
});


