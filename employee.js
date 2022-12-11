let url = "https://nagubandiudayalaxmi.github.io/jsondata/employee.json";
let out = "";
fetch(url, {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    //"Access-Control-Allow-Credentials": "true",
  },
  body: JSON.stringify(),
})
  .then((res) => res.json())
  .then(function (data) {
    console.log(typeof data);
    console.log(data);
    let out = "";
    for (let i of data) {
      out += `
      <tr>
      <td>${i.id}</td>
      <td>${i.employeeName}</td>
      <td>${i.salary}</td>
      <td>${i.month}</td>
      </tr>`;
    }
    document.getElementById("output").innerHTML = out;
  })
  .catch((error) => console.log("Something went wrong: ", error));
