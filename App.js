var Nro = 0;
var Nro2 = 0; //utilizado para contar los pedidos en la pizarra
var pres,
  sab,
  date,
  hr,
  h = 0,
  q,
  d,
  band,
  priceTitle, totalP = 0;
var temp, aux;
var temp2;
var sabor = document.querySelectorAll("#Sub");
var presentacion = document.querySelectorAll("#pres");
var price = document.querySelectorAll(".price");
var index = [];
var newSab = [];
var index1 = [];
var mtx = []; //Matriz para excel

var ourArray = [];
var ourArray2 = [];
var ourArray3 = [];
var ourArray4 = [];
var ourArray5 = [];
var ourArray6 = [];

/*document.querySelector(".pizarra").innerHTML = `<div class="cardOrder">
    <div class="subCardOrder">
      <div style="width: 50%;">
        <div class="colOrder">
                  <div><b>Order ${h}</b></div>
                  <div>Presentación: </div>
                  <div>pres1</div>
                  <div>Sabores:</div>
                  <div>1, 2, 3</div>
                </div>
              </div>

              <div style="width: 50%;">
                <div class="colOrder">
                  <div><b>Price</b></div>
                  <div>&#8202;</div>
                  <div>&#8202;</div>
                  <div>&#8202;</div>
                  <div>10$</div>
                </div>
              </div>
        </div></div>`;
*/
        

if (
  ourArray.length == 0 &&
  JSON.parse(localStorage.getItem("ourarraykey")) != null
)
  ourArray = JSON.parse(localStorage.getItem("ourarraykey"));

if (
  ourArray2.length == 0 &&
  JSON.parse(localStorage.getItem("ourarraykey2")) != null
)
  ourArray2 = JSON.parse(localStorage.getItem("ourarraykey2"));

if (
  ourArray3.length == 0 &&
  JSON.parse(localStorage.getItem("ourarraykey3")) != null
)
  ourArray3 = JSON.parse(localStorage.getItem("ourarraykey3"));

if (
  ourArray4.length == 0 &&
  JSON.parse(localStorage.getItem("ourarraykey4")) != null
)
  ourArray4 = JSON.parse(localStorage.getItem("ourarraykey4"));

if (
  ourArray5.length == 0 &&
  JSON.parse(localStorage.getItem("ourarraykey5")) != null
)
  ourArray5 = JSON.parse(localStorage.getItem("ourarraykey5"));

if (
  ourArray6.length == 0 &&
  JSON.parse(localStorage.getItem("ourarraykey6")) != null
)
  ourArray6 = JSON.parse(localStorage.getItem("ourarraykey6"));

//ocument.querySelector(".Nro1").innerHTML = `${Nro}`;
//document.querySelector(".Nro2").innerHTML = `${Nro2}`;

let today = new Date().toLocaleDateString();
console.log(today);

//Funcion que permite obtener la cantidad de pedidos (number fild)
document.getElementById("btn").addEventListener("click", function (event) {
  event.preventDefault();
  Nro = document.getElementById("NumberId").value;
  console.log(Nro);
  document.querySelector(".Nro1").innerHTML = Nro;
  document.querySelector(".Nro2").innerHTML = Nro;
  document.getElementById("NumberId").value = 0;
});

//Elimina el ultimo elemento de la lista de ordenes
document
  .getElementById("Eliminar1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    totalP = totalP - parseInt(document.querySelectorAll(".setP")[document.querySelectorAll(".setP").length - 1].innerHTML.slice(0, -1))
    document.querySelector(".totalP").innerHTML = totalP + "$"
    document.querySelector(".cardOrder:last-child").remove();
    Nro2 = Nro2 - 1
    index1.splice(-1);
    console.log(index1);
  });

//Elimina la orden
document
  .getElementById("Eliminar2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    let list1 = document.querySelectorAll("#olOfOrden > ol > li");
    let ord = confirm("¿Esta seguro de cancelar la orden?");
    if (ord) {
      for (i = 0; i < list1.length; i++) list1[i].remove();
    }
  });

