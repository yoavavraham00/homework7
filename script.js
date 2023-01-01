// let myname = "yoav";
// let lastName = "Dubrovin";
// let emailAdress = "yoavavraham00@gmail.com";

// let newBtn = document.getElementById("send");

// newBtn.addEventListener("click", () => {
//   let firstName = document.getElementById("addFirstName").value;
//   let addLastName = document.getElementById("addLastName").value;
//   let addEmail = document.getElementById("addEmail").value;

//   let newdiv = document.createElement("div");
//   let newText = document.getElementById("addFirstName");
//   let newText2 = document.getElementById("addLastName");
//   let newText3 = document.getElementById("addEmail");

//   let yoav1 = document.createTextNode(newText);
//   let yoav2 = document.createTextNode(newText2);
//   let yoav3 = document.createTextNode(newText3);

//   div.appendChild(yoav1);
//   div.appendChild(yoav2);
//   div.appendChild(yoav3);

//   document.body.appendChild(newdiv);
// });

// <div id="myDiv" style="border:1px solid"></div>;
// function changeStyle() {
//   var element = document.getElementById("myDiv");
//   element.style.backgroundColor = "#00FF00";
// }

// {/* <div id="nav">
//     Some Text
// </div>

// <input type="text" id="color"><button onClick="changeColor()">Change</button>

// <script>

//     function changeColor(){

//         var colorCode = document.getElementById('color').value;
//         var  nav = document.getElementById('nav');

//         nav.style.background = "'"+colorCode+"'";
//     }

// // </script> */}

let name1 = "yoav";
let lastName2 = "dubrovin";
let email3 = "yoavavraham00@gmail.com";

let newBtn = document.getElementById("send");

let form = document.querySelector(".form");
let p = document.createElement("p");
form.appendChild(p);

newBtn.addEventListener("click", () => {
  let firstName = document.getElementById("addFirstName").value;
  let addLastName = document.getElementById("addLastName").value;
  let addEmail = document.getElementById("addEmail").value;

  if (firstName == name1 && addLastName == lastName2 && addEmail == email3) {
    p.textContent = "success";
    p.className = "success";
  } else {
    p.textContent = "error";
    p.className = "error";
  }
});
