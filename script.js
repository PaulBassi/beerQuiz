let counter = {
    corona: 0,
    hoegaarden: 0,
    stella: 0,
    guinness: 0
}


console.log(counter);

const results = {
    corona: {
        description: `Have a Corona!`
    },
    hoegaarden: {
        description: `Have a Hoegaarden!`
    },
    Stella: {
        description: `Have a Stella!`
    },
    Guinness: {
        description: `Have a Guinness!`
    }
}
console.log(results);


$(function () {

    $('.start').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('.quizIntro').hide();
        $('question1').fadeIn();
    });

    $(function () {

    $('.start').on('click', function (e) {
        e.stopPropagation();
        e.preventDefault();

        $('.question1').hide();
        $('question2').fadeIn();
    }); //end of button reset


    $('#beer-form').on('submit', function (e) {
        // e.stopPropagation();
        e.preventDefault();
        // console.log("ready!");
        // console.log(season);
        //
        const season = $('input[name=season]:checked').val();        
        const food = $('input[name=food]:checked').val();
        const activity = $('input[name=activity]:checked').val();
        const where = $('input[name=where]:checked').val();
        console.log(season, food, activity, where);

        let userInput = [
            season, food, activity, where
        ]

        //this is to loop through the number of questions and updates the counter
        for (let i = 0; i < userInput.length; i++) {
        if (userInput[i] === 'corona') {    
            counter.corona++;
        }    
        else if (userInput[i] === 'hoegaarden') 
        {
            counter.hoegaarden++;
        }
        else if (userInput[i] === 'stella') 
        {
            counter.stella++;
        }
        else if (userInput[i] === 'guinness') {
            counter.guinness++;
        }
        // console.log(counter.corona);
        }


        let maxScore = 0;
        let beerBrand = "";

        for(let key in counter){
            //if comparison 
            if(maxScore < counter[key]){
                beerBrand = key;
                maxScore = counter[key];
            }
        }
        
        console.log(`Beer brand: ${beerBrand}`);
        console.log(`Associated score: ${maxScore}`);

        //prints result to page
        $('.result').html(`${beerBrand}`)
        




    });//end of form submit
});//end of document ready