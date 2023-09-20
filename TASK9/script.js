let a=document.createElement('div');
a.id='full';
let b=document.createElement('div');
b.className='cla'
let input=document.createElement('input');
input.className='in';
input.id='inp'
input.setAttribute('placeholder','0')
let butn=document.createElement('button')
butn.addEventListener('click',allclear);
butn.textContent='C'
butn.style.color='red'
let butn1=document.createElement('button');
butn1.className='blu'
butn1.addEventListener('click',del);
butn1.textContent='<--'
let butn2=document.createElement('button');
butn2.className='blu'
butn2.addEventListener('click',()=>display('.'));
butn2.textContent='.'
let butn3=document.createElement('button');
butn3.className='blu'
butn3.addEventListener('click',()=>display('*'));
butn3.textContent='*'
let butn4=document.createElement('button');
butn4.addEventListener('click',()=>display('7'));
butn4.textContent='7'
let butn5=document.createElement('button');
butn5.addEventListener('click',()=>display('8'));
butn5.textContent='8'
let butn6=document.createElement('button');
butn6.addEventListener('click',()=>display('9'));
butn6.textContent='9'
let butn7=document.createElement('button');
butn7.className='blu'
butn7.addEventListener('click',()=>display('/'));
butn7.textContent='/'
let butn8=document.createElement('button');
butn8.addEventListener('click',()=>display('4'));
butn8.textContent='4'
let butn9=document.createElement('button');
butn9.addEventListener('click',()=>display('5'));
butn9.textContent='5'
let butn10=document.createElement('button');
butn10.addEventListener('click',()=>display('6'));
butn10.textContent='6'
let butn11=document.createElement('button');
butn11.className='blu'
butn11.addEventListener('click',()=>display('-'));
butn11.textContent='-'
let butn12=document.createElement('button');
butn12.addEventListener('click',()=>display('1'));
butn12.textContent='1'
let butn13=document.createElement('button');
butn13.addEventListener('click',()=>display('2'));
butn13.textContent='2'
let butn14=document.createElement('button');
butn14.addEventListener('click',()=>display('3'));
butn14.textContent='3'
let butn15=document.createElement('button');
butn15.className='blu'
butn15.addEventListener('click',()=>display('+'));
butn15.textContent='+'
let butn16=document.createElement('button');
butn16.addEventListener('click',()=>display('0'));
butn16.textContent='0'
let butn17=document.createElement('button');
butn17.addEventListener('click',()=>display('00'));
butn17.textContent='00'
let butn18=document.createElement('button');
butn18.className='equ'
butn18.addEventListener('click',calclulate);
butn18.textContent='='
b.append(input,butn,butn1,butn2,butn3,butn4,butn5,butn6,butn7,butn8,butn9,butn10,butn11,butn12,butn13,butn14,butn15,butn16,butn17,butn18)
a.appendChild(b);
document.body.appendChild(a);
   let dis=document.getElementById('inp');
    function display(num){
        dis.value+=num;
    }
    function calclulate(){
        try{
            dis.value=eval(dis.value)
        }
        catch(err){
            alert('Only Numbers are allowed')
        }
    }
  function del(){
    dis.value=dis.value.slice(0,-1)
  }
  function allclear(){
    dis.value=""
  }
