import { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";

import Section from "../../components/Section";
import { Game } from "../../models/Game";

import {
  useGetActionQuery,
  useGetSportsQuery,
  useGetSimulationQuery,
  useGetFightQuery,
  useGetRPGQuery,
} from "../../services/api";

const Categories = () => {
  const { data: actionGames } = useGetActionQuery();
  const { data: sportsGames } = useGetSportsQuery();
  const { data: simGames } = useGetSimulationQuery();
  const { data: fightGames } = useGetFightQuery();
  const { data: rpgGames } = useGetRPGQuery();

  if (!actionGames || !sportsGames || !simGames || !fightGames || !rpgGames) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <Section title="Ação">
        <ProductList games={actionGames} />
      </Section>
      <Section title="Esportes" theme="gray">
        <ProductList games={sportsGames} />
      </Section>
      <Section title="Simulação">
        <ProductList games={simGames} />
      </Section>
      <Section title="Luta" theme="gray">
        <ProductList games={fightGames} />
      </Section>
      <Section title="RPG">
        <ProductList games={rpgGames} />
      </Section>
    </>
  );
};

export default Categories;
