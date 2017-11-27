function NotificationController($scope) {  
    $scope.pageClass = 'menu';
    //Displaying menu bar for sub_menu
    $scope.showmenu = true;
    $scope.notificationItems = [];
    var array = [];
    var eventList = JSON.parse(localStorage.getItem('Eventlist'));
  
   // console.log(eventList.length);
    var currentdate = new Date().getDate();
    var currenttime = new Date().getTime();
    console.log("Date: " + currentdate + " and Time: " + currenttime);

    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1; //January is 0!
    var yyyy = today.getFullYear();
    today = mm + '/' + dd + '/' + yyyy;

    var todayTime = new Date(new Date().getTime()).toLocaleTimeString().split(" ");
    var todayTimeHourMinutes = todayTime[0].split(":");
   
    var CurrentTime = todayTimeHourMinutes[0] + ':' + todayTimeHourMinutes[1] + ' ' + todayTime[1];
    if (eventList != null)
    {
        for (var i = 0; i < eventList.length; i++) {
            if (today >= eventList[i][0].eventdate && CurrentTime >= eventList[i][0].eventTime) {
                array.push(eventList[i][0]);
            }
        }
        $scope.notificationItems = array;
    }
    

    $scope.deleteEvent = function (title, date, time) {
        // var eventList = JSON.parse(localStorage.getItem('Eventlist'));
        var arrNew = [];
        for (var i = 0; i < array.length; i++) {
            if (title == array[i].eventtitle && date == array[i].eventdate && time == array[i].eventTime) {
               // array(eventList[i][0]);
                array.splice(i, 1);
            }
        }
        $scope.notificationItems = array;
        if (array.length > 0)
        {
            for (var i = 0; i < array.length; i++)
            {
                arrNew.push([array[i]]);
            }
        }
       
        localStorage.setItem('Eventlist', JSON.stringify(arrNew));
    }

}