function comprar() {
    let tipo = document.getElementById('tipo-ingresso').value;
    let quantidadeCompra = parseInt(document.getElementById('qtd').value);
    let ingressosDisponiveis = parseInt(document.getElementById(`qtd-${tipo}`).textContent)

    if(quantidadeCompra <= 0){
        alert('Insira uma quantidade de ingressos válida.')
    } else{ 
        if(quantidadeCompra <= ingressosDisponiveis) {
            ingressosDisponiveis -= quantidadeCompra
            document.getElementById(`qtd-${tipo}`).textContent = ingressosDisponiveis
            alert('Compra realizada com sucesso!')
        } else {
            alert(`Quantidade de ingressos indisponíveis para ${tipo}`)
        }
    }
}
