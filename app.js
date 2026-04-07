document.querySelector("#btn-acrescentar").addEventListener("click", addItem);

const listaOn = document.querySelector("#lista-on ul");
const listaOff = document.querySelector("#lista-off ul");
artigo.focus(); // foca no input do artigo

// função principal
function addItem() {
    const artigoInput = document.querySelector("#artigo");
    const artigo = artigoInput.value.trim();

    // input da quantidade
    const quantidadeInput = document.querySelector("#quantidade");
    const quantidade = quantidadeInput.value.trim();

    // verificações
    // se não houver 'artigo', não deixa adicionar nada
    if (artigo.trim() === "") {
        alert("Introduza um artigo.");
        artigoInput.focus();
        return; // sai da função
    }

    // criar o item para a lista
    const item = document.createElement("li");

    // botão X para remover o item
    const x = document.createElement("button");
    x.innerText = "X";
    x.classList.add("btn-remover");

    // ao clicar no X, remove o item
    x.addEventListener("click", function (e) {
        e.stopPropagation(); // impede que o click no X mova o item
        item.remove();
    });

    // adiciona o evento de mover ao clicar no item (fica com traço pelo texto)
    item.addEventListener("click", moveItem);

    // se existir quantidade, junta ao texto
    if (quantidade.trim() !== "") {
        item.innerText += `${artigo} (${quantidade})`;
    } else {
        item.innerText += artigo;
    }

    // acrescenta o botão X do lado esquerdo do artigo
    item.prepend(x);

    listaOn.appendChild(item);

    // limpa os campos
    artigoInput.value = "";
    quantidadeInput.value = "";
    artigoInput.focus();
}

// função para mover entre as listas
function moveItem() {
    /*
    if (!this.setAttribute("carrinho") == "sim") {
        listaOn.appendChild(this); // move os item do sitio
        this.setAttribute("carrinho", "não");
    } else {
        listaOff.appendChild(this);
        this.setAttribute("carrinho", "sim");
    }
*/

    // if vem da lista on e manda para a lista off
    if (this.parentNode.parentNode.id === "lista-on") {
        listaOff.appendChild(this);
    } else {
        // else vem da lista off e manda de volta para a lista on
        listaOn.appendChild(this);
    }
}
