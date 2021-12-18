const result = document.getElementById('result');
const resultBtn = document.getElementById('resultBtn');
const initial = document.getElementById('initial').value;
const final = document.getElementById('final').value;

// resultBtn
// PERMITIR SOLO NÚMEROS EN EL INPUT TEXT
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
    let initial = document.getElementById('initial').value;
    let final = document.getElementById('final').value;

    if (initial === "" || final === "") return alert('Por favor, llena los campos');
    
    initial = parseInt(initial)
    final = parseInt(final)

    console.log(initial + final)
    
})


