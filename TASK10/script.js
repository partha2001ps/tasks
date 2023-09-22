let a=document.getElementById('display')
   let count=10
   

   let countdisplay=function(count,call){
     if(count===-1){
      call();
     }
     else{
      setTimeout(function(){
        a.innerText=count;
        countdisplay(count-1,call)
      },1000)

     }
   } 

countdisplay(count,function(){
  a.innerText='Happy Indepedence Day'
})