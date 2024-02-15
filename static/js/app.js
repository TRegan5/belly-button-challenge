const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//let names = [];
let metadata = [];
let samples = [];
let testSub = [];
let sVals = [];

//let id = names[0];
//let sIndex = names.indexOf(subject);

function init() {
    
    d3.json(url).then((data) => {
        names = data.names;
        console.log(names);
        // Select Test Subject ID No select id element
        let dropdown = d3.select('#selDataset');
        names.forEach(name => {
            dropdown.append('option').text(name).property('value', name);
        });
        topTenOTUs(names[0]);
        console.log(names[0]);
        bubbleChart(names[0]);
        demoInfo(names[0]);

    });
}

function topTenOTUs(sIdNo) {
    console.log(sIdNo);
    let sample = [];
    d3.json(url).then((data) => {
        sample = data.samples;
        console.log(sample);
        let subject = sample.filter((subj) => subj.id == sIdNo)[0];
        console.log(subject);
        let sVals = subject.sample_values.slice(0, 10);
        let sIDs = subject.otu_ids.slice(0, 10);
        let s_labels = subject.otu_labels.slice(0, 10);
        bar_data = [{
            x : sVals,
            y : sIDs,
            text : s_labels,
            orientation : 'h'
        }];
        Plotly.newPlot('bar', bar_data);
    });
};

function bubbleChart(sIdNo) {
    console.log(sIdNo);
    let sample = [];
    d3.json(url).then((data) => {
        sample = data.samples;
        console.log(sample);
        let subject = sample.filter((subj) => subj.id == sIdNo)[0];
        let sIDs = subject.otu_ids.slice(0, 10);
        let sVals = subject.sample_values.slice(0, 10);
        let s_labels = subject.otu_labels.slice(0, 10);

        bubble_data = [{
            x : sIDs,
            y : sVals,
            mode : 'markers',
            marker : {
                size : sVals,
                color : sIDs
            },
            text : s_labels
        }];
        Plotly.newPlot('bubble', bubble_data);
        
    });
};

function demoInfo(sIdNo) {
    let demoWindow = d3.select('#sample-metadata');

    //console.log(sIdNo);
    //console.log(id);
    d3.json(url).then((data) => {
        metadata = data.metadata;
        console.log(metadata);
        let subject = metadata.filter((subj) => subj.id == sIdNo)[0];
        let demo_text = `id: ${subject.id}<br>
        ethnicity: ${subject.ethnicity}<br>
        gender: ${subject.gender}<br>
        age: ${subject.age}<br>
        location: ${subject.location}<br>
        bbtype: ${subject.bbtype}<br>
        wfreq: ${subject.wfreq}`;
        demoWindow.html(demo_text);
    });
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

init();