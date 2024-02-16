# belly-button-challenge
## GWU Bootcamp Module 14 Challenge
Code repository on GitHub at https://github.com/TRegan5/belly-button-challenge

App deployed on GitHub Pages at https://tregan5.github.io/belly-button-challenge/

### Assignment Steps
#### 1. Import samples.json from given url using the D3 library
Experienced some initial difficulties accessing properly stored data. Resolved by nesting various functions on data within data promises. 

#### 2. Create horizontal bar chart of top 10 OTUs
I had some initial difficulty managing the data. I realized that the lists of otu_ids, sample_ids, and otu_labels were not directly linked, other than being stored within the samples array. After too much time spent trying to create dictionaries of joined data and accessing their values for comparison, I realized that the sample_values for each sample were provided already sorted in ascaending order and good thus avoid this more difficult manipulation. 
#### 3. Create bubble chart displaying each sample
The bubble chart required a little research into the Plotly documentation for formatting and setup. 
#### 4. and 5. Display sample metadata, showing each key-value pair
I was able to build the metadata display mostly from class instruction, capturing and updating html text elements. 
#### 6. Update all plots when new sample selected from dropdown
I was able to update the data based on a change to selection in the dropdown menu mostly from class instruction, then simply passed that new value to the respective data visualization functions (topTenOTUs, bubbleChart, and demoInfo).

#### 7. Deploy app to free static page hosting service
App may be accessed at https://tregan5.github.io/belly-button-challenge/

### Resources Used
How to assign values to drop down list in d3: https://stackoverflow.com/questions/43121679/how-to-append-option-into-select-combo-box-in-d3

Instructor Carlos Arguello asnwered a question during Office Hours to assist with formatting the text for Demographic Info; because I was passing script formatting, I should use d3.html() as opposed to simply .text.

Classmate Reed Erickson shared the method for matching the 'Earth' colorscale for the bubble chart to that shared as an example in the assignment, which she discovered in the Plotly documentation. 