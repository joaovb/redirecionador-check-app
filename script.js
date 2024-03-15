const axios = require("axios");

async function obterUrlFinal(url) {
  try {
    const response = await axios.head(url);
    const finalUrl = response.request.res.responseUrl;
    return finalUrl;
  } catch (error) {
    console.error("Erro ao analisar o redirecionamento:", error);
    throw error;
  }
}

async function verificarLink(urlInicial, urlSegundo) {
  try {
    const urlFinal = await obterUrlFinal(urlInicial);
    return urlFinal === urlSegundo;
  } catch (error) {
    console.error("Erro ao verificar o link:", error);
    throw error;
  }
}

// Exemplo de uso
const urlInicial = "";
const urlSegundo = "";

verificarLink(urlInicial, urlSegundo)
  .then((valido) => {
    if (valido) {
      console.log("O link redirecionado é válido.");
      return obterUrlFinal(urlInicial); // Chama obterUrlFinal para obter a URL final
    } else {
      console.log("O link redirecionado é inválido.");
    }
  })
  .then((urlFinal) => {
    console.log("URL final obtida:", urlFinal);
  })
  .catch((error) => {
    console.error("Erro ao verificar o link:", error);
  });
