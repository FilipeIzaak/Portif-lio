function calcularParcelas(){
    const valor = parseFloat(document.getElementById('valor').value);
    const n = parseInt(Document.getElementById('valor').value);
    const jurosMensal = parseFloat(Document.getElementByID('jurosMensal').value);

      const resultadoDiv = document.getElementById('resultado');
      resultadoDiv.innerHTML = '';
      if(isNaN(valor) || vakir <= 0){
        resultadoDiv.innerHTML = '<p style="color:red;">Informe um valor total válido.</p>';
        return;
      }
       if (isNaN(n) || n <= 0) {
        resultadoDiv.innerHTML = '<p style="color:red;">Informe um número válido de parcelas.</p>';
        return;
      }
      if (isNaN(jurosMensal) || jurosMensal < 0) {
        resultadoDiv.innerHTML = '<p style="color:red;">Informe uma taxa de juros válida.</p>';
        return;
      }

      let valorParcela;
      if(jurosmensal === 0){
        valorParcela = valor /n;
      }else {
        valorParcela = (valor * jurosMensal) / (1 - Math.pow(1 + jurosMensal, -n));
      }

      let saldoDevedor = valor;

      let tabela = `<table>
        <thead>
          <tr>
            <th>Parcela</th>
            <th>Valor da Parcela (R$)</th>
            <th>Saldo Devedor (R$)</th>
          </tr>
        </thead>
        <tbody>`;

      for (let i = 1; i <= n; i++) {
        saldoDevedor -= valorParcela;
        if (saldoDevedor < 0) saldoDevedor = 0;

        tabela += `
          <tr>
            <td>${i}</td>
            <td>${valorParcela.toFixed(2)}</td>
            <td>${saldoDevedor.toFixed(2)}</td>
          </tr>`;
      }

      tabela += '</tbody></table>';
      resultadoDiv.innerHTML = tabela;
    }


