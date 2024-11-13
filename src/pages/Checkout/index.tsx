import { useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import { CheckoutWrapper, ContentInputGroup, ContentRow } from "./styles";

import boletoImg from "../../assets/images/boleto.png";
import cartaoImg from "../../assets/images/cartao.png";

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState<"card" | "boleto">("card");

  return (
    <CheckoutWrapper className="container">
      <Card title="Dados de cobrança">
        <ContentRow>
          <ContentInputGroup>
            <label htmlFor="fullName">Nome completo</label>
            <input id="fullName" type="text" />
          </ContentInputGroup>
          <ContentInputGroup>
            <label htmlFor="email">E-mail</label>
            <input id="email" type="email" />
          </ContentInputGroup>
          <ContentInputGroup>
            <label htmlFor="cpf">CPF</label>
            <input id="cpf" type="text" />
          </ContentInputGroup>
        </ContentRow>
      </Card>
      <Card title="Dados de entrega - conteúdo digital">
        <ContentRow>
          <ContentInputGroup>
            <label htmlFor="deliveryEmail">E-mail</label>
            <input id="deliveryEmail" type="text" />
          </ContentInputGroup>
          <ContentInputGroup>
            <label htmlFor="confirmEmail">Confirme o e-mail</label>
            <input id="confirmEmail" type="email" />
          </ContentInputGroup>
        </ContentRow>
      </Card>
      <Card title="Pagamento">
        <>
          <ContentRow>
            <Button
              onClick={() => setPaymentMethod("boleto")}
              type="button"
              variant={paymentMethod === "boleto" ? "primary" : "terciary"}
            >
              <span>
                <img src={boletoImg} />
                <p>Boleto bancário</p>
              </span>
            </Button>
            <Button
              onClick={() => setPaymentMethod("card")}
              type="button"
              variant={paymentMethod === "card" ? "primary" : "terciary"}
            >
              <span>
                <img src={cartaoImg} />
                <p>Cartão de crédito</p>
              </span>
            </Button>
          </ContentRow>
          {paymentMethod === "boleto" ? (
            <ContentRow>
              <p>
                Ao optar por essa forma de pagamento, é importante lembrar que a
                confirmação pode levar até 3 dias úteis, devido aos prazos
                estabelecidos pals instituições financeiras. Portanto, a
                liberação do código de ativação do jogo adquirido ocorrerá
                somente após a aprovação somente após a aprevação do pagamento
                do boleto.
              </p>
            </ContentRow>
          ) : (
            <>
              <ContentRow>
                <ContentInputGroup>
                  <label htmlFor="ownerName">Nome do titular do cartão</label>
                  <input id="ownerName" type="text" />
                </ContentInputGroup>
                <ContentInputGroup>
                  <label htmlFor="ownerCpf">CPF do titular do cartão</label>
                  <input id="ownerCpf" type="text" />
                </ContentInputGroup>
              </ContentRow>
              <ContentRow>
                <ContentInputGroup>
                  <label htmlFor="cardNumber">Número do cartão</label>
                  <input id="cardNumber" type="text" />
                </ContentInputGroup>
                <ContentInputGroup>
                  <label htmlFor="cardName">Nome no cartão</label>
                  <input id="cardName" type="text" />
                </ContentInputGroup>
                <ContentInputGroup maxWidth="123px">
                  <label htmlFor="cardExpiryMonth">Mês do vencimento</label>
                  <input id="cardExpiryMonth" type="number" />
                </ContentInputGroup>
                <ContentInputGroup maxWidth="123px">
                  <label htmlFor="cardExpiryYear">Ano do vencimento</label>
                  <input id="cardExpiryYear" type="number" />
                </ContentInputGroup>
                <ContentInputGroup maxWidth="54px">
                  <label htmlFor="cardCVV">CVV</label>
                  <input id="cardCVV" type="number" max="999" />
                </ContentInputGroup>
              </ContentRow>
              <ContentRow>
                <ContentInputGroup maxWidth="250px">
                  <label htmlFor="installments">Opções de parcelamento</label>
                  <select id="installments">
                    <option>1x de R$ 200,00 sem juros.</option>
                    <option>2x de R$ 200,00 sem juros.</option>
                    <option>3x de R$ 200,00 sem juros.</option>
                    <option>4x de R$ 200,00 sem juros.</option>
                  </select>
                </ContentInputGroup>
              </ContentRow>
            </>
          )}
        </>
      </Card>
      <Button type="button">Finalizar compra</Button>
    </CheckoutWrapper>
  );
};

export default Checkout;
