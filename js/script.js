// Nomino la lista dei numeri

let lista = document.querySelector("#lista")

// Creo la lista dei numeri
for (let i = 1; i <= 100; i++ ){
    console.log(i)

    // Se divisibile per 15 BuzzFizz
    if(i%15 == 0){
        let li = '<li id="item-' + i + '"> FizzBuzz' + '</li>'
    lista.innerHTML += li;
    }
    
    // Se è divisibile per 3 Fizz
    else if(i%3 == 0){
        let li = '<li id="item-' + i + '"> Fizz' + '</li>'
    lista.innerHTML += li;
    }
    
    // Se è divisibile per 5 Buzz
    else if(i%5 == 0){
        let li = '<li id="item-' + i + '"> Buzz' + '</li>'
    lista.innerHTML += li;
    }

    // Il resto
    else{
        let li = '<li id="item-' + i + '"> '+ i + '</li>'
        lista.innerHTML += li;
    }

  

    
}