//Confirma la orden completa
document
  .getElementById("confirmar2")
  .addEventListener("click", function (event) {
    event.preventDefault();
    Nro2 = 0; totalP = 0; document.querySelector(".totalP").innerHTML = 0
    let list1 = document.querySelectorAll("#olOfOrden > ol > li");
    let ord = confirm("¿Esta seguro de confirmar la orden?");
    mtx.push(index1);
    console.log(mtx);
    index1 = [];
    if (ord == true) {
      for (i = 0; i < list1.length; i++) list1[i].remove();
    }
  });

//Seleccina las presentaciones
function myGeneralFunction1(e) {
  let k = document.querySelectorAll(".item");
  let m = document.querySelectorAll(".price");
  var p = e.target;
  index = [];
  newSab = [];

  for (i = 0; i < presentacion.length; i++)
    presentacion[i].style.backgroundColor = "beige";
  for (i = 0; i < sabor.length; i++) sabor[i].style.backgroundColor = "beige";
  for (i = 0; i < price.length; i++) price[i].style.backgroundColor = "beige";

  for (i = 0; i < sabor.length; i++) sabor[i].checked = false;

  if (e.target.classList.contains("price")) {
    for (i = 0; i < m.length; i++) if (p == m[i]) p = i;
    price[p].style.backgroundColor = k[p].style.backgroundColor = "#d3d3a7c7";
    pres = k[p].innerHTML;
    priceTitle = m[p].innerHTML;
    temp = aux = k[p];
  } else {
    for (i = 0; i < m.length; i++) if (p == k[i]) p = i;
    pres = e.target.innerHTML;
    priceTitle = m[p].innerHTML;
    temp = aux = e.target;
    e.target.style.backgroundColor = "#d3d3a7c7";
    m[p].style.backgroundColor = "#d3d3a7c7";
  }

  index.push(pres);
  for (i = 0; i < k.length; i++) if (temp == k[i]) temp = aux = i + 1;

  //console.log(e.target)
  console.log(`presentacion de: ${temp} sabor(es)`);
}
for (i = 0; i < presentacion.length; i++)
  presentacion[i].onclick = myGeneralFunction1;
for (i = 0; i < price.length; i++) price[i].onclick = myGeneralFunction1;

//Selecciona los sabores
function myGeneralFunction(e) {
  var ai = e.target;

  if (ai.checked) temp = temp + 2;
  if (temp == undefined) {
    alert("Selecciona una presentacion");
  } else if (temp != 0) {
    ai.checked = !ai.checked;
    if (ai.checked) {
      ai.style.backgroundColor = "#d3d3a7c7";
      newSab.push(ai.innerHTML);
      sab = ai.innerHTML;
      index.push(sab);
    } else {
      let target = ai.innerHTML;
      for (i = 0; i < newSab.length; i++)
        if (target == newSab[i]) {
          newSab.splice(i, 1);
          index.splice(i + 1, 1);
        }
      ai.style.backgroundColor = "beige";
    }
    temp = temp - 1;
  }
  //console.log("matriz de sabores: ", newSab);
  console.log("valor de index: ", index);
}
for (i = 0; i < sabor.length; i++) sabor[i].onclick = myGeneralFunction;

