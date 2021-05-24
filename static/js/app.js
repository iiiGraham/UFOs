// from data.js
const tableData = data;

// get table references
var tbody = d3.select("tbody");

function buildTable(data) {
  // First, clear out any existing data
  tbody.html("");
  // Next, loop through each object in the data
  // and append a row and cells for each value in the row
  data.forEach((dataRow) => {
    // Append a row to the table body
    let row = tbody.append("tr");

    // Loop through each field in the dataRow and add
    // each value as a table cell (td)
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
    });
  });
}

// 1. Create a variable to keep track of all the filters as an object.
var filters = Object()

  // 3. Use this function to update the filters.
  //date, city, state, country, shape 
function updateFilters() {

  // set variables for the filter values
  
    // 4a. Save the element that was changed as a variable.
    // get the element from the element that triggered the listen event
    let  newFilter = d3.select(this);
    console.log(newFilter)
    // 4b. Save the value that was changed as a variable.
    // let updatedValue = this.value; 
    let value = newFilter.property("value");
    console.log(value)
    // 4c. Save the id of the filter that was changed as a variable.
    let key = newFilter.attr("id");
    console.log(key) 
    // 5. If a filter value was entered then add that filterId and value
    // to the filters list. Otherwise, clear that filter from the filters object.
    // filters.id = value // format to add key value pair to an object
    if (! (value === "")) {
      filters[key] = value
      console.log(filters)
    }

    else {
      try {
        delete filters[key]
        console.log(filters)
      } catch (error) {console.log(error)}
    }
  
    // 6. Call function to apply all filters and rebuild the table
    filterTable();
};

// 7. Use this function to filter the table when data is entered.
function filterTable() {
  
  // 8. Set the filtered data to the tableData.
  let filteredData = tableData;
  // console.log(filteredData)
  // 9. Loop through all of the filters and keep any data that
  // matches the filter values

  Object.entries(filters).forEach(([key, value]) => {

    filteredData = filteredData.filter(row => row[key] === value)
  });

  // 10. Finally, rebuild the table using the filtered data
  buildTable(filteredData);
}

// capture any changes to our input tags and send the target that was changed to the printValue function
d3.selectAll("input").on("change", updateFilters)

// Build the table when the page loads
buildTable(tableData);  
  
// https://stackoverflow.com/questions/42173416/add-html-input-value-to-the-d3js - this has some information on accessors and why variables would be undefined. 