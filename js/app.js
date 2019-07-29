// from data.js
var tableData = data;

// YOUR CODE HERE!

// function Cali(event){
//     return event.Cali;
// }
// var Cali = data.filter(event => event.ca);
// console.log(Cali);
// console.log(`Players not on team: ${roster.length - notCut.length}`);

// console.log(data);

// function cali(event) {
//     if (event.state === 'ca') {
//             return true;
//     }   else {
//             return false;
//     }
// }

// var cali = data.filter(cali);
// console.log(cali);
// }
// Select the button
var button = d3.select("#filter-btn");

button.on("click", function() {

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

//   console.log(inputValue);
//   console.log(tableData);

  var filteredData = tableData.filter(event => event.datetime === inputValue);
        // return  tableData.inputValue == datetime;
  console.log(filteredData);

// data.forEach((weatherReport) => {
  var querydata = filteredData.forEach(function(event) {
        console.log(event);
        var row = d3.select("tbody").append("tr");
        Object.entries(event).forEach(function([key, value]) {
                console.log(key, value);
                // Append a cell to the row for each value
                // in the weather report object
                var cell = row.append("th");
                cell.text(value);
        //   var cell = row.append("th");
        //   cell.text(value);
        });  
  });       
});