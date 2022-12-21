1.

document.querySelector(
  ".crayons-layout .sidebar-wrapper .side-bar .crayons-card .crayons-subtitle-2"
).innerHTML = "SHUBHAM AHER";

document.querySelector(
  ".crayons-layout .sidebar-wrapper .side-bar .crayons-card  .color-base-70 "
).innerHTML = "CODING";

2.

let elements = document.getElementsByClassName("as-imagegrid-item-title");
let data = []
for (var i = 0, len = elements.length; i < len; i++) {
    arr[i] = elements[i].textContent
}
console.log(data)

3.

let navbar = document.querySelector(".accordion-homepage");
let section = document.createElement("section");
section.classList = "parent";
let h3 = document.createElement("h3");
h3.innerHTML = "my new faq";
section.appendChild(h3);
navbar.appendChild(section);

4.

document.querySelector(".customer-support .one-tel-number").innerHTML =
  "+91 6366256689";

5.

document.querySelector(
  ".mytabs .diwali-deals-product-sale-pro .diwali-deals-product-sale-btn"
).innerHTML = "Check Out";
6.

let button = document.querySelector(".searchinput___19uW0");

button.style.backgroundColor = "red";

7.
document.getElementById("hp-search-input").value = "CSS Selectors";
document.getElementById("hp-search-form").submit()

8.
let langs = document.getElementById("SIvCob").childNodes;
for(let i = 3; i < langs.length; i++){
    langs[i].remove();
}

9.
let heading = document.querySelector(".display-heading-1");
heading.style.fontFamily = "monospace";
heading.style.color = "#ff1a1a";

10.
let allbtn = document.querySelectorAll(".login-btn-text");
allbtn[1].style.backgroundColor = "#ed2fe9";

11.
let logo = document.getElementsByClassName("icon-logo")
logo[0].style.backgroundImage = "url('https://account.ineuron.ai/static/images/ineuron-logo.png')";

12.

let btn = document.getElementsByClassName("btn btn-sm btn-primary");
let bluebtn = btn[1];
bluebtn.style.backgroundColor = "#1d00ff";

13.
document.querySelector(".fl-heading .fl-heading-text").innerHTML ="JS bootcamp"

14.
document.querySelector(".HotDealsAll__Heading__2fIbe").style.fontSize = "80px"

15.
let g15 = document.querySelectorAll(".ps-title");
for(i = 0; i < g15.length; i++){
    if(g15[i].innerText == "G15 Gaming Laptop"){
        g15[i].style.textAlign = "right";
        console.log(g15[i])
    }
    else continue;
}

16.
let head = document.querySelector(".section-title_title__VEDfK")
head.innerText = "Start with Scratch"

17.
let today = new Date;
let btn1 = document.querySelector(".PrimaryTout__ButtonText");
btn1.innerText = today

18.
let foot2 = document.querySelector(".p-footer")
foot2.style.background = "#ff7f00"

19.
document.querySelector(".logo").src

20.
let desc = document.querySelector(".desc");
desc.style.color = "orange";