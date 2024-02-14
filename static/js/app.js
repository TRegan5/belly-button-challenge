const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

let names = [];
let metadata = [];
let samples = [];

// Fetch JSON data and console log it
d3.json(url).then((data) => {
    console.log(data);
    names = data.names;
    console.log(names);
    metadata = data.metadata;
    console.log(metadata);
    samples = data.samples;
    console.log(samples);

    // Select Test Subject ID No select id element
    let dropdown = d3.select('#selDataset');
    names.forEach(name => {
        dropdown.append('option').text(name).property('value', name)
    });

    let id = names[0];
    topTenOTUs(id);

});

console.log(data);


let id = names[0];
//let sIndex = names.indexOf(subject);

function init() {
    
    bar_data = [{
        //x : le_values,
        //y : samples[sIndex].,
        type : 'bar',
        orientation : 'h'
    }];
    bubble_data = [{
        //values : ,
        //labels : ,
        type : 'pie'
    }];
    //Plotly.newPlot(data);
};

function topTenOTUs(id) {
    let sample = samples[id];
    let sVals = [];
    for (i = 0; i < sample.length; i++) {
        sVals.append({
            'sample_values' : sample.sample_values,
            'otu_ids' : sample.otu_ids,
            'labels' : sample.otu_labels
        })
    };
    sVals.sort((a, b) => b.sample_values - a.sample_values);
    console.log(sVals);
};

function updatePlotly() {
    // Use D3 to select the dropdown menu
    let dropdownMenu = d3.select('#selDataset');
    // Assign the value of the dropdown menu option to a variable
    let dataset = dropdownMenu.property('value');
  
    // Initialize x and y arrays
    let values = [];
  
    
    // Note the extra brackets around 'x' and 'y'
    //Plotly.restyle("pie", "values", [values]);
};

function top_10_OTUs(subj) {
    //let top10 = samples.filter(samples.id == subj);
        
};

init();