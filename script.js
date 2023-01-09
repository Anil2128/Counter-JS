const el = (css) => document.querySelector(css);
let counter = 0;
let value = el('#value');








el('.decrease').addEventListener('click',function decreasing(){
    counter--;
    value.innerHTML = counter;
});
el('.reset').addEventListener('click',function reset(){
    counter = 0;
    value.innerHTML = counter;
});
el('.increase').addEventListener('click',function increase(){
    counter++;
    value.innerHTML = counter;
});
