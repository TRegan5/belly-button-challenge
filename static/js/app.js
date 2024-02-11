const url = 'https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json';

// Promise Pending
//const dataPromise = d3.json(url);
//console.log('Data Promise: ', dataPromise);

var names;
var samples;
var metadata;

// Fetch the JSON data and console log it
d3.json(url).then(function(data) {
  console.log(data);
  names = Object.values(data.names);
  samples = Object.values(data.samples);
  metadata = Object.values(data.metadata);
});

// Select Test Subject ID No select id element
let SubjectID = d3.select('#selDataset');
//SubjectID.text(names => names).property('value', names => names);
names.forEach(name => {
    SubjectID
        .append('option').text(name)
        .property('value', name)
});