
let stat = document.querySelector('#status');
let refrence = document.querySelector('#refrence');
let img = document.querySelector('#crd');
let data = JSON.parse(localStorage.getItem('data'));
let arr = [
    'https://www.shutterstock.com/shutterstock/photos/2059551974/display_1500/stock-vector-gift-card-bow-ribbon-sale-christmas-coupon-icon-vector-illustration-2059551974.jpg',
    'https://img.freepik.com/premium-vector/modern-coupon-voucher-template_23-2147945687.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/free-vector/modern-style-black-friday-festive-sale-offer-banner-design-vector_1017-48250.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/free-vector/gift-coupon-with-ribbon-offer_24877-55663.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/free-vector/gradient-sale-coupon-design-template_23-2149605794.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/premium-vector/red-gift-voucher-with-50-percent-discount_79145-1163.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/premium-vector/vector-gift-voucher-design-template-gift-voucher-template-promotion-sale-discount_471203-861.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/free-vector/creative-coupon-template-design_23-2147934556.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/premium-vector/shopping-mall-illustration-set-half-price-discount-gleaming-giftlike-golden-coupon-coin_632180-345.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/free-vector/flat-cartoon-character-customer-50-percent-discount-with-coupon_1150-34877.jpg?ga=GA1.1.1546815657.1692990221&semt=sph',
    'https://img.freepik.com/free-vector/gradient-sale-coupon-design-template_23-2149611749.jpg?ga=GA1.1.1546815657.1692990221&semt=sph'
];
   
for(let i = 0; i < data.length; i++){
    if(i == data.length-1){ 
        stat.innerHTML = `Payment of ₹${data[i].price} to ${data[i].name} successful`; 
        refrence.innerHTML = `ID  ${data[i].refrence}`;
    }  
};   
let z = Math.ceil(Math.random()*10);  
arr.map(e=>{
    img.setAttribute('src',arr[z] )   
    
});          
function go(){ 
    window.close('http://127.0.0.1:3000/index/index.html') 
    
}
 
 

















