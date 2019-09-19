// from data.js
var tableData = data;

// YOUR CODE HERE!
// hook into the button
d3.selectAll("#filter-btn").on("click", handleClick);

// create function to build table
function buildtable(UFOdata) {
    var tbody = d3.select("tbody");
    
    tbody.html("");

    UFOdata.forEach(row => {
        //console.log(row);
        var tr = tbody.append("tr");

        Object.values(row).forEach(cell => {
           var sight = tr.append("td");
           sight.text(cell);
         });

    });
}

// // call the build table function with non filtered data

function handleClick() {
    var date = d3.select("#datetime").property("value");
    
    var outThere = tableData;

    if (date) {
        outThere = outThere.filter( ufo => ufo.datetime === date);
    };

    buildtable(outThere)
};

buildtable(tableData);

