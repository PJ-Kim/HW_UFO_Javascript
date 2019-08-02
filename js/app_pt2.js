// from data.js
var tableData = data;

// YOUR CODE HERE!
// var e = document.getElementById("date_dd");
// var strUser = e.options[e.selectedIndex].value;

// var e = document.getElementById("elementId");
// var value = e.options[e.selectedIndex].value;
// var text = e.options[e.selectedIndex].text;


function buildtable(builddata) {
  d3.select("tbody").html("")
  // for (var i = 0; i < builddata.length; i ++ ){
  //   builddata[]
  // }
  builddata.forEach(function(event) {
    console.log(event);
    var row = d3.select("tbody").append("tr");
    Object.entries(event).forEach(function([key, value]) {
            console.log(key, value);
            // Append a cell to the row for each value
            // in the weather report object
            var cell = row.append("th");
            cell.text(value);
    });  
});
}
buildtable(tableData)

  // Get the value property of the input element
  var button = d3.select("#filter-btn");

  button.on("click", function() {
    d3.event.preventDefault();
  
    // Select the input element and get value of HTML - datetime 
    var inputElement = d3.select("#datetime");
    var inputValue = inputElement.property("value");

    // Select the input element and get value of HTML - city 
    var inputElementcity = d3.select("#cityx");
    var inputValuecity = inputElementcity.property("value");
    
    // Select the input element and get value of HTML - state
    var inputElementstate = d3.select("#state");
    var inputValuestate = inputElementstate.property("value");

    // Select the input element and get value of HTML - country 
    var inputElementcountry = d3.select("#country");
    var inputValuecountry = inputElementcountry.property("value");

    // Select the input element and get value of HTML - shape 
    var inputElementshape = d3.select("#shape");
    var inputValueshape = inputElementshape.property("value");

  
  //   console.log(inputValue);
  //   console.log(tableData);
  
    var filteredData = tableData.filter(event => event.datetime === inputValue);
    var filteredData2 = filteredData.filter(event => event.city === inputValuecity);
    var filteredData3 = filteredData2.filter(event => event.state === inputValuestate);
    var filteredData4 = filteredData3.filter(event => event.country === inputValuecountry);
    var filteredData5 = filteredData4.filter(event => event.shape === inputValueshape);
          // return  tableData.inputValue == datetime;
    console.log(filteredData);
   buildtable(filteredData5)
  });
// $('.#table-head').on('change',function(){
//   $('.#table-head').each(function(){

//       var filterColumn = $(filteredData).data('column-filter');
//       var filterValue = $(filteredData).val();

//       if($(this).is('[multiple]'])){
//           var filterValuesExpression = filterValue.join('|');
//           dataTable.column(filterColumn).search(filterValuesExpression, true, false );
//       }else{
//           dataTable.column(filterColumn).search(filterValue);
//       }
//   });

//   dataTable.draw();
// });

// var e = filterData.getElementById("filter_test");
// var strUser = e.options[e.selectedIndex].value;
//   console.log(strUser)


// $('.table-filter').on('change',function(){
//   $('.table-filter').each(function(){

//       var filterColumn = $(this).data('column-filter');
//       var filterValue = $(this).val();

//       if($(this).is('[multiple]'])){
//           var filterValuesExpression = filterValue.join('|');
//           dataTable.column(filterColumn).search(filterValuesExpression, true, false );
//       }else{
//           dataTable.column(filterColumn).search(filterValue);
//       }
//   });

  // dataTable.draw();
// });