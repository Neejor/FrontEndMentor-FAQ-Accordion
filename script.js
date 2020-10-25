var item = document.querySelectorAll(".question span");

// item.forEach(check);
//
// function check(el) {
//   el.addEventListener("click", function() {
//     console.log("ASAS");
//   })
// }

for(let i=0; i<item.length; i++)
{
  item[i].addEventListener("click", function() {
    item[i].children[0].classList.toggle("show2");
    item[i].children[1].classList.toggle("show2");
    var p = item[i].nextElementSibling;
    p.classList.toggle("show2");

    for(let j = 0;j<item.length; j++)
    {
      if(j!=i) {
        item[j].children[0].classList.remove("show2");
        item[j].children[1].classList.remove("show2");
        let x = item[j].nextElementSibling;
        x.classList.remove("show2");
      }
    }
     console.log(item[i].children[1].nodeName);
  })
}
