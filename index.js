const result = document.getElementById('result');
const resultBtn = document.getElementById('resultBtn');

// resultBtn
// solo números en los inputs
const convert = (e) => {
    function justNumbers(k) {
      const key = k.keyCode || k.which;
      if (key >= 48 && key <= 57) {
        return true;
      } else {
        alert('Ingresar solo números');
        return false;
      }
    }
    if (!justNumbers(e)) {
      e.preventDefault();
    }
  }
  document.getElementById('initial').addEventListener('keypress', convert);
  document.getElementById('final').addEventListener('keypress', convert);

// OBTENER VALORES DE INPUT

resultBtn.addEventListener('click', () => {
    //obteniendo valores de inputs
    let initial = document.getElementById('initial').value;
    let final = document.getElementById('final').value;
    let primes = [];
    //no dejar campos vacios
    if (initial === "" || final === "") return alert('Por favor, llena los campos');

    //convertir a número
    initial = parseInt(initial)
    final = parseInt(final)
    
    // números primos inician en 2
    if(initial < 2) {
        initial = 2
    }

    for(let i = initial; i <= final; i++) {
        // 0 y 1 no son primos
        // if (i == 0 || i == 1) {
        //     return i;
        // }
        if(i % i == 0 && i % 1 == 0) {
          primes.push(i)
          document.getElementById('result').innerHTML = primes;
        }
        
    }
    
})



