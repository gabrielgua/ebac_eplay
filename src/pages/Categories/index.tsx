import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";

import Section from "../../components/Section";
import { Game } from "../../models/Game";

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>();
  const [gamesEsportes, setGamesEsportes] = useState<Game[]>();
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>();
  const [gamesLuta, setGamesLuta] = useState<Game[]>();
  const [gamesRPG, setGamesRPG] = useState<Game[]>();

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/acao")
      .then((res) => res.json())
      .then((res) => setGamesAcao(res));
    fetch("https://fake-api-tau.vercel.app/api/eplay/esportes")
      .then((res) => res.json())
      .then((res) => setGamesEsportes(res));
    fetch("https://fake-api-tau.vercel.app/api/eplay/simulacao")
      .then((res) => res.json())
      .then((res) => setGamesLuta(res));
    fetch("https://fake-api-tau.vercel.app/api/eplay/luta")
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res));
    fetch("https://fake-api-tau.vercel.app/api/eplay/rpg")
      .then((res) => res.json())
      .then((res) => setGamesRPG(res));
  }, []);

  if (
    !gamesAcao ||
    !gamesEsportes ||
    !gamesSimulacao ||
    !gamesLuta ||
    !gamesRPG
  ) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Section title="Ação">
        <ProductList games={gamesAcao} />
      </Section>
      <Section title="Esportes" theme="gray">
        <ProductList games={gamesEsportes} />
      </Section>
      <Section title="Simulação">
        <ProductList games={gamesSimulacao} />
      </Section>
      <Section title="Luta" theme="gray">
        <ProductList games={gamesLuta} />
      </Section>
      <Section title="RPG">
        <ProductList games={gamesRPG} />
      </Section>
    </>
  );
};

export default Categories;
