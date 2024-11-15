import Banner from "../../components/Banner";
import ProductList from "../../components/ProductList";
import Section from "../../components/Section";
import Spinner from "../../components/Spinner";

import { useGetOnSaleQuery, useGetSoonQuery } from "../../services/api";

const Home = () => {
  const { data: onSale } = useGetOnSaleQuery();
  const { data: soon } = useGetSoonQuery();

  if (onSale && soon) {
    return (
      <>
        <Banner />
        <Section title="Promoções" theme="gray" id="on-sale">
          <ProductList games={onSale} />
        </Section>
        <Section title="Serão lançados em breve" theme="black" id="coming-soon">
          <ProductList games={soon} />
        </Section>
      </>
    );
  }

  return <Spinner />;
};

export default Home;
