const title = document.querySelector(".title ");
const increase = document.querySelector(".increase");
const reset = document.querySelector(".reset");
const decrease = document.querySelector(".decrease");


let count=0;

// increase count 
increase.addEventListener("click", function(){
    count++;
    title.textContent = count;
});
// reset count 
reset.addEventListener("click", function(){
    count=0;
    title.textContent = count;
});

// decrease count 
decrease.addEventListener("click", function(){
    count--;
    title.textContent = count;
});

