const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

let names = [];
let metadata = [];
let samples = [];
let sample = [];
let testSub = [];
let sVals = [];

// Fetch JSON data and console log it
d3.json(url).then((data) => {
    console.log(data);
    names = data.names;
    console.log(names);
    metadata = data.metadata;
    console.log(metadata);
    samples = data.samples;
    console.log(samples);

    

    testSub = (names[0]);
    console.log(testSub);
    sample = samples[testSub];
    
    //for (i = 0; i < 153; i++) {
      //  sVals.append(//{
            //'sample_values' : 
        //    sample[[sample.id = testSub]].sample_values[i],
            //'otu_ids' : 
          //  sample[sample.id = testSub].otu_ids[i],
            //'labels' : 
            //sample[sample.id = testSub].otu_labels[i]
        //}
        //)
    //}
});



//let id = names[0];
//let sIndex = names.indexOf(subject);

function init() {
    
    d3.json(url).then((data) => {
        names = data.names;
        console.log(names);
    
        // Select Test Subject ID No select id element
        let dropdown = d3.select('#selDataset');
        names.forEach(name => {
            dropdown.append('option').text(name).property('value', name)
        });
    });
}

function topTenOTUs(id) {
    let sample = samples[0];
    let sVals = [];
    for (i = 0; i < sample.length; i++) {
        sVals.append(//{
            //'sample_values' : 
            sample.sample_values,
            //'otu_ids' : 
            sample.otu_ids,
            //'labels' : 
            sample.otu_labels
        //}
        )
    };    
    console.log(sVals);
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