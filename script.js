// script.js

function calcularMargem() {
    const precoVenda = parseFloat(document.getElementById('precoVenda').value);
    const custoUnitario = parseFloat(document.getElementById('custoUnitario').value);
    
    const margemDeContribuicao = (precoVenda - custoUnitario).toFixed(2);
    const margemPercentual = (((precoVenda - custoUnitario) / precoVenda) * 100).toFixed(2);
    
    document.getElementById('resultadoMargemContribuicao').textContent = margemDeContribuicao;
    document.getElementById('resultadoMargemPercentual').textContent = margemPercentual;
}

function limparCampo(){
    document.getElementById('precoVenda').value = '';
    document.getElementById('custoUnitario').value = '';
    document.getElementById('resultadoMargemContribuicao').textContent = '';
    document.getElementById('resultadoMargemPercentual').textContent = '';
}