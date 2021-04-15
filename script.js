function imc() {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value; 
    const result = document.getElementById('result');

    let imc = weight / (height * height);

    if (name === '') {
        result.innerText = "Preencha o campo NOME";
    } else if (height === '') { 
        result.innerText = "Preencha o campo ALTURA";
    } else if (weight === '') {
        result.innerText = "Preencha o campo PESO";
    } else {
        result.innerText = `Olá ${name.toUpperCase()}! Seu IMC é de ${imc.toFixed(1)}`;
    }
}
