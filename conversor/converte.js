async function converter() {
  const valor = parseFloat(document.getElementById("valor").value);
  const de = document.getElementById("de").value;
  const para = document.getElementById("para").value;

  if (isNaN(valor) || valor <= 0) {
    document.getElementById("resultado").innerText = "Digite um valor válido.";
    return;
  }

  const url = `https://api.exchangerate.host/convert?from=${de}&to=${para}&amount=${valor}`;

  try {
    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log("Resposta da API:", dados); // DEBUG

    if (dados && dados.success && dados.result !== undefined) {
      document.getElementById("resultado").innerText =
        `Resultado: ${dados.result.toFixed(2)} ${para}`;
    } else {
      document.getElementById("resultado").innerText =
        "Erro na resposta da API.";
    }
  } catch (erro) {
    console.error("Erro na requisição:", erro);
    document.getElementById("resultado").innerText =
      "Erro ao conectar com a API.";
  }
}
