$(document).ready(function(){

    var timer, hour, minute, second;
    var flag = true;
    var intervalId;


    function Init () {
        timer = 0;
        hour = 0;
        minute = 0;
        second = 0;
        flag = true;
        $('#clock').html('Time 00h 00m 00sec');
    };

    function Start () {
        if (flag) {
            flag = false;
            intervalId = setInterval(function () {
                ++timer;
                hour = Math.floor(timer / 3600);
                minute = Math.floor((timer - hour * 3600) / 60);
                second = timer - hour * 3600 - minute * 60;
                if (hour < 10) hour = '0' + hour;
                if (minute < 10) minute = '0' + minute;
                if (second < 10) second = '0' + second;
                $('#clock').html('Time ' + hour + 'h ' + minute + 'm ' + second + 'sec');
                Rotation();
            }, 1000);
        };
    };

    function Stop() {
        clearInterval(intervalId);
        flag = true;
    };

    function Rotation() {
        $('#secondHand').rotate(
            {
             angle: timer*6,
             center: ["50%", "100%"]
            });
        $('#minuteHand').rotate({
            angle: timer/10,
            center: ["50%", "100%"]
        });
        $('#hourHand').rotate({
            angle: timer/600,
            center: ["50%", "100%"]
        });
    };

    Init();

    $("#start").click(function() {
        Start();
    });

    $("#stop").click(function() {
        Stop();
    });

    $("#reset").click(function() {
        Stop();
        Init();
        $('#secondHand').rotate(360);
        $('#minuteHand').rotate(360);
        $('#hourHand').rotate(360);

    });


});


