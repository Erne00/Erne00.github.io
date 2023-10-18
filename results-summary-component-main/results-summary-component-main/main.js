window.addEventListener("load", async function() {

    // Read json file
    let response = await fetch('data.json');
    let data = await response.json();
    
    let icon = document.querySelectorAll('img');
    let category = document.querySelectorAll('.category');
    let score = document.querySelectorAll('.score');
    var cont = 0;

    // Put into html file the data from the json file
    for (var i = 0; i < data.length; i++) {
        icon[i].src = data[i]['icon'];
        category[i].innerHTML = data[i]['category'];
        score[i].innerHTML = data[i]['score'];
        cont += parseInt(score[i].innerHTML);
    }

    // Calculate the final result
    let result = document.querySelector('h1');
    result.innerHTML = parseInt(cont / 4);

    let congrats = document.querySelector('#paragraph h2');
    let compare = document.querySelector('#comp');
    
    // Evaluate the final result
    if (parseInt(result.innerHTML) > 65) {
        congrats.innerHTML = 'Great';
        compare.innerHTML = 'higher than';

    }else if (parseInt(result.innerHTML) === 65) {
        congrats.innerHTML = 'Good';
        compare.innerHTML = '';
    
    }else {
        congrats.innerHTML = 'Not good';
        compare.innerHTML = 'lower than';
    }

});
