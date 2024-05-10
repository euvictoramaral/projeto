function previewImage(event) {
    var reader = new FileReader();
    reader.onload = function() {
        var preview = document.getElementById('preview');
        preview.src = reader.result;
        preview.style.display = 'block';
    };

reader.readAsDataURL(event.target.files[0]);
}

document.getElementById('formulario-atualizacao').addEventListener('submit', function(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var idade = document.getElementById('idade').value;
    var rua = document.getElementById('rua').value;
    var bairro = document.getElementById('bairro').value;
    var cidade = document.getElementById('cidade').value;
    var estado = document.getElementById('estado').value;
    var biografia = document.getElementById('biografia').value;
    
    document.querySelector('h2').innerText = nome;
    document.querySelector('p:nth-of-type(1)').innerText = 'Idade: ' + idade;
    document.querySelector('p:nth-of-type(2)').innerText = 'Rua: ' + rua;
    document.querySelector('p:nth-of-type(3)').innerText = 'Bairro: ' + bairro;
    document.querySelector('p:nth-of-type(4)').innerText = 'Cidade: ' + cidade;
    document.querySelector('p:nth-of-type(5)').innerText = 'Estado: ' + estado;
    document.querySelector(' p:nth-of-type(6)').innerText = 'Biografia: ' + biografia;  

    document.getElementById('imagem-perfil').value = '';

});
