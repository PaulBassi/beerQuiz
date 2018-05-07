//new object called counter that keeps track of how many user answers corespond to their respective beers

let counter = {
    ace: 0,
    mgd: 0,
    pabst: 0,
    heineken: 0
}


console.log(counter);

//object called results that stores beer names and their corresponding descriptions

const results = {
    ace: {
        description: `Have a Corona!`
    },
    mgd: {
        description: `Have a Hoegaarden!`
    },
    pabst: {
        description: `Have a Stella!`
    },
    heineken: {
        description: `Have a Guinness!`
    }
}
console.log(results);


$(function () {

    //hides all questions at beginning
    $('.questionWrapper').hide();
    $('.yourBeer').hide();
    
    //once start quiz button is clicked, hide quizIntro, show question1
    $('.start').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        

        $('.quizIntro').hide();
        $('.question1').fadeIn();
    });

    //once start quiz button is clicked, hide question1, show question2
    $('.next1').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('.question1').hide();
        $('.question2').fadeIn();
    });

    //once start quiz button is clicked, hide question2, show question3
    $('.next2').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('.question2').hide();
        $('.question3').fadeIn();
    });

    //once start quiz button is clicked, hide question3, show question4
    $('.next3').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('.question3').hide();
        $('.question4').fadeIn();
    });

    //once start quiz button is clicked, hide question3, show question4
    $('.next4').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('.question4').hide();
        $('.question5').fadeIn();
    });

    
    


    $('#beer-form').on('submit', function (e) {
     
        //once start quiz button is clicked, hide question4, show winning beer, 
        e.preventDefault();
        $('.question5').hide();
        $('.yourBeer').fadeIn();
        

        //variables made for each question, records the value of the users answer
        const where = $('input[name=where]:checked').val();
        const food = $('input[name=food]:checked').val();
        const transportation = $('input[name=transportation]:checked').val();     
        const fashion = $('input[name=fashion]:checked').val();
        const drinkingBuddy = $('input[name=drinkingBuddy]:checked').val();
        
        console.log(where, food, transportation, fashion, drinkingBuddy);

        let userInput = [
            where, food, transportation, fashion, drinkingBuddy
        ]

        
        for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === 'ace') {    
            counter.ace++;
        }    
        else if (userInput[i] === 'mgd') 
        {
            counter.mgd++;
        }
        else if (userInput[i] === 'pabst') 
        {
            counter.pabst++;
        }
        else if (userInput[i] === 'heineken') {
            counter.heineken++;
        }
        }

        //declare maxScore and corresponding beerBrand variable
        let maxScore = 0;
        let beerBrand = "";

        //for in loop starts with maxScore of 0, if maxScore is less than value of key(attribute) in counter object, then key value becomes new maxScore, and beerBrand equals the corresponding key
        for(let key in counter){ 
            if(maxScore < counter[key]){
                beerBrand = key;
                maxScore = counter[key];
            }
        }
        console.log(`Beer brand: ${beerBrand}`);
        console.log(`Associated score: ${maxScore}`);

        //empty array to store multiple winners if tied
        const winners = [];

        //for in loop to push tied keys into the winners array
        //if maxScore = key value, then pushes to winners
        for(let key in counter){
            if (maxScore === counter[key]) {
                winners.push(key);  
            }
        }

        console.log(winners);

        //new variable called randomBeer is made
        //uses Math.random to return a random value based on the index numbers of items in the winners array
        const randomBeer = winners[Math.floor(winners.length * Math.random())];

        console.log(randomBeer);


        //sets randomBeer equal to finalBeer and has corresponsing 
        if (randomBeer == 'ace') { 
            finalBeer = "Ace Hill Pilsner",
            finalBeerWhy = "You're a minimalist, you like simplicity, Ace Hill is uncomplicated in the best ways and leads with earthy aromas. Enjoy the steadiness of a refined meidum-bodied beer from start to finish. It's easy drinking from here on out." };

        if (randomBeer == 'mgd') { 
            finalBeer= "Miller Genuine Draft", 
            finalBeerWhy = "Your attitude says it all, and your beer should keep up with your street savvy. Underpinned with light citrus notes and smooth malt aromas, it's light but packs a punch and that's just what you need after a long day. Enjoy a refreshing cold one." };

        if (randomBeer == 'pabst') { 
            finalBeer = "Pabst Blue Ribbon", 
            finalBeerWhy = "You're known for being outside the box and redefining youself. Nothing is more alternative than the delicate malt aromas spiced with hints of banana topped off with a golden frothy mousse that's oh so refreshing. So you should have a Pabst" };

        if (randomBeer == 'heineken') {
            finalBeer ="Heineken", 
            finalBeerWhy = "You want your beer as reliable as you are in the board room. Take a sip of a time honoured classic and revel in the fact that you've made another solid deal once again. So, go ahead, enjoy your Heineken." 
        };


        $('.finalBeer').html(`${finalBeer}`);
        
        $('.beerPara').html(`You should have a ${finalBeer}! ${finalBeerWhy}`)
        // console.log(randomBeer + result2);

        //  < !--TWITTER WIDGET -->
        window.twttr = (function (d, s, id) {
            var js, fjs = d.getElementsByTagName(s)[0],
                t = window.twttr || {};
            if (d.getElementById(id)) return t;
            js = d.createElement(s);
            js.id = id;
            js.src = "https://platform.twitter.com/widgets.js";
            fjs.parentNode.insertBefore(js, fjs);

            t._e = [];
            t.ready = function (f) {
                t._e.push(f);
            };
            return t;
        }(document, "script", "twitter-wjs"));





        $('.reset').on('click', function (e) {
            e.preventDefault();
            console.log('reset');
            window.location.reload(true);

        }); //FORM RESET
        
    
    });//end of form submit
});//end of document ready

