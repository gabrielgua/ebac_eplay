import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import Section from "../../components/Section";

import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

const Home = () => {
  const { data: onSale } = useGetOnSaleQuery();
  const { data: soon } = useGetSoonQuery();

  if (onSale && soon) {
    return (
      <>
        <Banner />
        <Section title="Promoções" theme="gray">
          <ProductList games={onSale} />
        </Section>
        <Section title="Serão lançados em breve" theme="black">
          <ProductList games={soon} />
        </Section>
      </>
    );
  }

  return <h3>Carregando...</h3>;
};

export default Home;
