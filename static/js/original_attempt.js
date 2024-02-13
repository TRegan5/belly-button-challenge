const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

let names = [];
let samples = [];
let metadata = [];

// Fetch JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
  names = Object.values(data.names);
  samples = Object.values(data.samples);
  metadata = Object.values(data.metadata);
});

// Select Test Subject ID No select id element
let SubjectID = d3.select('#selDataset');
names.forEach(name => {
    SubjectID
        .append('option').text(name)
        .property('value', name)
});

subject = names[0];
let sIndex = names.indexOf(subject);

function init() {
    let subjVals = {};
    for (i = 0; i < samples[sIndex].sample_values.length; i++) {
        subjVals.push({
            'values' : samples[sIndex].sample_values[i],
            'ids' : samples[sIndex].out_ids[i],
            'labels' : samples[sIndex].out_labels[i]
        });
    };
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
    Plotly.newPlot(data);
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
    let top10 = samples.filter(samples.id == subj);
        
};

init();