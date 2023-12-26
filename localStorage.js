let lis = document.querySelectorAll("ul li");
let exp = document.querySelector(".experiment");


// window.localStorage.clear()
if(window.localStorage.getItem("color")){ // if there is color in local storage
  // 1: add color to div
  exp.style.backgroundColor = window.localStorage.getItem("color");
  //2: remove active class from all lis
  lis.forEach((li) => {
    li.classList.remove("active");
   });
    // 3: add active class to current color
   document.querySelector(`[data-color = 
    ${window.localStorage.getItem("color")}]`).classList.add("active");
    // means add active class to the li oo color kas eska le
}



lis.forEach((ele) => {
    ele.addEventListener("click", (e) => {
     // remove active class from all list
     console.log(ele)
      lis.forEach((li) => {
       li.classList.remove("active");
      });
      // add active class to current el
      e.currentTarget.classList.add("active");
      // add current color to local storage 
      //  means midka click siiyo color u asign grey
      window.localStorage.setItem("color",e.currentTarget.dataset.color);
       // change div background color
       exp.style.backgroundColor = e.currentTarget.dataset.color
     })
     
   });