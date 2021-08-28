// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// Se declara la variable tbody. Se usa "d3.select" para decirle a JS que busque las tags <tbody> en el HTML
var tbody = d3.select("tbody");

// Se va a construir una tabla
// tbody.html(" ") le dice a JS que use una cadena vacía cuando cree la tabla. "tbody.html" hace referencia a la tabla en HTML

function buildTable(data) {
  //Clear out any existing data
    tbody.html("");
//Loop through each object in the data and append rows and cells for each value in the row
//data= el objeto que hace referencia a los datos que se van a importar
//dataRow= el parámetro que será usado como valor cuando la función sea llamada
    data.forEach((dataRow) => {
    //Append a row to the HTML table
      let row = tbody.append("tr");
      //Loop through each field in the dataRow and add
      //each value from the object into a cell (td)
      Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
      }
    );
  });
}
  

  