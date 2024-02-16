const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

//let names = [];
let metadata = [];
let sample = [];
let sVals = [];


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
        console.log(`Names: ${names}`);
        dropdown.on('change', updatePlotly);
    });
}

function topTenOTUs(sIdNo) {
    console.log(sIdNo);
    d3.json(url).then((data) => {
        sample = data.samples;
        console.log(sample);
        let subject = sample.filter((subj) => subj.id == sIdNo)[0];
        console.log(subject);
        let sVals = subject.sample_values.slice(0, 10).reverse();
        console.log(`sVals: ${sVals}`);
        let sIDs = subject.otu_ids.slice(0, 10).reverse();
        console.log(`sIDs: ${sIDs}`);
        let sLabels = subject.otu_labels.slice(0, 10).reverse();
        console.log(`sLabels: ${sVals}`);
        sLabels = sLabels;
        bar_data = [{
            x : sVals,
            y : sIDs.map(id => 'OTU' + id),
            text : sLabels,
            type : 'bar',
            orientation : 'h'
        }];
        Plotly.newPlot('bar', bar_data);
    });
};

function bubbleChart(sIdNo) {
    console.log(sIdNo);
    d3.json(url).then((data) => {
        sample = data.samples;
        console.log(sample);
        let subject = sample.filter((subj) => subj.id == sIdNo)[0];
        let sIDs = subject.otu_ids;
        let sVals = subject.sample_values;
        let s_labels = subject.otu_labels;
        bubble_data = [{
            x : sIDs,
            y : sVals,
            mode : 'markers',
            marker : {
                size : sVals,
                color : sIDs,
                colorscale : 'Earth'
            },
            text : s_labels
        }];
        Plotly.newPlot('bubble', bubble_data);
    });
};

function demoInfo(sIdNo) {
    let demoWindow = d3.select('#sample-metadata');
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
    let subject = dropdownMenu.property('value');
    // Update data displays with new selection from dropdown
    topTenOTUs(subject);
    console.log(subject);
    bubbleChart(subject);
    demoInfo(subject);
};

init();