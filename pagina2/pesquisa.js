function digitar() {
    var NomeDigitado = document.getElementById('procurar').value.toLowerCase();
    var empresas = [...document.querySelectorAll('.empresas > div')];
    empresas.map((el) => {
        var nomeEmpresa = el.querySelector('p').textContent.trim().toLowerCase();
        if (nomeEmpresa.includes(NomeDigitado)) {
            el.style.display = 'block';
        } else {
            el.style.display = 'none';
        }
    });
}
