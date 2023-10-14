function calcularMargem() {
    const nomeProduto = document.getElementById('nomeProduto').value;
    const precoVenda = parseFloat(document.getElementById('precoVenda').value);
    const custoUnitario = parseFloat(document.getElementById('custoUnitario').value);
    const custoFixo = parseFloat(document.getElementById('custoFixo').value);
    const comissao = parseFloat(document.getElementById('comissao').value);
    const outrasDespesas = parseFloat(document.getElementById('outrasDespesas').value);
    const imposto = parseFloat(document.getElementById('imposto').value);
    const lucroDesejado = parseFloat(document.getElementById('lucroDesejado').value);

    if (nomeProduto && precoVenda && custoUnitario && custoFixo && comissao && outrasDespesas && imposto && lucroDesejado) {
        const custoTotal = custoUnitario + custoFixo + comissao + outrasDespesas;
        const margemDesejada = (lucroDesejado / 100) * (precoVenda - custoTotal);
        const precoMinimo = custoTotal + margemDesejada;
        const margemDeContribuicao = (precoVenda - custoTotal).toFixed(2).replace('.', ',');
        const margemPercentual = ((precoVenda - custoTotal) / precoVenda * 100).toFixed(2).replace('.', ',');
        const precoVendaFormatado = precoVenda.toFixed(2).replace('.', ',');

        document.getElementById('resultadoNomeProduto').textContent = nomeProduto;
        document.getElementById('resultadoMargemContribuicao').textContent = margemDeContribuicao;
        document.getElementById('resultadoMargemPercentual').textContent = margemPercentual;
        document.getElementById('resultadoPrecoVenda').textContent = precoVendaFormatado;
        document.getElementById('resultadoPrecoMinimo').textContent = precoMinimo.toFixed(2).replace('.', ',');

        const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
        myModal.show();
    } else {
        alert("Preencha todos os campos!");
    }
}

function limparCampo() {
    document.getElementById('nomeProduto').value = '';
    document.getElementById('precoVenda').value = '';
    document.getElementById('custoUnitario').value = '';
    document.getElementById('custoFixo').value = '';
    document.getElementById('comissao').value = '';
    document.getElementById('outrasDespesas').value = '';
    document.getElementById('imposto').value = '';
    document.getElementById('lucroDesejado').value = '';
    document.getElementById('resultadoNomeProduto').textContent = '';
    document.getElementById('resultadoMargemContribuicao').textContent = '';
    document.getElementById('resultadoMargemPercentual').textContent = '';
    document.getElementById('resultadoPrecoVenda').textContent = '';
    document.getElementById('resultadoPrecoMinimo').textContent = '';
}
