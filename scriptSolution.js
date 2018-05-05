const counterResults = [];
//This will push the results from the object counter into the empty array counterResults
for (let score in counter) {
    // console.log(counter[score]);
    counterResults.push([score, counter[score]]);
    console.log(`score ${score}`);
    console.log(`counter score ${counter[score]}`);


    console.log([score, counter[score]]);

    // console.log(counterResults);
}


// To return the counterResults in order of highest to lowest
counterResults.sort(function (a, b) {
    return b[1] - a[1];
});
console.log(counterResults);

// this gets the index number of the one with the most selections, the 4th index
const finalResult = counterResults[0];


//console.log(finalResult);
const finalFinalResult = finalResult;
// show results inside of results on html page, just the title of each
// $('section').append(${ counterResults });
$('.result').html(`<section class="result">${results[finalFinalResult].description}</section>`);