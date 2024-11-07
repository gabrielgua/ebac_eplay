import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Section from "../../components/Section";
import Gallery from "../../components/Gallery";

import resident from "../../assets/images/resident.png";
import { useEffect, useState } from "react";
import { Game as GameType } from "../../models/Game";

const Game = () => {
  const { id } = useParams();

  const [game, setGame] = useState<GameType>();

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/eplay/jogos/${id}`)
      .then((res) => res.json())
      .then((res) => setGame(res));
  }, [id]);

  if (!game) return <h2>Loading...</h2>;

  return (
    <>
      <Hero game={game} />
      <Section title="Sobre o jogo">
        <p>{game.description}</p>
      </Section>
      <Section title="Mais detalhes" theme="gray">
        <p>
          <b>Plataforma:</b> {game.details.system} <br />
          <b>Desenvolvedor:</b> {game.details.developer} <br />
          <b>Editora:</b> {game.details.publisher} <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo{" "}
          {game.details.languages.join(", ")} entre outros.
        </p>
      </Section>
      <Section title="Galeria">
        <Gallery
          name={game.name}
          items={game.media.gallery}
          defaultCover={game.media.cover}
        />
      </Section>
    </>
  );
};

export default Game;
