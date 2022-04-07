var ArrayOfinnerHTML = ['w','a','s','d','j','k','l'];
  for(var i = 0; i <drum.length; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
     var whatInnerHTML = this.innerHTML;
     console.log('console_log is : '+ ArrayOfinnerHTML[i]); //undefined
     console.log('console_log is : '+ ArrayOfinnerHTML[0]); //w
     if(whatInnerHTML === ArrayOfinnerHTML[i])
     {
        alert('yes');  //메세지 출력 안됌
     }
    });
  }