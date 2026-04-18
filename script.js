const projetos = [
  {
    nome: "Projeto 1",
    descricao: "Um site simples feito com HTML e CSS.",
    link: "#"
  },
  {
    nome: "Projeto 2",
    descricao: "Aplicação com JavaScript básico.",
    link: "#"
  }
];

const container = document.getElementById("lista-projetos");

projetos.forEach(proj => {
  const div = document.createElement("div");
  div.classList.add("projeto");

  div.innerHTML = `
    <h3>${proj.nome}</h3>
    <p>${proj.descricao}</p>
    <a href="${proj.link}" target="_blank">Ver projeto</a>
  `;

  container.appendChild(div);
});