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
};

// // call the build table function with non filtered data

function handleClick() {
    // var date = d3.selct("#datetime").property("value");
    // var City = d3.selct("#city").property("value");
    // var State = d3.selct("#state").property("value");
    // var Country = d3.selct("#country").property("value");
    // var Shape = d3.selct("#shape").property("value");



    var filterData = tableData;

    if (date) {
        filterData.filter( element => element.datetime === date);
    };
    // if (City) {
    //     filterData.filter( element => element.city === City);
    // };
    // if (State) {
    //     filterData.filter( element => element.state === State);
    // };
    // if (Country) {
    //     filterData.filter( element => element.country === Country);
    // };
    // if (Shape) {
    //     filterData.filter( element => element.shape === Shape);
    // };

    buildTable(filterData);
};

buildtable(tableData);

