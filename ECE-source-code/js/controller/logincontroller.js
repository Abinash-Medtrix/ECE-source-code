function LoginController($scope, $timeout, $rootScope) {
    //alert("LoginController");
    //var eventList = JSON.parse(localStorage.getItem('Eventlist'));
    var notification = localStorage.getItem("Notification");
    $scope.pageClass = 'menu';
    $scope.onClickLogin = function()
    {
        PageStack.push("#menu");
    }
  
   
    $timeout(function () {
        $scope.height = $('#loginContainer').css('height');       
        $scope.loginImageHeight = (parseInt($scope.height) - 50) / 2 + 'px';
        $scope.loginContainerHeight = (parseInt($scope.height) + 50) / 2 + 'px';
       
        
        //$("#loadercalender").fadeOut('slow');

    }, 150);
    
   
}

//document.addEventListener('deviceready', pushnotification, false);

function pushnotification() {
    console.log("Scheduling the local event...");
    

}

var g_id = 0;