let a = document.getElementById('display')



let countdisplay10=(call)=>{
  setTimeout(()=>{
     a.innerText='10';
    call();
   },1000)
  }
  let countdisplay9=(call)=>{
  setTimeout(()=>{
     a.innerText='9';
     call();
   },1000)
  }
  let countdisplay8=(call)=>{
  setTimeout(()=>{
     a.innerText='8';
     call();
   },1000)
  }
  let countdisplay7=(call)=>{
  setTimeout(()=>{
     a.innerText='7';
     call();
   },1000)
  }
  let countdisplay6=(call)=>{
  setTimeout(()=>{
     a.innerText='6';
     call();
   },1000)
  }
  let countdisplay5=(call)=>{
  setTimeout(()=>{
     a.innerText='5';
     call();
   },1000)
  }
  let countdisplay4=(call)=>{
  setTimeout(()=>{
     a.innerText='4';
     call();
   },1000)
  }
  let countdisplay3=(call)=>{
  setTimeout(()=>{
     a.innerText='3';
     call();
   },1000)
  }
  let countdisplay2=(call)=>{
  setTimeout(()=>{
     a.innerText='2';
     call();
   },1000)
  }
  let countdisplay1=(call)=>{
  setTimeout(()=>{
     a.innerText='1';
     call();
   },1000)
  }

  
  countdisplay10(()=>{
    countdisplay9(() => {
      countdisplay8(() => {
        countdisplay7(() => {
          countdisplay6(() => {
            countdisplay5(() => {
              countdisplay4(() => {
                countdisplay3(() => {
                  countdisplay2(() => {
                    countdisplay1(() => {
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
    })
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