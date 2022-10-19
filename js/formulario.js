$(document).ready(function(){
    $('.btn').click(function(e){
        e.preventDefault()

        var nome = $('#NOME').val()
        var idade = $('#IDADE').val()

        var mensagem = 'Seja Bem Vindo(a), '+nome+', sua idade é '+idade

        $('#mensagem').append(mensagem)

        $('#NOME').val('')
        $('#IDADE').val('')

        $('#NOME').focusin(function(){
            $('#mensagem').empty()
        })
    })
})