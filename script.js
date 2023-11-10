 
        var result=document.getElementById("time"); 
        var timing=setInterval(settingTime,1000);
        var i=10;
        function settingTime(){
            var text=document.getElementById("text").value;
            result.innerHTML=i;
            if(text=="VUMP"){
                result.innerHTML="You Did it";
                clearInterval(timing);
            }
            if(i==0){
                result.innerHTML="BOOM"
                clearInterval(timing);
            }
            i--;
        }