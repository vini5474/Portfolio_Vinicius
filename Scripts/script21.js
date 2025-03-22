function Cadastrar() {
    let nome = document.getElementById('inputNome').value.trim()
    let endereco = document.getElementById('inputEndereco').value.trim()
    let masculino = document.getElementById('m').checked
    let feminino = document.getElementById('f').checked
    let telefone = document.getElementById('inputTelefone').value.trim()
    let celular = document.getElementById('inputCelular').value.trim()
    let email = document.getElementById('inputEmail').value.trim()

    if (nome === "") {
        alert("Campo nome vazio")
        return
    }
    if (endereco === "") {
        alert("Campo endereço vazio")
        return
    }
    if (!masculino && !feminino) {
        alert("Selecione o gênero")
        return
    }
    if (telefone === "") {
        alert("Campo telefone vazio")
        return
    }
    if (celular === "") {
        alert("Campo celular vazio")
        return
    }
    if (email === "") {
        alert("Campo email")
        return
    }
    alert("Cadastro realizado com sucesso!")
}