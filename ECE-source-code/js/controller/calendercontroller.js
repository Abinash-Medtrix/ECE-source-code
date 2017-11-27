//Adding Events to calender
var addedEvents = [];

function CalenderController($scope, $timeout, $location, $rootScope) {
    $scope.pageClass = 'menu';
    //Displaying menu bar for sub_menu
    $scope.showmenu = true;


    //calender creation
    $scope.timeArrayForDayView = [
        { time: '12 AM', id: "12_AM", title:'' },
        { time: '1 AM', id: "1_AM", title: '' },
        { time: '2 AM', id: "2_AM", title: '' },
        { time: '3 AM', id: "3_AM", title: '' },
        { time: '4 AM', id: "4_AM", title: '' },
        { time: '5 AM', id: "5_AM", title: '' },
        { time: '6 AM', id: "6_AM", title: '' },
        { time: '7 AM', id: "7_AM", title: '' },
        { time: '8 AM', id: "8_AM", title: '' },
        { time: '9 AM', id: "9_AM", title: '' },
        { time: '10 AM', id: "10_AM", title: '' },
        { time: '11 AM', id: "11_AM", title: '' },
        { time: '12 PM', id: "12_PM", title: '' },
        { time: '1 PM', id: "1_PM", title: '' },
        { time: '2 PM', id: "2_PM", title: '' },
        { time: '3 PM', id: "3_PM", title: '' },
        { time: '4 PM', id: "4_PM", title: '' },
        { time: '5 PM', id: "5_PM", title: '' },
        { time: '6 PM', id: "6_PM", title:'' },
        { time: '7 PM', id: "7_PM", title: '' },
        { time: '8 PM', id: "8_PM", title: '' },
        { time: '9 PM', id: "9_PM", title: '' },
        { time: '10 PM', id: "10_PM", title: '' },
        { time: '11 PM', id: "11_PM", title: '' }
    ];

    $scope.days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    $scope.monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    $scope.month = $scope.monthname[new Date().getMonth()];
    $scope.year = new Date().getFullYear();
   
    var date = new Date();
    $scope.curDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();

    $scope.showDayView = function () {
        var date = new Date();
        $scope.curDate = (date.getMonth() + 1) + '/' + date.getDate() + '/' + date.getFullYear();        
        showdayview();
    }

    //Event table with and without Events    
    $scope.totalEvents = undefined;


    //temporary day table
    var dayTable = [];
    $scope.showDayViewforYear = function (date, month, year, events) {
        if (events == undefined) {
            $scope.curDate = (month + 1) + '/' + date + '/' + year;
            $scope.Dayobjects = g_calender.getDayTime($scope.curDate);


            $scope.timeArrayForDayView = [
       { time: '12 AM', id: "12_AM", title: '' },
       { time: '1 AM', id: "1_AM", title: '' },
       { time: '2 AM', id: "2_AM", title: '' },
       { time: '3 AM', id: "3_AM", title: '' },
       { time: '4 AM', id: "4_AM", title: '' },
       { time: '5 AM', id: "5_AM", title: '' },
       { time: '6 AM', id: "6_AM", title: '' },
       { time: '7 AM', id: "7_AM", title: '' },
       { time: '8 AM', id: "8_AM", title: '' },
       { time: '9 AM', id: "9_AM", title: '' },
       { time: '10 AM', id: "10_AM", title: '' },
       { time: '11 AM', id: "11_AM", title: '' },
       { time: '12 PM', id: "12_PM", title: '' },
       { time: '1 PM', id: "1_PM", title: '' },
       { time: '2 PM', id: "2_PM", title: '' },
       { time: '3 PM', id: "3_PM", title: '' },
       { time: '4 PM', id: "4_PM", title: '' },
       { time: '5 PM', id: "5_PM", title: '' },
       { time: '6 PM', id: "6_PM", title: '' },
       { time: '7 PM', id: "7_PM", title: '' },
       { time: '8 PM', id: "8_PM", title: '' },
       { time: '9 PM', id: "9_PM", title: '' },
       { time: '10 PM', id: "10_PM", title: '' },
       { time: '11 PM', id: "11_PM", title: '' }
            ];


            showdayview();
        }
        else {
            $scope.curDate = (month + 1) + '/' + date + '/' + year;
            $scope.Dayobjects = g_calender.getDayTime($scope.curDate);


            //making table array empty if already event is created
            if ($scope.timeArrayForDayView.length == 24) {
                $scope.timeArrayForDayView = [
     { time: '12 AM', id: "12_AM", title: '' },
     { time: '1 AM', id: "1_AM", title: '' },
     { time: '2 AM', id: "2_AM", title: '' },
     { time: '3 AM', id: "3_AM", title: '' },
     { time: '4 AM', id: "4_AM", title: '' },
     { time: '5 AM', id: "5_AM", title: '' },
     { time: '6 AM', id: "6_AM", title: '' },
     { time: '7 AM', id: "7_AM", title: '' },
     { time: '8 AM', id: "8_AM", title: '' },
     { time: '9 AM', id: "9_AM", title: '' },
     { time: '10 AM', id: "10_AM", title: '' },
     { time: '11 AM', id: "11_AM", title: '' },
     { time: '12 PM', id: "12_PM", title: '' },
     { time: '1 PM', id: "1_PM", title: '' },
     { time: '2 PM', id: "2_PM", title: '' },
     { time: '3 PM', id: "3_PM", title: '' },
     { time: '4 PM', id: "4_PM", title: '' },
     { time: '5 PM', id: "5_PM", title: '' },
     { time: '6 PM', id: "6_PM", title: '' },
     { time: '7 PM', id: "7_PM", title: '' },
     { time: '8 PM', id: "8_PM", title: '' },
     { time: '9 PM', id: "9_PM", title: '' },
     { time: '10 PM', id: "10_PM", title: '' },
     { time: '11 PM', id: "11_PM", title: '' }
                ];
            }




            totalEvents = JSON.parse(events);

            var getTitle = '';
            var titleavailable = false;

            for (j = 0; j < $scope.timeArrayForDayView.length; j++) {
                var currentEventTime = [];
                for (i = 0; i < totalEvents.length; i++) {
                   
                    var event_Time = totalEvents[i].time.split(" ");
                    var event_Time_hour = event_Time[0].split(":");
                    if ($scope.timeArrayForDayView[j].time == event_Time_hour[0] + ' ' + event_Time[1] && $scope.curDate == totalEvents[i].date) {
                        titleavailable = true;
                        getTitle = totalEvents[i].title;
                        currentEventTime = totalEvents[i].time;
                    }                   
                }

                if (titleavailable == true) {

                    titleavailable = false;
                    if (j < 12 && j == 0) {
                        dayTable.push({ time: '12 AM', id: '12_AM', title: getTitle, timeInMinutes: currentEventTime });
                    }
                    if (j < 12 && j != 0) {
                        dayTable.push({ time: j + ' AM', id: j + '_AM', title: getTitle, timeInMinutes: currentEventTime });
                    }


                    if (j > 11 && j == 12) {
                        dayTable.push({ time: '12 PM', id: '12_PM', title: getTitle, timeInMinutes: currentEventTime });
                    }
                    if (j > 11 && j != 12) {
                        dayTable.push({ time: (j - 12) + ' PM', id: (j - 12) + '_PM', title: getTitle, timeInMinutes: currentEventTime });
                    }


                }
                else {
                    if (j < 12 && j == 0) {
                        dayTable.push({ time: '12 AM', id: '12_AM', title: '' });
                    }
                    if (j < 12 && j != 0) {
                        dayTable.push({ time: j + ' AM', id: j + '_AM', title: '' });
                    }

                    if (j > 11 && j == 12) {
                        dayTable.push({ time: '12 PM', id: '12_PM', title: '' });
                    }
                    if (j > 11 && j != 12) {
                        dayTable.push({ time: (j - 12) + ' PM', id: (j - 12) + '_PM', title: '' });
                    }


                }

            }

            $scope.timeArrayForDayView = [];
            $scope.timeArrayForDayView = dayTable;
            showdayview();

            $timeout(function () {
                $scope.$apply();              
            }, 1000);

        }
    }
    
        $timeout(function () {
            $scope.monthStatus = JSON.parse(sessionStorage.getItem('monthstatus'));
            $scope.yearStatus = JSON.parse(sessionStorage.getItem('yearstatus'));
        }, 1500);
    
        $scope.$on('ngRepeatFinished', function (ngRepeatFinishedEvent) {         
            $("#loadercalender").fadeOut('slow');           
        });


   
        //getting calender details
        sessionStorage.setItem('monthstatus', JSON.stringify(g_calender.getMonthStatus(undefined)));
        sessionStorage.setItem('yearstatus', JSON.stringify(g_calender.getYearStatus(undefined)));




        //MODAL popup for calnder page
        $scope.enterevent = function (time) {
            $('.daytable').find('td').removeClass('enterevent');
            $('.daytable').find('.addsign').css('display', 'none');

            $('#' + time).addClass('enterevent');
            $('#' + time).find('.addsign').css('display', 'block');
        }
        $scope.showeventpopup = function (curDate, time) {
            $("#eventpage").modal('show');
            $('.modal-backdrop').remove();
            $scope.eventDate = curDate;
        

            var endtime = time.charAt(0).concat((time.charAt(1)=="_")? '': (time.charAt(1)));

            if ((time.charAt(1) == "_")) {
                $scope.eventTime = endtime.concat((time.charAt(1) + time.charAt(2) + time.charAt(3) == '_AM') ? ' AM' : ' PM');
                var eventTim = $scope.eventTime.split(" ");
                $scope.eventTime1 = eventTim[0];
                $scope.eventTime2 = eventTim[1];

                $scope.endTime = JSON.stringify((JSON.parse(endtime) == 12) ? 1 : JSON.parse(endtime) + 1).concat((time.charAt(1) + time.charAt(2) + time.charAt(3) == '_AM') ? ' AM' : ' PM');
                var endTim = $scope.endTime.split(" ");
                $scope.endTime1 = endTim[0];
                $scope.endTime2 = endTim[1];
            }
            else {
                $scope.eventTime = endtime.concat((time.charAt(2) + time.charAt(3) + time.charAt(4) == '_AM') ? ' AM' : ' PM');
                var eventTim = $scope.eventTime.split(" ");
                $scope.eventTime1 = eventTim[0];
                $scope.eventTime2 = eventTim[1];
                $scope.endTime = JSON.stringify((JSON.parse(endtime) == 12) ? 1 : JSON.parse(endtime) + 1).concat((time.charAt(2) + time.charAt(3) + time.charAt(4) == '_AM') ? ' AM' : ' PM');
                var endTim = $scope.endTime.split(" ");
                $scope.endTime1 = endTim[0];
                $scope.endTime2 = endTim[1];
            }
               
        }
        $scope.cleartext = function () {        
            $("#confirmDiscard").modal('show');
            $('.modal-backdrop').remove();
        }
        $scope.discardevent = function () {
            $("#confirmDiscard").modal('hide');

            $(".eventTitle").val('');
            $(".eventLocation").val('');
            $('#eventpage').modal('hide');
            $("#dayview").css('overflow-y', 'scroll');
            return true;
        }

        $scope.discardEventpage = function () {
            $('#eventpagedetail').modal('hide');
            $("#dayview").css('overflow-y', 'scroll');
        }

        $scope.closediscard = function () {
            $("#confirmDiscard").modal('hide');
        
        }
        $scope.closeTitleError = function () {
            $("#confirmDiscard").modal('hide');
            $scope.titleError = false;
        }
        $scope.closedelete = function () {
            $("#deletPopEvent").modal('hide');
        }

    

        $scope.titleError = false;
        //Adding Events to calender  
        var array = [];
        $scope.saveEvent = function (eventDate, eventTime) {
           var mint= document.getElementById('minutes').value;
            var loginalert = true;
            // checking past date 
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1; //January is 0!
            var yyyy = today.getFullYear();
            //if (dd < 10) {
            //    dd = '0' + dd
            //}
            //if (mm < 10) {
            //    mm = '0' + mm
            //}
            today = mm + '/' + dd + '/' + yyyy;

            today = new Date(mm + '/' + dd + '/' + yyyy);
            enterDate = new Date(eventDate);
            if (today > enterDate)
            {
                loginalert = false;
            }

			var eventTitle =  $(".eventTitle").val();
			var eventText = $(".eventLocation").val();
			
            
            var eventdt = eventDate.split('/');
            var time = eventTime.split(' ');
            var passingTime = '';
            if (time[1] == 'PM')
            {
                passingTime = 12 + parseInt(time[0]);
            }
            else if (time[0] == '12')
            {
                passingTime = 0;
            }
            else {
                passingTime = parseInt(time[0]);
            }
            
            var now = new Date(eventdt[2], eventdt[0] - 1, eventdt[1], passingTime, mint).getTime();
            var currentTime = new Date(now);
            //Checking date and time
			var date = new Date();
			var hours = date.getHours();
			var minutes = date.getMinutes();
			var ampm = hours >= 12 ? 'pm' : 'am';
			hours = hours % 12;
			hours = hours ? hours : 12; // the hour '0' should be '12'
			minutes = minutes < 10 ? '0' + minutes : minutes;
			var strTime = hours + ' ' + ampm;
			




            if ($.trim($(".eventTitle").val()) == "") {
                $scope.titleError = true;
                $("#confirmDiscard").modal('show');
                $('.modal-backdrop').remove();
                return;
            }
            var eventTime_minutes = eventTime.split(" ");
            array.push({
                eventdate: eventDate,
                eventtitle: $.trim($(".eventTitle").val()),
                eventlocation: $.trim($(".eventLocation").val()),
                eventTime: eventTime_minutes[0] + ':' + mint + ' ' + eventTime_minutes[1],
                

            });
            if (localStorage.getItem('Eventlist') != undefined) {
                addedEvents = JSON.parse(localStorage.getItem('Eventlist'));
                addedEvents.push(array);
                localStorage.setItem('Eventlist', JSON.stringify(addedEvents));
                array = [];
            }
            else {
                addedEvents.push(array);
                localStorage.setItem('Eventlist', JSON.stringify(addedEvents));
                array = [];
            }
         
            var result = $scope.discardevent();
            var reload = hideday();
            if (loginalert == true)
            {
                cordova.plugins.notification.local.schedule({
                    id: g_id++,
                    title: eventTitle,
                    text: eventText,
                    at: currentTime,
                    icon: "res://alert.png",
					smallIcon: "ic_popup_reminder"
                });
                cordova.plugins.notification.local.on("schedule", function (notification) {
                    //alert("scheduled: " + notification.id);
                  
                });
                cordova.plugins.notification.local.getTriggered(function (notifications) {
                    //alert(notifications.length);
                   // console.log("test getTriggered");
                  //  localStorage.setItem('Notification', true);
                });
                cordova.plugins.notification.local.on("click", function (notification) {
                   // alert(notification.text);
                    //console.log("test on click");
                    PageStack.push("#notification");

                });
                $rootScope.$on("$cordovaLocalNotification:click", function (notification, state) {
                    window.location.href = "index.html#/notification";
                });
            }
            

            PageStack.push("#calender");
           
        }

    //this should only be registered once    
        $scope.$on('$cordovaLocalNotification:schedule', function (notification) {
           // alert("scheduled: " + notification.id);
        });

    //this should only be registered once    
        $scope.$on('$cordovaLocalNotification:trigger', function (notification) {
           // alert("triggered: " + notification.id);
        });
       
        

     
        //events details showing
        $scope.showevents = function (date, selectedtitle, selectedtime) {
        
            $scope.eventdetailtitle = selectedtitle;
            $scope.eventdetailtime = selectedtime;
            $scope.date = date;
            $("#eventpagedetail").modal('show');
            $('.modal-backdrop').remove();

        }
        $scope.deleteevent = function (date, title, time) {
            var array = [];
            var arrNew = [];
            array = JSON.parse(localStorage.getItem('Eventlist'));
            var timeFormate = time;
            if (timeFormate.charAt(2) == "_") {
                timeFormate = timeFormate.charAt(0) + timeFormate.charAt(1) + ' ' + timeFormate.charAt(3) + timeFormate.charAt(4);
            
            }
            else if (timeFormate.charAt(1) == "_") {
                timeFormate = timeFormate.charAt(0) + ' ' + timeFormate.charAt(2) + timeFormate.charAt(3) + timeFormate.charAt(4);
            }
            var arrayObj = [];
            arrayObj.push({

            });
            for (var i = 0; i < array.length; i++) {
                //  for (var j = 0; j < array[i].length; j++) {
                if (array[i][0].eventdate == date && array[i][0].eventtitle == ((title == "(No data)") ? '' : title) && array[i][0].eventTime == timeFormate) {
                    delete array[i];
                    //   }
                }
            
            
            }
            arrayObj = array;
            for (var i = 0 ; i <= arrayObj.length; i++)
            {
                if (arrayObj[i] != null) {
                    arrNew.push(arrayObj[i]);
                }
            }
            localStorage.setItem('Eventlist', JSON.stringify(arrNew));
            $("#eventpagedetail").modal('hide');
            $("#dayview").modal('hide');

            PageStack.push("#calender");
        }
        $scope.onClickOpendeletPopEvent = function () {
            $("#deletPopEvent").modal('show');
            $('.modal-backdrop').remove();
        }
        var location = $location.path().split("/");
        if (location[1] == 'calender') {
            $rootScope.viewguide = false;
            $rootScope.contact = false;
            $rootScope.calender = true;
        }
       
    }
