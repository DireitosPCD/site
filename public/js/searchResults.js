// Incrementar o array de acordo com os artigos
const data = [
  {
    title: "INSS para pessoas com neurofibromatose",
    keywords: "neurofibromatose; inss; nf; previdencia; previdencia social",
    file: "content/direito_previdenciario/neurofibromatose.html",
  },
  {
    title: "Concursos públicos para pessoas com doença rara",
    keywords:
      "doenca rara; pcd; concurso; concurso publico; governo; publico; edital",
    file: "content/cargos_publicos/concurso_doenca_rara.html",
  },
];

var query = new URLSearchParams(window.location.search).get("query");

data.forEach((item) => {
  query = sanitizeString(query);

  if (item.keywords.includes(query)) {
    let html = `<li class="list-group-item"> <a href="${item.file}"> ${item.title} </a> </li>`;
    document
      .getElementById("searchResultsList")
      .insertAdjacentHTML("beforeend", html);
    item.match = true;
  }
});

function sanitizeString(string) {
  string = string.toLowerCase();
  string = string.replace(new RegExp("[ÁÀÂÃ]", "gi"), "a");
  string = string.replace(new RegExp("[ÉÈÊ]", "gi"), "e");
  string = string.replace(new RegExp("[ÍÌÎ]", "gi"), "i");
  string = string.replace(new RegExp("[ÓÒÔÕ]", "gi"), "o");
  string = string.replace(new RegExp("[ÚÙÛ]", "gi"), "u");
  string = string.replace(new RegExp("[Ç]", "gi"), "c");
  return string;
}
