
let date=new Date();
let hour = date.getHours();
let minute =date.getMinutes();
let second = date.getSeconds();
let flag=1;
let hrs = document.querySelector(".item1");
let min = document.querySelector(".item2");
let sec = document.querySelector(".item3");
let Pause = document.querySelector(".stop");
let resume = document.querySelector(".Resume");
let lap = document.querySelector(".t-Lap");
let lapEnter=document.querySelector(".timelap")
let clear=document.querySelector(".clear");

Pause.addEventListener("click", pause1);
resume.addEventListener("click", resume2);
hrs.innerHTML=`${hour} : hrs`;
  min.innerHTML=`${minute} : min`;
  sec.innerHTML=`${second} : sec`;

        
          //  Time lap

lap.addEventListener("click",()=>
{
  lapEnter.innerHTML+=`<div>${hour} : ${minute} : ${second}</div>`;
});

clear.addEventListener("click",()=>
{
  lapEnter.innerHTML="";
})

let id = setInterval(() => {
 
  start();
}, 1000)

//Functions of   events stop

function pause1()
 {
  flag=0;
  clearInterval(id);
}
  
    // Function for resume
function resume2()
{
  if(flag==0){
  flag=1;
    id=setInterval(() => {
      start();
    }, 1000)
  }
}

  // Start function
  
function start()
{
  if (second >= 59)
  {
    if (minute >= 59){
      hrs.innerHTML = `${++hour} hrs`;
      second = 0;
      minute = 0;
    }
    min.innerHTML = `${++minute} min`;
    second = 0;
  }
  else {
    sec.innerHTML = `${++second} sec`;
  }
}

