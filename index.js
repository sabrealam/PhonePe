let naam = document.querySelector('#naam');
let bank = document.querySelector('#Bank');
let log = document.querySelector('#log');
let name = document.querySelector('#name');
let mbl = document.querySelector('#mbl');
let price = document.querySelector('#price');
let pop = document.querySelector('.pop'); 
let bbb = document.querySelector('.bbb'); 
let arb = [];

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function dopay(){  
  let  f =  prompt('Please Enter Reciver Name');
  let  s =  prompt('Please Enter Reciver Bank Name');
  arb.push(f,s)
  naam.innerHTML = f.toUpperCase();
  bank.innerHTML = s.toUpperCase() ;
  
  let q = f.split(' ') ;
  let str = '';
  q.map((e)=>{str += e[0]})
  log.innerHTML = str.toUpperCase();   
}  

//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let form = document.querySelector('form'); 
let arr = JSON.parse(localStorage.getItem('data')) || [];

form.addEventListener('submit',function(e){ 
  e.preventDefault(); 
  pop.style.display = 'block';
  bbb.style.display = 'none';
  new Promise(function(resolve,reject){
    console.log('Please Wait ...');
    if(price.value <= 2000 && price.value >= 1 && arb[0] != '' ){
      //&& arb[0] != undefined 
     setTimeout(() => {
      console.log('resolve');
      resolve(res());
     }, 1000); 
    }else{
      console.log('reject');
      reject(rej());
    }
  })
})

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function res(){
  if( arb[0] == '' || arb[1] == ''){
    alert('Please Enter Your Name And Bank Name');
    location.reload();
  }else { 
    obj = {};
    obj.name = arb[0];
    obj.mbl = mbl.value;
    obj.price = price.value; 
    obj.refrence = Math.random().toString().slice(2);
    arr.push(obj);
    
    localStorage.setItem('data',JSON.stringify(arr));
    
    window.open('./success.html','_parent'); 
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function rej(){
   pop.style.display = 'block';
   bbb.style.display = 'none';
  setTimeout(() => {
    window.open('./faild.html','_parent')
  }, 1000);
    
 }




