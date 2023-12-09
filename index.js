let naam = document.querySelector('#naam');
let bank = document.querySelector('#Bank');
let log = document.querySelector('#log');
let name = document.querySelector('#name');
let mbl = document.querySelector('#mbl');
let price = document.querySelector('#price');
// let popp = document.querySelector('.pop');
let count = 0;
let arb = [];

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function dopay(){ 
  count++;
  let  f =  prompt('Please Enter Reciver Name');
  let  s =  prompt('Please Enter Reciver Bank Name');
  arb.push(f,s)
  naam.innerHTML = f.toUpperCase();
  bank.innerHTML = s.toUpperCase() ;
  
  let q = f.split(' ') ;
  let str = '';
  q.map((e)=>{str += e[0]})
  log.innerHTML = str.toUpperCase();   
  return count;
}  


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let form = document.querySelector('form'); 
let arr = JSON.parse(localStorage.getItem('data')) || [];

form.addEventListener('submit',function(e){ 
  e.preventDefault(); 
let pro = new Promise(function(resolve,reject){
    // popp.style.display = 'block';
    console.log('Please Wait ...');
    if(price.value <= 2000 && price.value >= 1 && arb[0] != undefined ){
     setTimeout(() => {
      resolve(res);
     }, 3000); 
    }else{
      reject(rej);
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
    
    window.open('http://127.0.0.1:3004/success/success.html','_blank');
    location.reload();
  }
}

//::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

function rej(){
  // alert('You Do Not Have Sufficient Balance\n|OR|\nNot Enter Reciver Name And bank Name\n ➡ Plese Click T0 The Payment Button On The Top Right Corner');
  // popp.style.display = 'block';
  setTimeout(() => {
    window.open('http://127.0.0.1:3000/failed/faild.html','_parent')
  }, 2000);
    
  // location.reload();
}




