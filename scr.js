document.getElementById('meuBotao').addEventListener('click', fazerRequisicao);

function fazerRequisicao() {
    // URL para a qual você deseja fazer a requisição GET
    var url = 'https://tasks-api-znh6.onrender.com/tasks';

    // Fazendo a requisição GET usando o método fetch
    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log('Dados recebidos:', data);
            // Aqui você pode realizar ações com os dados recebidos
        })
        .catch(error => console.error('Erro na requisição:', error));
}
