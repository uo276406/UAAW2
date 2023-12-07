class Buscador {
    buscar() {
        const searchTerm = document.getElementsByTagName('search').value;
        const term = searchTerm.toLowerCase();

        $.getJSON('contenido/contenido.json', function(data) {
            for (const page of data.pages) {
                let contentLower = page.content.toLowerCase();
                if (contentLower.includes(term)) {
                    window.location.href = page.id;
                    return;
                }
            }
         });
    }
}

let buscador = new Buscador();