import Game from "../../../models/Game";
import Banner from "../../Banner";
import ProductList from "../../ProductList";

import resident from "../../../assets/images/resident.png";
import diablo from "../../../assets/images/diablo.png";
import starWars from "../../../assets/images/star_wars.png";
import zelda from "../../../assets/images/zelda.png";

const games: Game[] = [
  {
    id: 1,
    title: "Resident Evil 4",
    category: "Ação",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    image: resident,
    infos: ["R$ 199,90", "Oferta -10%"],
    platform: "PC",
  },
  {
    id: 2,
    title: "Diablo IV",
    category: "Ação/Aventura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    image: diablo,
    infos: ["R$ 249,90", "Novo"],
    platform: "PC",
  },
  {
    id: 3,
    title: "Star Wars",
    category: "Ação/Aventura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    image: starWars,
    infos: ["R$ 349,90"],
    platform: "PC",
  },
  {
    id: 4,
    title: "The Legend Of Zelda",
    category: "Aventura",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque veritatis tenetur sapiente inventore nesciunt at, placeat vero, ipsa numquam minus provident quis assumenda soluta voluptatibus, maiores veniam minima laudantium hic.",
    image: zelda,
    infos: ["R$ 399,90", "Novo"],
    platform: "PC",
  },
];

const Categories = () => (
  <>
    <Banner />
    <ProductList title="RPG" bgTheme="gray" games={games} />
    <ProductList title="Aventura" bgTheme="black" games={games} />
    <ProductList title="Tiro em primeira pessoa" bgTheme="gray" games={games} />
  </>
);

export default Categories;
