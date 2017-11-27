function ContactController($scope, $location, $rootScope) {
    $scope.pageClass = 'menu';
    //Displaying menu bar for sub_menu
    $scope.showmenu = true;
    var location = $location.path().split("/");
    if (location[1] == 'contact') {
        $rootScope.calender = false;
        $rootScope.viewguide = false;
        $rootScope.contact = true;
    }
}
