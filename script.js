const projetos = [
  {
    nome: "Portfólio Pessoal",
    descricao: "Site responsivo desenvolvido com HTML, CSS e JavaScript.",
    link: "#"
  },
  {
    nome: "Projeto JavaScript",
    descricao: "Aplicação com manipulação do DOM.",
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
