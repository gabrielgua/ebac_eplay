import { useParams } from "react-router-dom";
import Hero from "../../components/Hero";
import Section from "../../components/Section";

const Game = () => {
  const { id } = useParams();

  return (
    <>
      <Hero />
      <Section title="Sobre o jogo">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
          corrupti odit quos consectetur, velit, reprehenderit vitae sed qui
          fugit nesciunt recusandae aliquam numquam assumenda id at non. Amet,
          maiores odit. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sed dolores expedita aliquid quas reprehenderit qui et perferendis
          facilis laborum sunt distinctio, nisi temporibus praesentium ea
          mollitia deleniti labore molestias? Repellendus? Lorem ipsum dolor sit
          amet consectetur adipisicing elit. Totam corrupti odit quos
          consectetur, velit, reprehenderit vitae sed qui fugit nesciunt
          recusandae aliquam numquam assumenda id at non. Amet, maiores odit.
        </p>
      </Section>
      <Section title="Mais detalhes" theme="gray">
        <p>
          <b>Plataforma:</b> Playstation 5, PC, XBOX. <br />
          <b>Desenvolvedor:</b> Avalanche Software. <br />
          <b>Editora:</b> Portkey Games. <br />
          <b>Idiomas:</b> O jogo oferece suporte a diversos idiomas, incluindo
          inglês, espanhol, francês, alemão, italiano, português, entre outros.
        </p>
      </Section>
      <Section title="Galeria">
        <p>aqui irão as imagens</p>
      </Section>
    </>
  );
};

export default Game;
