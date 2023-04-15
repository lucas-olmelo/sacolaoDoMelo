import icon from "../../assets/icon.png";
import banana from "../../assets/frutas/banana.png";
import kiwi from "../../assets/frutas/kiwi.png";
import maca from "../../assets/frutas/maca.png";
import manga from "../../assets/frutas/manga.png";
import morango from "../../assets/frutas/morango.png";

const cesta = {
    topo: {
        title: 'Detalhes da cesta',
    },
    detalhes: {
        name: 'Cesta de frutas',
        sacolaoLogo: icon,
        sacolaoName: 'Sacolão do Melo',
        description: 'Uma cesta com produtos cuidadosamente selecionados da horta direto para a sua cozinha',
        price: 'R$50,00',
        text: 'Comprar',
    },
    itens: {
        title: 'Itens da cesta',
        list: [
            {
                name: 'Banana',
                image: banana
            }, 
            {
                name: 'Kiwi',
                image: kiwi
            },
            {
                name: 'Maçã',
                image: maca
            },
            {
                name: 'Manga',
                image: manga
            },
            {
                name: 'Morango',
                image: morango
            }
        ]
    }
}

export default cesta;
