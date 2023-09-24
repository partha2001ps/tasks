let a = document.getElementById('display')



let countdisplay10=function(call){
  setTimeout(()=>{
     a.innerText='10';
    call();
   },1000)
  }
  let countdisplay9=function(call){
  setTimeout(()=>{
     a.innerText='9';
     call();
   },1000)
  }
  let countdisplay8=function(call){
  setTimeout(()=>{
     a.innerText='8';
     call();
   },1000)
  }
  let countdisplay7=function(call){
  setTimeout(()=>{
     a.innerText='7';
     call();
   },1000)
  }
  let countdisplay6=function(call){
  setTimeout(()=>{
     a.innerText='6';
     call();
   },1000)
  }
  let countdisplay5=function(call){
  setTimeout(()=>{
     a.innerText='5';
     call();
   },1000)
  }
  let countdisplay4=function(call){
  setTimeout(()=>{
     a.innerText='4';
     call();
   },1000)
  }
  let countdisplay3=function(call){
  setTimeout(()=>{
     a.innerText='3';
     call();
   },1000)
  }
  let countdisplay2=function(call){
  setTimeout(()=>{
     a.innerText='2';
     call();
   },1000)
  }
  let countdisplay1=function(call){
  setTimeout(()=>{
     a.innerText='1';
     call();
   },1000)
  }
  
  
  countdisplay10(function(){
  countdisplay9(function(){
  countdisplay8(function(){
  countdisplay7(function(){
    countdisplay6(function(){
      countdisplay5(function(){
        countdisplay4(function(){
      countdisplay3(function(){
        countdisplay2(function(){
        countdisplay1(function(){
        setTimeout(()=>{
          a.innerText="Happy Indepedance day"
              call();
                  },1000)
  
                  })
               })
             })
           })
         })
       })
    })
  })
  });
  });
  //  let count=10
//    let countdisplay=function(count,call){
//      if(count===-1){
//       call();
//      }
//      else{
//       setTimeout(function(){
//         a.innerText=count;
//         countdisplay(count-1,call)
//       },1000)

//      }
//    } 
// countdisplay(count,function(){
//   a.innerText='Happy Indepedence Day'
// })