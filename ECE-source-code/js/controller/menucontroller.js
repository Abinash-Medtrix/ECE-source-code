function MenuController($scope) {    
    var _dataManager = new DataManager();

    var menu = _dataManager.getRootContent();

    $scope.items = [];
    var noofitems = menu.menu;
    $scope.items = noofitems;

    $scope.getchild = function (id) {
        sessionStorage.setItem('showchildfor', id);
        PageStack.push("#sub_menu");
    }
    $scope.pageClass = 'menu';

    //Displaying menu bar for sub_menu
    $scope.showmenu = true;
}