class Game {
  id: number;
  title: string;
  category: string;
  platform: string;
  description: string;
  infos: string[];
  image: string;

  constructor(
    id: number,
    title: string,
    category: string,
    platform: string,
    description: string,
    infos: string[],
    image: string
  ) {
    this.id = id;
    this.title = title;
    this.category = category;
    this.platform = platform;
    this.description = description;
    this.infos = infos;
    this.image = image;
  }
}

export default Game;
