// import data from data.js
// const keeps tableData always linked to the data page. The variable cannot eb reassigned or reused in the rest of the program. 
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to build table
function buildTable(data) {
    // this clears the data by referncing the table in html and setting the table body to "" or empty. Using an empty string is the standard way to clear data.
    tbody.html("");

    // loop through data with forEach. forEach only works with arrays. forEach uses a callback function. Callback functions are applied to each of the items in your array [list]. Callbacks can be anonymous, arrow functions, or named functions. 
    // connect to data.js and loop through each row in the data.js file
    data.forEach(dataRow => {
        // add a row to the table body. Using let only sets the variable within this function or block of code. If you used row outside of this it would not return the same result. 
        // this line says "find the table body tag <tbody> within the html code and add a <tr> inside the <tbody>"
        let row = tbody.append("tr");
        
        // objects in JS are like dictionaries. Object.values tells js to reference a singel object from the data.js file. Passing dataRow says add the value as a dataRow and forEach says that we want one object per row. Essentially we are going to put one object {dictionary} into one row of the table we are creating. 
        Object.values(dataRow).forEach((val) => {
            // append the data into a cell within the row we set up in line 18 <td> is table data in html
            let cell = row.append("td");
            // set the text in the cell to the value we get from each object. Should be a value for the key? Keys will be column headers?
            cell.text(val);
            //might need to change where these brackets are
        });
    });
}