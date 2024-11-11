import { useParams } from "react-router-dom";
import Gallery from "../../components/Gallery";
import Hero from "../../components/Hero";
import Section from "../../components/Section";

import { useGetGameQuery } from "../../services/api";

const Game = () => {
  const { id } = useParams();
  const { data: game, isLoading } = useGetGameQuery(id!);

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
