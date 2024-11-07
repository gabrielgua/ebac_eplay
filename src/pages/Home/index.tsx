import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";

import { useEffect, useState } from "react";
import Section from "../../components/Section";
import { Game } from "../../models/Game";

const Home = () => {
  const [promocoes, setPromocoes] = useState<Game[]>([]);
  const [emBreve, setEmBreve] = useState<Game[]>([]);

  useEffect(() => {
    fetch("https://fake-api-tau.vercel.app/api/eplay/promocoes")
      .then((res) => res.json())
      .then((res) => setPromocoes(res));

    fetch("https://fake-api-tau.vercel.app/api/eplay/em-breve")
      .then((res) => res.json())
      .then((res) => setEmBreve(res));
  }, []);

  return (
    <>
      <Banner />
      <Section title="Promoções" theme="gray">
        <ProductList games={promocoes} />
      </Section>
      <Section title="Serão lançados em breve" theme="black">
        <ProductList games={emBreve} />
      </Section>
    </>
  );
};

export default Home;