//funcion que confirma los pedidos realizados
var sumOfInd = "";
document
  .getElementById("confirmar1")
  .addEventListener("click", function (event) {
    event.preventDefault();
    Nro2 += 1;
    if (index.length == 0) alert("La orden esta vacia");
    else {
      index1.push(index);
      index = [];

      for (i = 0; i < presentacion.length; i++)
        presentacion[i].style.backgroundColor = "beige";
      for (i = 0; i < sabor.length; i++)
        sabor[i].style.backgroundColor = "beige";
      for (i = 0; i < price.length; i++)
        price[i].style.backgroundColor = "beige";

      console.log("Valor de la matrix index1: ", index1);

      for (i = 0; i < aux; i++) {
        sumOfInd += `${newSab[i]}`;
        if (aux - 1 == i) sumOfInd += "";
        else sumOfInd += ", ";
      }

      totalP += parseInt(priceTitle.slice(0, -1));
      var setP = priceTitle.includes("$") ?  priceTitle = priceTitle : priceTitle = "Set a price"

    document.querySelector(".pizarra").innerHTML += `<div class="cardOrder" style = "cursor: pointer;">
    <div class="subCardOrder">
      <div style="width: 50%;">
        <div class="colOrder your-item">
                  <div><b>Order ${Nro2}</b></div>
                  <div>Presentación: </div>
                  <div>${pres}</div>
                  <div>Sabores:</div>
                  <div>${sumOfInd}</div>
                </div>
              </div>

              <div style="width: 50%;">
                <div class="colOrder ">
                  <div><b>Price</b></div>
                  <div>&#8202;</div>
                  <div>&#8202;</div>
                  <div>&#8202;</div>
                  <div class = "setP" >${setP}</div>
                </div>
              </div>
        </div></div>`;

        document.querySelector(".totalP").innerHTML = totalP + "$"
      
      
      /*list.innerHTML += `<li class="hola">${pres}: ${sumOfInd}</li>`;
      list1.innerHTML += `<div>${priceTitle}</div>`;
      */
      sumOfInd = "";
      newSab = [];
      for (i = 0; i < sabor.length; i++) sabor[i].checked = false;
    }
  });

/*Sub menu para ajustar el precio y el nombre de las presentaciones*/
const contextMenu = document.getElementById("context-menu");
const contextMenu3 = document.getElementById("context-menu3");
const scope = document.querySelector("body");

scope.addEventListener("click", (e) => {
  if (
    e.target.offsetParent != contextMenu ||
    e.target.offsetParent != contextMenu3
  ) {
    contextMenu.classList.remove("visible");
    contextMenu3.classList.remove("visible");
  }
});

function myOverFunction(e) {
  let k = document.querySelectorAll(".price");
  q = d = e.target;
  e.preventDefault();
  for (i = 0; i < price.length; i++) price[i].oncontextmenu = myContexFunction;
  for (i = 0; i < price.length; i++) if (q == k[i]) q = i; //Asigna a "q" el valor del indice del target (pulsador a seleccionar)
}
for (i = 0; i < price.length; i++) price[i].onmouseover = myOverFunction;

function myContexFunction(e) {
  e.preventDefault();
  const { clientX: mouseX, clientY: mouseY } = e;
  contextMenu.style.top = `${mouseY}px`;
  contextMenu.style.left = `${mouseX}px`;
  contextMenu.classList.add("visible");
}

function myOverFunction3(e) {
  let k = document.querySelectorAll("#Sub");
  d = e.target;
  e.preventDefault();
  for (i = 0; i < sabor.length; i++) sabor[i].oncontextmenu = myContexFunction3;
  for (i = 0; i < sabor.length; i++) if (d == k[i]) d = i; //Asigna a "d" el valor del indice del target (pulsador a seleccionar)
}
for (i = 0; i < sabor.length; i++) sabor[i].onmouseover = myOverFunction3;

function myContexFunction3(e) {
  e.preventDefault();
  const { clientX: mouseX, clientY: mouseY } = e;
  contextMenu3.style.top = `${mouseY}px`;
  contextMenu3.style.left = `${mouseX}px`;
  contextMenu3.classList.add("visible");
}

// Get the modal ********************************************************************************
var modal = document.getElementById("myModal");

var bb = document.querySelector(".modal-body");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn1 = document.getElementById("myBtn1");
var btn3 = document.getElementById("myBtn3");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal
btn.onclick = () => {
  document.querySelector(
    "#titleModal"
  ).innerHTML = `Change price of "${presentacion[q].innerHTML}"`;
  document.querySelector("#NumberId2").placeholder = "Price USD";
  document.querySelector("#NumberId2").type = "number";
  modal.style.display = "block";
  contextMenu.classList.remove("visible");
  band = 0;
};

