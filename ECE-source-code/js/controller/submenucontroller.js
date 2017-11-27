function SubMenuController($scope,$rootScope, $timeout, $location) {
    $scope.showImageAction = false;
      $rootScope.items = [];   
    var childid = sessionStorage.getItem('showchildfor');

    var _dataManager = new DataManager();
    var menu = _dataManager.getRootContent();

    var noofitems = menu.menu;
    var childarray = [];
    for (i = 0; i < noofitems.length; i++) {
        if (noofitems[i].id == childid && noofitems[i].child != undefined) {
            for (j = 0; j < noofitems[i].child.length; j++) {
                childarray.push(noofitems[i].child[j]);
            }
              $rootScope.items = childarray;
        }
    }
    $scope.pageClass = 'menu';

    $scope.lists = [];
    $scope.getchildlist = function (childid) {
        //$("#accordion").find(".panel-collapse").removeClass("in");
        //$("#accordion").find(".submenucolor").attr("aria-expanded", "false");

        if ($("#" + childid).parent()[0].attributes[2].value == "false") {
            $("#accordion").find(".panel-collapse").removeClass("in");
            $("#accordion").find(".submenucolor").attr("aria-expanded", "false");

            $("#" + childid).parent()[0].attributes[2].value = "true";
            $("#" + childid).addClass("in");          
        }
        else {
            $("#" + childid).parent()[0].attributes[2].value = "false";
            $("#" + childid).removeClass("in");
        }       
        
            for (i = 0; i < noofitems.length; i++) {
                if (noofitems[i].child != undefined && noofitems[i].child.length > 0) {
                    for (k = 0; k < noofitems[i].child.length; k++) {
                        if (noofitems[i].child != undefined && noofitems[i].child[k].id == childid) {
                            if (noofitems[i].child[k].child != undefined && noofitems[i].child[k].child.length > 0) {
                                childarray = [];
                                for (j = 0; j < noofitems[i].child[k].child.length; j++) {
                                    childarray.push(noofitems[i].child[k].child[j]);
                                }
                                $scope.lists = childarray;
                                //Made first one as active default
                                $scope.count = 2;                                                            
                            }
                            else {
                                childarray = [];
                                childarray.push({ data: "NO DATA" });
                                $scope.lists = childarray;
                               
                            }
                        }
                    }
                }   
            }
           
            $timeout(function () {
                $scope.$apply();
            }, 10);
    }

    //Get sublist inside list
    $scope.sublist = [];
    $scope.count = null;
    $scope.getsublist = function (listchildid,index) {
        
        if ($scope.count == index) {
            $scope.count = index;
        }
        else {
            $scope.count = index;
        }
       
        
            for (i = 0; i < noofitems.length; i++) {
                if (noofitems[i].child != undefined && noofitems[i].child.length > 0) {
                    for (k = 0; k < noofitems[i].child.length; k++) {
                        if (noofitems[i].child != undefined && noofitems[i].child[k].child != undefined) {
                            for (l = 0; l < noofitems[i].child[k].child.length; l++) {
                                if (noofitems[i].child[k].child[l].id == listchildid) {
                                    if (noofitems[i].child[k].child[l].child != undefined && noofitems[i].child[k].child[l].child.length > 0) {
                                        childarray = [];
                                        for (j = 0; j < noofitems[i].child[k].child[l].child.length; j++) {
                                            childarray.push(noofitems[i].child[k].child[l].child[j]);
                                        }
                                        $scope.sublist = childarray;                                       
                                       
                                    }
                                }
                            }                            
                        }
                    }
                }
            }
            $timeout(function () {
                $scope.$apply();
            }, 10);
    }

    $scope.getactive = function (index) {
        if ($scope.count == index) {
            $scope.count = index;
        }
        else {
            $scope.count = index;
        }
    }
    
    //viewlistdetail
    var getlistchild = []; //for href

    $scope.fulldivdetail = false;// making div as fullo screen with next button

    $scope.getitemtitle = [];
    $scope.listitems = [];
     $rootScope.listdetailhidden = true;
    $scope.viewlistdetail = function (listid) {
         $rootScope.listdetailhidden = false;
       
              for (i = 0; i < noofitems.length; i++) {
                if (noofitems[i].child != undefined && noofitems[i].child.length > 0) {
                    for (k = 0; k < noofitems[i].child.length; k++) {
                        if (noofitems[i].child != undefined && noofitems[i].child[k].child != undefined && noofitems[i].child[k].child.length > 0) {
                            for (m = 0; m < noofitems[i].child[k].child.length; m++) {
                                if (noofitems[i].child[k].child[m].child != undefined) {
                                    for (l = 0; l < noofitems[i].child[k].child[m].child.length; l++) {
                                        if (noofitems[i].child[k].child[m].child[l].id == listid && noofitems[i].child[k].child[m].child[l].type == undefined) {

                                            //removing div  full screen
                                            $scope.fulldivdetail = false;

                                            childarray = [];
                                            childarray.push(noofitems[i].child[k].child[m].child[l]);
                                            $scope.getitemtitle = childarray;

                                            if (noofitems[i].child[k].child[m].child[l].child != undefined && noofitems[i].child[k].child[m].child[l].child.length > 0) {
                                                childarray = [];
                                                for (j = 0; j < noofitems[i].child[k].child[m].child[l].child.length; j++) {
                                                    childarray.push(noofitems[i].child[k].child[m].child[l].child[j]);

                                                    //for href
                                                    getlistchild.push(noofitems[i].child[k].child[m].child[l].child[j]); 
                                                }
                                                $scope.listitems = childarray;                                                
                                            }
                                        
                                            else {
                                                childarray = [];
                                                childarray.push({ data: "No Data" })
                                                $scope.listitems = childarray;
                                                $scope.$apply();
                                            }
                                        }
                                        else if (noofitems[i].child[k].child[m].child[l].id == listid && noofitems[i].child[k].child[m].child[l].type == 1)
                                        {
                                            $scope.dropDownObj = [];

                                            for (var a = 0; a < noofitems[i].child[k].child[m].child[l].child.length; a++)
                                            {
                                                $scope.dropDownObj.push(noofitems[i].child[k].child[m].child[l].child[a]);
                                            }
                                             $rootScope.listdetailhidden = true;
                                            //$scope.exclusionAction = true;
                                            if (dropdownflag == 0) {
                                                $('.dropdown-menu').css('display', 'block');
                                                $('#drpdwn1').css('display', 'block');
                                                $scope.drpdown1 = true;
                                                dropdownflag = 1;
                                            }
                                            else {
                                                $('.dropdown-menu').css('display', 'none');
                                                $('#drpdwn1').css('display', 'none');
                                                $scope.drpdown1 = false;
                                                dropdownflag = 0;
                                            }
                                            return;
                                        }
                                       
                                            //Displaying details with Next button and close icon at top

                                        else if (noofitems[i].child[k].child[m].child[l].id == listid && noofitems[i].child[k].child[m].child[l].type == 0) {
                                            //making div as full screen
                                            $scope.fulldivdetail = false;

                                            childarray = [];
                                            childarray.push(noofitems[i].child[k].child[m].child[l]);
                                            $scope.getitemtitle = childarray;

                                            if (noofitems[i].child[k].child[m].child[l].child != undefined && noofitems[i].child[k].child[m].child[l].child.length > 0) {
                                                childarray = [];
                                                for (j = 0; j < noofitems[i].child[k].child[m].child[l].child.length; j++) {
                                                    childarray.push(noofitems[i].child[k].child[m].child[l].child[j]);

                                                    //for href
                                                    getlistchild.push(noofitems[i].child[k].child[m].child[l].child[j]);
                                                }
                                                $scope.listitems = childarray;
                                            }
                                            else {
                                                childarray = [];
                                                childarray.push({ data: "No Data" })
                                                $scope.listitems = childarray;
                                                $scope.$apply();
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
              }
              $timeout(function () {
                  $scope.$apply();
              }, 50);
              $scope.exclusionAction = false;
    }


    $scope.myVar = false;
    $scope.myVar1 = false;
    $scope.myVar2 = false;
    //Hide list detail
    $scope.hidelistdetail = function () {
        $('.dropdown-menu').css('display', 'none');
        dropdownflag = 0;
        getlistchild = [];
        $rootScope.listdetailhidden = true;
        $scope.myVar = false;
        $scope.myVar1 = false;
        $scope.myVar2 = false;
        $scope.myVar4 = 0;
        $scope.fulldivdetail = false;
        $scope.courier = false
    }

    $scope.getitemtitle2 = [];
    $scope.listitems2 = [];
    $scope.hello = function (dropdownlist) {
        //$scope.myVar = !$scope.myVar;
        $scope.myVar = true;
        $scope.myVar1 = false;
        $scope.myVar2 = true;
        $scope.$apply();

        for (i = 0; i < getlistchild.length; i++) {
            if (getlistchild[i].child != undefined && getlistchild[i].type == 2) {
                if (getlistchild[i].id == dropdownlist) {
                    childarray = [];
                    childarray.push(getlistchild[i]);
                    $scope.getitemtitle1 = $scope.getitemtitle2 = childarray;
                    childarray = [];
                    if (getlistchild[i].child.length > 0) {
                      
                        for (j = 0; j < getlistchild[i].child.length; j++) {
                            childarray.push(getlistchild[i].child[j]);
                        }
                    }
                    else {
                        childarray.push({ title: "NO DATA" });
                    }
                    $scope.listitems1 = $scope.listitems2 = childarray;
                    childarray = [];
                }

            }
            if (getlistchild[i].child != undefined && getlistchild[i].child.length > 2) {
                $scope.fulldivdetail = false;
            }
            else {
                $scope.fulldivdetail = false;
            }
        }
        $scope.$apply();
    }

    $scope.backbutton = function () {
        $scope.myVar = false;
        $scope.myVar1 = false;
        $scope.myVar2 = false;

        $scope.defaultAction = true;
        $scope.fulldivdetail = false;
        $scope.showImageAction = false;
    }

    $scope.myVar4 = 0;
    $scope.getitemtitle1 = [];
    $scope.listitems1 = [];
    $scope.text = function (ls_id) {
        $scope.getitemtitle1 = [];
        $scope.listitems1 = [];
        
        $scope.myVar = true;
        $scope.myVar1 = true;
        $scope.myVar2 = false;

        $('.dropdown-menu').css('display', 'none');
        dropdownflag = 0;
        
        for (i = 0; i < getlistchild.length; i++) {
            if (getlistchild[i].child.length == 0 && getlistchild[i].information == "" && getlistchild[i].id == ls_id) {
                $scope.myVar = false;
                $scope.myVar1 = true;
                $scope.myVar2 = false;
                return;
            }
            if (getlistchild[i].id == ls_id) {
                childarray = [];
                childarray.push(getlistchild[i]);
                $scope.getitemtitle1 = $scope.getitemtitle2 = childarray;
                childarray = [];
                //if (getlistchild[i].information == "") {

                //    $scope.myVar = false;
                //    $scope.myVar1 = false;
                //    $scope.myVar2 = false;
                //    return;
                //}
                
                 if (getlistchild[i].information == "" && getlistchild[i].child != undefined) {
                     for (var l = 0; l < getlistchild[i].child.length; l++) {
                        
                        childarray.push(getlistchild[i].child[l]);
                        $scope.headingTitle = getlistchild[i].title;
                    }
                    $scope.getitemtitle4 = childarray;
                    $scope.myVar4 = 1;
                    $scope.fulldivdetail = false;
                    $scope.myVar = true;
                    $scope.myVar1 = false;
                    $scope.myVar2 = false;
                    return;
                }
            else if (getlistchild[i].information != undefined)
                {
                    var informationData = getlistchild[i].information.split('<br/>');

                    for (var l = 0; l < informationData.length; l++) {
                        childarray.push(informationData[l]);
                    }
                    $scope.listitems1 = childarray;
                    $scope.fulldivdetail = false;
                }
                else if(getlistchild[i].information == undefined)
                {

                    $scope.myVar = false;
                    $scope.myVar1 = false;
                    $scope.myVar2 = false;
                    return;
                }
              
               
            }
            if (getlistchild[i].child != undefined) {
                for (k = 0; k < getlistchild[i].child.length;k++){
                    if (getlistchild[i].child[k].id == ls_id) {
                        childarray = [];
                        childarray.push(getlistchild[i].child[k]);
                        $scope.getitemtitle1 = $scope.getitemtitle2 = childarray;
                        childarray = [];
                        if (getlistchild[i].child[k].image != undefined)
                        {
                            $scope.nextTitle = getlistchild[i].child[k + 1];
                            $scope.listImage = getlistchild[i].child[k].image;
                            $scope.showImageAction = true;
                        }
                        else {
                            $scope.showImageAction = false;
                        }
                        if (getlistchild[i].child[k].information != undefined) {
                            $scope.nextTitle = getlistchild[i].child[k + 1];
                            var informationData = getlistchild[i].child[k].information.split('<br/>');
                            for (var l = 0; l < informationData.length; l++)
                            {
                                childarray.push(informationData[l]);
                            }
                           
                        }
                        else {
                            childarray.push("NO DATA");
                            $scope.fulldivdetail = false;
                        }
                        $scope.listitems1 = $scope.listitems2 = childarray;
                        childarray = [];
                        if (getlistchild[i].child[k].information != undefined && getlistchild[i].child[k].information.length > 2) {
                            $scope.fulldivdetail = false;
                        }
                        else {
                            $scope.fulldivdetail = false;
                        }
                    }

                }                
            }
           
        }

        

        $timeout(function () {
            $scope.$apply();
        }, 50);

        $scope.fulldivdetail = true;
    }

    //list dropdown
    $scope.fulllist = [];
    var dropdownflag = 0;
    $scope.href = function (dropdownlist) {
        $timeout(function () {
            for (i = 0; i < getlistchild.length; i++) {
                if (getlistchild[i].id == dropdownlist && getlistchild[i].type == 1) {
                    if (getlistchild[i].child != undefined && getlistchild[i].child.length > 0) {
                        childarray = [];
                        for (j = 0; j < getlistchild[i].child.length; j++) {
                            childarray.push(getlistchild[i].child[j]);
                        }
                        $scope.fulllist = childarray;
                        $scope.$apply();
                       
                      
                    }
                    if (dropdownflag == 0) {
                        $('.dropdown-menu').css('display', 'block');
                        dropdownflag = 1;
                    }
                    else {
                        $('.dropdown-menu').css('display', 'none');
                        dropdownflag = 0;
                    }
                }
                else if (getlistchild[i].id == dropdownlist && getlistchild[i].type == 2) {
                    $scope.hello(dropdownlist);
                  
                }
            }
            
        }, 50);  
    }

    //Displaying menu bar for sub_menu
    $scope.showmenu = true;
    $scope.listitems3 = [];
    $scope.textExclusion = function (listid) {
        $timeout(function () {
             $rootScope.listdetailhidden = false;
            $scope.getitemtitle1 = [];
            $scope.listitems1 = [];
            $scope.listitems3 = [];
            $scope.myVar = true;
            $scope.myVar1 = true;
            $scope.myVar2 = true;
            $scope.myVar3 = false;
        
       
    

        for (i = 0; i < noofitems.length; i++) {
            if (noofitems[i].child != undefined && noofitems[i].child.length > 0) {
                for (k = 0; k < noofitems[i].child.length; k++) {
                    if (noofitems[i].child != undefined && noofitems[i].child[k].child != undefined && noofitems[i].child[k].child.length > 0) {
                        for (m = 0; m < noofitems[i].child[k].child.length; m++) {
                            if (noofitems[i].child[k].child[m].child != undefined) {
                                for (l = 0; l < noofitems[i].child[k].child[m].child.length; l++) {
                                    for (var a = 0; a < noofitems[i].child[k].child[m].child[l].child.length; a++)
                                        if (noofitems[i].child[k].child[m].child[l].child[a].id == listid && noofitems[i].child[k].child[m].child[l].child[a].type == undefined) {

                                        //removing div  full screen
                                        $scope.fulldivdetail = false;

                                        childarray = [];
                                        childarray.push(noofitems[i].child[k].child[m].child[l].child[a]);
                                        $scope.listitems3 = childarray;
                                        return;
                                     
                                    }


                                }
                            }
                        }
                    }
                }
            }
        }

    }, 1000);
    }

    $scope.defaultAction = true;
    $scope.text1 = function (ls_id) {
        $scope.myVar4 = 0;
        $scope.myVar = true;
        $scope.myVar1 = true;
        $scope.myVar2 = false;
        $('.dropdown-menu').css('display', 'none');
        dropdownflag = 0;
        for (i = 0; i < getlistchild.length; i++) {
            for (var t = 0; t < getlistchild[i].child.length; t++)
            {
                if (getlistchild[i].child[t].id == ls_id) {
                    $scope.headerTitle = getlistchild[i].child[t].title;
                    $scope.parentId = getlistchild[i].child[t].id;
                    childarray = [];

                    childarray.push(getlistchild[i].child[t].information);
                    $scope.listitems1 = childarray;
                    $scope.defaultAction = false;
                    $scope.fulldivdetail = false;
                    return;
                   }                                    
                                      
            }         
        }
    }

   
   
    $scope.ExpandCollapse = function (listid, index, information) {
        if (information == "")
        {
            return;
        }
        //$(".inFormation").removeClass('in');
        //$(".inFormation").attr('aria-expanded', 'false');
        //$(".inFormation").css('height', '0px');
        //$(".controlIcon").removeClass('glyphicon-menu-up');
        //$(".controlIcon").addClass('glyphicon-menu-down');

        $("#" + index).toggleClass("glyphicon-menu-down");
        $("#" + index).toggleClass("glyphicon-menu-up");
        $("#" + listid).collapse('toggle');
        return;
      
    }

    $scope.courier = false
    $scope.onClickCourier = function () {
         $rootScope.listdetailhidden = false;
        $scope.myVar = false;
        $scope.fulldivdetail = false;
        $scope.getitemtitle = [{
            id: 'id1_2_5',
            title: 'COURIER',
            icon: 'images/reminder.png',
            style: 'background-color="red"',
            class: '',
            child: [
            {
                id: 'id1_2_5_1',
                href: null,
                title: '(Provision for Call and e-mail, Link to the contact section of the APP)',
                type: 0,
                icon: 'images/reminder.png',
                style: 'background-color="red"',
                class: '',
                child: [],
                control: 'courier'
            }
            ]
        }];
        $scope.listitems = [];
        $scope.exclusionAction = false;
        $scope.courier = true;
    }


    $scope.visit1 = function (id) {
        $('.visitFooter').removeClass('activefooter');
        $('#' + id).addClass('activefooter');
        $('.panel-collapse').removeClass('in');
        $('.panel, .submenucolor').attr('aria-expanded', 'false');
        $rootScope.listdetailhidden = true;
        //$('.glyphicon-menu-right:before').css('content', '\e258');
        //$('.glyphicon-menu-down:before').css('content', '');
        $rootScope.items = [];
        var noofitems = menu.menu;
          var childarray = [];
          var visit1 = ['0', '1', '4', '5'];
          var v = 0;
           for (i = 0; i < noofitems.length; i++) {
                if (noofitems[i].id == childid && noofitems[i].child != undefined) {
                    for (j = 0; j < noofitems[i].child.length; j++) {
                        if (j == visit1[v])
                        {
                            childarray.push(noofitems[i].child[j]);
                            v++;
                        }

                    }
                      $rootScope.items = childarray;
                   }
            }
       
       
        }
    $scope.visit2 = function (id) {
        $('.visitFooter').removeClass('activefooter');
        $('#' + id).addClass('activefooter');
        $('.panel-collapse').removeClass('in');
        $('.panel, .submenucolor').attr('aria-expanded', 'false');
        $rootScope.listdetailhidden = true;
        //$('.loginchevron ').find('.glyphicon-menu-right:before').css('content', '\e258');
        //$('.loginchevron ').find('.glyphicon-menu-down:before').css('content', '');
        $rootScope.items = [];
        var noofitems = menu.menu;
        var childarray = [];
        for (i = 0; i < noofitems.length; i++) {
            if (noofitems[i].id == childid && noofitems[i].child != undefined) {
                for (j = 0; j < noofitems[i].child.length; j++) {
                       childarray.push(noofitems[i].child[j]);
                          }
                $rootScope.items = childarray;
            }
        }


    }
   
    var location = $location.path().split("/");
    if (location[1] == 'sub_menu') {
        $rootScope.contact = false;
        $rootScope.calender = false;
        $rootScope.viewguide = true;
    }
}


function onclickMail() {
    window.location.href = "mailto:john.doe@mail.com";
}

function onclickPhone() {
    window.location.href = "tel:323-555-5645";
}