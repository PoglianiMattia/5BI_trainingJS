document.getElementById("btn1").addEventListener("click", () => {
  console.log("click");
  var table = document.getElementById("table");
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  cell1.innerHTML = 2;
  cell2.innerHTML = document.getElementById("N1").value;
  cell3.innerHTML = "+";
  cell4.innerHTML = document.getElementById("N2").value;
  cell5.innerHTML =
    document.getElementById("N1").value - -document.getElementById("N2").value;
});
