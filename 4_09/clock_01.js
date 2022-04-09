    function get_time()
    {
        var time = new Date();
        var hour = addZero(time.getHours());    //시간
        var min  = addZero(time.getMinutes());  //분
        var sce  = addZero(time.getSeconds());  //초
        
        document.getElementById("main").innerHTML = hour + " 시 " + min + " 분 " + sce + " 초 " 
    }

    function addZero(number)
    {
        //10이하일때 앞에 0을 추가한다.
        if(number < 10)
        {
            return "0" + number;
        }
        else
        {
            return number;
        }
    }

    function timeON()
    {
        document.getElementById("timeWhat").style.display = "none";  //버튼을 누르면 버튼을 숨긴다. 
        get_time();                                                  //get_time함수를 실행한다.
        setInterval(get_time, 1000);                                 //1초마다 함수를 재실행
    }