btn1.onclick = () => {
  document.querySelector(
    "#titleModal"
  ).innerHTML = `Change name of "${presentacion[q].innerHTML}"`;
  document.querySelector("#NumberId2").placeholder = "Name";
  document.querySelector("#NumberId2").type = "text";
  modal.style.display = "block";
  contextMenu.classList.remove("visible");
  band = 0;
};

btn3.onclick = () => {
  document.querySelector("#titleModal").innerHTML = `Change name`;
  document.querySelector("#NumberId2").placeholder = "Name";
  document.querySelector("#NumberId2").type = "text";
  modal.style.display = "block";
  contextMenu3.classList.remove("visible");
  band = 1;
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

if (JSON.parse(localStorage.getItem("ourarraykey")) != null) {
  for (i = 0; i < ourArray.length; i++) {
    price[JSON.parse(localStorage.getItem("ourarraykey2"))[i]].innerHTML = `${
      JSON.parse(localStorage.getItem("ourarraykey"))[i]
    }$`;
  }
}

if (JSON.parse(localStorage.getItem("ourarraykey3")) != null) {
  for (i = 0; i < ourArray3.length; i++) {
    presentacion[
      JSON.parse(localStorage.getItem("ourarraykey4"))[i]
    ].innerHTML = `${JSON.parse(localStorage.getItem("ourarraykey3"))[i]}`;
  }
}

if (JSON.parse(localStorage.getItem("ourarraykey5")) != null) {
  for (i = 0; i < ourArray5.length; i++) {
    sabor[JSON.parse(localStorage.getItem("ourarraykey6"))[i]].innerHTML = `${
      JSON.parse(localStorage.getItem("ourarraykey5"))[i]
    }`;
  }
}

document.getElementById("btn2").addEventListener("click", (e) => {
  e.preventDefault();
  modal.style.display = "none";
  let N = document.getElementById("NumberId2").value;
  console.log("Valor del campo: ", N);

  if (!isNaN(N)) {
    price[q].innerHTML = `${N}$`;
    ourArray.push(N);
    ourArray2.push(q);
    window.localStorage.setItem("ourarraykey", JSON.stringify(ourArray));
    window.localStorage.setItem("ourarraykey2", JSON.stringify(ourArray2));
  } else {
    if (band == 0) {
      presentacion[q].innerHTML = `${N}`;
      ourArray3.push(N);
      ourArray4.push(q);
      window.localStorage.setItem("ourarraykey3", JSON.stringify(ourArray3));
      window.localStorage.setItem("ourarraykey4", JSON.stringify(ourArray4));
    } else if (band == 1) {
      sabor[d].innerHTML = `${N}`;
      ourArray5.push(N);
      ourArray6.push(d);
      window.localStorage.setItem("ourarraykey5", JSON.stringify(ourArray5));
      window.localStorage.setItem("ourarraykey6", JSON.stringify(ourArray6));
    }
  }

  document.getElementById("NumberId2").value = " ";
});
/************************************************************************************* */
//create CSV file data in an array
var csvFileData = [
  ["Alan Walker", "Singer"],
  ["Cristiano Ronaldo", "Footballer"],
  ["Saina Nehwal", "Badminton Player"],
  ["Arijit Singh", "Singer"],
  ["Terence Lewis", "Dancer"],
];

//create a user-defined function to download CSV file
function download_csv_file() {
  //define the heading for each row of the data
  var csv = "Presentacion, sabor\n";

  //merge the data with CSV
  mtx.forEach(function (row) {
    csv += row.join(", ");
    csv += "\n";
  });

  //display the created CSV data on the web browser
  //document.write(csv);

  var hiddenElement = document.createElement("a");
  hiddenElement.href = "data:text/csv;charset=utf-8," + encodeURI(csv);
  hiddenElement.target = "_blank";

  //provide the name for the CSV file to be downloaded
  hiddenElement.download = "Famous.csv";
  hiddenElement.click();
}
