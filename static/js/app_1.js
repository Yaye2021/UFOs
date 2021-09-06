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

//New function

function handleClick() {
  //Grab the datetime value from the filter
  let date = d3.select("#datetime").property("value");
  let filteredData = tableData;

  //Check to see if a date was entered and filter the data using that date
  if (date) {
    //Esta línea es la que se aplica para filtrar los datos de la tabla 
    //"show only the rows where the date is equal to the date filter we creatd above"
    filteredData = filteredData.filter(row => row.datetime === date);
  };
  
//Rebuild the table using the filtered data
//If no date is entered, the filtered data will just be the original tableData

  buildTable(filteredData);
};

//Listening for the event (when someone really makes a click)
//"#filter-btn" es el ID único para el botón en el HTML
//".on("click", handleClick)" se le dice a D3 que ejecute la función "handleClick" cuando filter-btn es clickeado
d3.selectAll("#filter-btn").on("click", handleClick);

//Once this function is called, it will create a basic table filled with row upon row of unfiltered data pulled straight from our array.
//Build the table when the page loads
buildTable(tableData);
