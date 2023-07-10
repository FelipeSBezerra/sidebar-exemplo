
let icon_btn = document.querySelector("#icon-btn");

// entra na página inicial sempre que o html é iniciado
// Se for em um dispositivo com width < 480, altera o ícone de expandir a sidebar
window.onload = function() {
    document.querySelector("#link-inicio").click();
    var w = window.innerWidth || document.documentElement.clientHeight || document.body.clientWidth;
    if (w < 480) {
        document.body.classList.add("collapsed");
        icon_btn.textContent = "menu";
    }
}

// Colapsa a sidebar sempre que a tela do navegador for reduzida a valores menores que 800px
// alterna o ícone do botão de expandir a sidebar
window.onresize = function() {
    var w = window.innerWidth || document.documentElement.clientHeight || document.body.clientWidth;
    if (w < 800) {
        document.body.classList.add("collapsed");
        if (w <= 480) {
            icon_btn.textContent = "menu";
        } else {
            if ( icon_btn.textContent == "menu") {
             icon_btn.textContent = "chevron_left";
            }
        } 
    }
}

// obtem o botão de expandir a sidebar
const expand_btn = document.querySelector(".expand-btn");

// Observa se o botão de expandir a sidebar foi clicado 
//e adiciona ou remove a classe collapsed do body sempre que o botão é clicado
expand_btn.addEventListener('click', () => {
  document.body.classList.toggle("collapsed");

  // alterna o ícone do botão de expandir a sidebar
  var w = window.innerWidth || document.documentElement.clientHeight || document.body.clientWidth;
  if (w <= 480) {
    if ( icon_btn.textContent == "menu") {
        icon_btn.textContent = "chevron_left";
    } else {
        icon_btn.textContent = "menu"
    }
  }
});

// Obtém o href atual
const current = window.location.href;

// Obtém todos os links
const allLinks = document.querySelectorAll(".sidebar-links a")

// Observa todos os links identifica quando foram clicados
// Adiciona a classe active no link clicado e remove dos demais
allLinks.forEach((elem) => {
    elem.addEventListener('click', function() {
    const hrefLinkClick = elem.href;

    allLinks.forEach((link) => {
      if (link.href == hrefLinkClick){
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  })
});