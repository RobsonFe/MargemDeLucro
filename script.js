// Função para formatar dinheiro
function formatarDinheiro(valor) {
    valor = valor.replace(/[^\d,.]/g, ''); // Remove caracteres não numéricos, exceto ',' e '.'
    
    // Remove vírgulas extras, caso existam, e formata para até duas casas decimais
    valor = valor.replace(/,+/g, ',');
    const partes = valor.split('.');
    if (partes[1] && partes[1].length > 2) {
        partes[1] = partes[1].substring(0, 2);
    }
    valor = partes.join('.');
    
    // Adiciona o símbolo de moeda (R$)
    valor = "R$" + valor;

    return valor;
}

// Função para formatar porcentagem
function formatarPorcentagem(valor) {
    valor = valor.replace(/[^\d,.]/g, ''); // Remove caracteres não numéricos, exceto ',' e '.'
    
    // Remove vírgulas extras, caso existam, e formata para até duas casas decimais
    valor = valor.replace(/,+/g, ',');
    const partes = valor.split('.');
    if (partes[1] && partes[1].length > 2) {
        partes[1] = partes[1].substring(0, 2);
    }
    valor = partes.join('.');
    
    // Adiciona o símbolo de porcentagem (%)
    valor = valor + '%';

    return valor;
}

// Função para formatar dinheiro
function formatarDinheiroParaNumero(valor) {
    // Remove todos os caracteres não numéricos
    const numeroFormatado = valor.replace(/[^\d,.]/g, '').replace(',', '.');
    return parseFloat(numeroFormatado);
}

// Função para calcular o preço de venda
function calcularPrecoDeVenda() {
    // Entradas
    const nomeProduto = document.getElementById('nomeProduto').value;
    const custoUnitario = formatarDinheiroParaNumero(document.getElementById('custoUnitario').value);
    const frete = formatarDinheiroParaNumero(document.getElementById('frete').value);
    const imposto = formatarDinheiroParaNumero(document.getElementById('imposto').value);
    const lucroDesejado = formatarDinheiroParaNumero(document.getElementById('lucroDesejado').value);
    const custosFixos = formatarDinheiroParaNumero(document.getElementById('custosFixos').value);
    const custosVariaveis = formatarDinheiroParaNumero(document.getElementById('custosVariaveis').value);

    // Calcula o custo total (CT)
    const custoTotal = custoUnitario + frete + (custoUnitario * (imposto / 100));

    // Calcula a margem de lucro desejada em decimal (40% -> 0.40)
    const margemLucroDesejada = lucroDesejado / 100;

    // Calcula o custo total, incluindo o lucro desejado
    const custoTotalComLucro = custoTotal / (1 - margemLucroDesejada);

    // Calcula o custo total considerando os custos fixos e variáveis
    const custoTotalComCustos = custoTotalComLucro / (1 - (custosFixos + custosVariaveis) / 100);

    // Exibe o resultado no modal
    document.getElementById('modalNomeProduto').textContent = nomeProduto;
    document.getElementById('modalResultadoPrecoDeVenda').textContent = "R$" + custoTotalComCustos.toFixed(2).replace('.', ',');

    // Abre o modal
    const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
    myModal.show();
}



function limparCampos() {
    document.getElementById('nomeProduto'). value = '';
    document.getElementById('custoUnitario').value = '';
    document.getElementById('frete').value = '';
    document.getElementById('imposto').value = '';
    document.getElementById('lucroDesejado').value = '';
    document.getElementById('custosFixos').value = '';
    document.getElementById('custosVariaveis').value = '';
    document.getElementById('resultadoPrecoDeVenda').textContent = '';
}

// Evento para limpar campos ao fechar o modal
const myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
myModal._element.addEventListener('hidden.bs.modal', function () {
  document.getElementById('nomeProduto').value = '';
  document.getElementById('custoUnitario').value = '';
  document.getElementById('frete').value = '';
  document.getElementById('imposto').value = '';
  document.getElementById('lucroDesejado').value = '';
  document.getElementById('custosFixos').value = '';
  document.getElementById('custosVariaveis').value = '';
  document.getElementById('modalResultadoPrecoDeVenda').textContent = '';
});