// let openBtn = document.querySelector('#open-btn');
// let model = document.querySelector('.cont');
// let closeBtn = document.querySelector('.close-btn')

// openBtn.addEventListener('click',function(){
//     model.style.display = 'block';
// })

// closeBtn.addEventListener('click',function(){
//     model.style.display = 'none'
// })
// window.addEventListener('click',function(e){
//     if(e.target === model){
//         model.style.display = 'none';
//     }
// })
// document.addEventListener('DOMContentLoaded',function(){
let openBtn = document.querySelector('#open-btn');
let model = document.querySelector('.model-container');
let closeBtn = document.querySelector('.close-btn')

openBtn.addEventListener('click',function(){
    model.style.display = 'block';
})
closeBtn.addEventListener('click',function(){
    model.style.display='none';
})

window.addEventListener('click',function(e){
    if (e.target === model){
        model.style.display = 'none';
    }
})
// })