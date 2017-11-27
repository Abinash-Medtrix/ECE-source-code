function calenderDetail() {
    this.startDate = formatDate(new Date());
    this.endDate = formatDate(new Date());

this.getMonthStatus = function (date) {



    if (date == undefined)
        date = new Date();
    var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var btaken = false;
    var bnottaken = false;

    var firstDate = new Date(date.getFullYear(), date.getMonth(), 1);

    var monthStatus = [
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}, {}, {}],
    ];
    var firstDay = firstDate.getDay();
    var selMonth = date.getMonth();

    var weeknumber = 0;

    if (firstDay == 0) {
        // for (var index = 0; index < firstDay; index++)
        //   monthStatus[weeknumber].push({});
        weeknumber = -1;
    }

    //getting total events for each date
    var eventsEachdate = [];


    while (firstDate.getMonth() == selMonth) {

        if (firstDate.getDay() == 0)
            weeknumber++;

        dayList = this.getByDay(firstDate);      
        
        if (dayList.length == 0 || dayList == undefined) {
            var sdate = new Date(this.startDate);
            var edate = new Date(this.endDate + " 11:59:59 PM");

            var monthStart = new Date(date.getFullYear(), date.getMonth(), 1);
            var monthEnd = new Date(date.getFullYear(), date.getMonth() + 1, 1);
            var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);


            var event = false;
            var noevent = true;           
            for (var dayMedIndex = 0; dayMedIndex < monthLength; dayMedIndex++) {

                if (localStorage.getItem('Eventlist') != undefined) {
                    addedEvents = JSON.parse(localStorage.getItem('Eventlist'));
                }

                if (addedEvents != undefined && addedEvents.length > 0) {
                    for (i = 0; i < addedEvents.length; i++) {
                        if (addedEvents[i].length != undefined && addedEvents[i].length > 0) {
                            for (j = 0; j < addedEvents[i].length; j++) {                                
                                if (new Date(firstDate).getTime() == new Date(addedEvents[i][j].eventdate).getTime()) {
                                    //sessionStorage.setItem('eventTitle', addedEvents[i][j].eventtitle);
                                    //sessionStorage.setItem('eventTime', addedEvents[i][j].eventTime);
                                    eventsEachdate.push({ title: addedEvents[i][j].eventtitle, time: addedEvents[i][j].eventTime, date: addedEvents[i][j].eventdate })

                                    event = true;
                                  
                                }                                
                            }
                        }                        
                    }
                }
                else {
                    monthStatus[weeknumber][firstDate.getDay()] = { date: firstDate.getDate(), status: 'Noevent' };
                }

                if (event == true) {
                    monthStatus[weeknumber][firstDate.getDay()] = {
                        date: firstDate.getDate(),
                        status: 'eventAdded',
                        //title: (($.trim(sessionStorage.getItem('eventTitle')) ==  "") ? '(No data)' : $.trim(sessionStorage.getItem('eventTitle'))),
                        //time: sessionStorage.getItem('eventTime')
                        events: JSON.stringify(eventsEachdate)
                    };
                    event = false;
                }
                else {
                    monthStatus[weeknumber][firstDate.getDay()] = {
                        date: firstDate.getDate(),
                        status: 'Noevent'
                    };
                }
                firstDate.setDate(firstDate.getDate() + 1);

                if (monthStatus[weeknumber][6].date != undefined)
                    weeknumber++;
            }
            return monthStatus;
        }        
        
    }

   
}

this.getYearStatus = function (date) {


    var yearStatus = [[], [], [], [], [], [], [], [], [], [], [], []];

    if (date == undefined)
        date = new Date();

    date.setMonth(0);
    for (var index = 0; index < 12; index++) {


        yearStatus[index] = this.getMonthStatus(date);
        date.setMonth(date.getMonth() + 1);

    }
    return yearStatus;
}

this.getByDay = function (date) {

    var dayList = [];
    if (date == undefined) {

        date = new Date();
    }

    return dayList;
}

this.getDayTime = function (date) {

    var btaken = false;
    var bnotTaken = false;

    if (date == undefined)
        date = new Date();
    var dayList = this.getByDay(date);
    var Dayobjects = {};

    //timeArrayForDayView = ["12_AM", "1_AM", "2_AM", "3_AM", "4_AM", "5_AM",
    //"6_AM", "7_AM", "8_AM", "9_AM", "10_AM", "11_AM", "12_PM", "1_PM", "2_PM", "3_PM", "4_PM", "5_PM", "6_PM", "7_PM", "8_PM", "9_PM", "10_PM", "11_PM"];
   
    return Dayobjects;

}

}
var g_calender = new calenderDetail();

//date format function
function formatDate(d) {
    return (d.getMonth() + 1) + '/' + d.getDate() + '/' + d.getFullYear();
}

function showdayview() {

    $("#dayview").modal('show');
    $('.modal-backdrop').remove();
   
   
}
function hideday() {
    $("#dayview").modal('hide');

    //getting calender details
    sessionStorage.setItem('monthstatus', JSON.stringify(g_calender.getMonthStatus(undefined)));
    sessionStorage.setItem('yearstatus', JSON.stringify(g_calender.getYearStatus(undefined)));
    PageStack.push("#calender");
    return true;
}
