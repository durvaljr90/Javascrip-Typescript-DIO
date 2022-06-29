function mudaModo() {
    mudaClasses();
    mudaTexto();
}

function mudaClasses() {
    BOTAO.classList.toggle(DARKMODECLASS);
    H1.classList.toggle(DARKMODECLASS);
    BODY.classList.toggle(DARKMODECLASS);
    FOOTER.classList.toggle(DARKMODECLASS);
}

function mudaTexto() {
    const lightMode = 'Light Mode';
    const darkMode = 'Dark Mode';

    if(BODY.classList.contains(DARKMODECLASS)) {
        BOTAO.innerHTML = lightMode;
        H1.innerHTML = darkMode + ' ON';
        return;
    }

    BOTAO.innerHTML = darkMode;
    H1.innerHTML = lightMode + ' ON';
}

const DARKMODECLASS = 'dark-mode';
const BOTAO = document.getElementById('btn-mode');
const H1 = document.getElementById('title');
const BODY = document.getElementsByTagName('body')[0];
const FOOTER = document.getElementsByTagName('footer')[0];

BOTAO.addEventListener('click', mudaModo);