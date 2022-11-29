let testData = [100, 110.00000000000001, 121.00000000000003, 133.10000000000005, 146.41000000000008, 161.0510000000001, 177.15610000000012, 194.87171000000015, 214.3588810000002, 235.79476910000022, 259.37424601000026, 285.3116706110003, 313.84283767210036, 345.2271214393104, 379.74983358324147, 417.7248169415656, 459.49729863572225, 505.4470284992945, 555.991731349224, 611.5909044841464, 672.7499949325611, 740.0249944258172, 814.027493868399, 895.430243255239, 984.973267580763];

// function that creates a graph given an array of values
function graphValues(values) {
    const graphDiv = document.getElementById("graph");

    const width = 100 / values.length;
    const maxHeight = Math.max(...values);

    for(const value of values){
        const newValue = document.createElement("div");
        const height = ((value / maxHeight) * 100);
        newValue.setAttribute("style", `width:${width}%; height:${height}%;`);
        newValue.classList.add("graphBar");

        graphDiv.appendChild(newValue);
    }
        
}

graphValues(testData);