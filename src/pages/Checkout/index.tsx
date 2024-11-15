import { useEffect, useState } from "react";
import Button from "../../components/Button";
import Card from "../../components/Card";
import {
  CheckoutWrapper,
  ContentInputGroup,
  ContentRow,
  LoadingCheckout,
} from "./styles";

import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import * as Yup from "yup";
import boletoImg from "../../assets/images/boleto.png";
import cartaoImg from "../../assets/images/cartao.png";
import { usePurchaseMutation } from "../../services/api";
import { RootReducer } from "../../store";
import { calculateTotalPrice } from "../../components/Cart";
import { formatPrice } from "../../components/ProductList";
import Spinner from "../../components/Spinner";
import ReactInputMask from "react-input-mask";
import { clear } from "../../store/reducers/cart";

const Checkout = () => {
  const dispatch = useDispatch();
  const { items } = useSelector((state: RootReducer) => state.cart);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "boleto">(
    "boleto"
  );
  const [purchase, { data, isLoading, isSuccess }] = usePurchaseMutation();

  const getErrorMessage = (field: string, message?: string) => {
    const isTouched = field in form.touched;
    const isInvalid = field in form.errors;

    if (isTouched && isInvalid) {
      return message;
    }
  };

  useEffect(() => {
    if (isSuccess) {
      dispatch(clear());
    }
  }, [isSuccess, dispatch]);

  type Installment = {
    qnt: number;
    amount: number;
  };

  const calculateInstallments = () => {
    const totalPrice = calculateTotalPrice(items);
    const installments: Installment[] = [];

    for (let i = 1; i <= 6; i++) {
      installments.push({ qnt: i, amount: totalPrice / i });
    }

    return installments;
  };

  const form = useFormik({
    initialValues: {
      fullName: "",
      email: "",
      cpf: "",
      deliveryEmail: "",
      confirmEmail: "",
      cardOwnerName: "",
      cardOwnerCpf: "",
      cardNumber: "",
      cardName: "",
      cardExpiryMonth: "",
      cardExpiryYear: "",
      cardCvv: "",
      installments: 1,
    },
    validationSchema: Yup.object({
      fullName: Yup.string()
        .min(5, "O nome precisa ter no mínimo 5 caractéres")
        .required("Campo obrigatório."),
      email: Yup.string()
        .email("E-mail inválido")
        .required("Campo obrigatório."),

      cpf: Yup.string().min(14).max(14).required("Campo obrigatório."),
      deliveryEmail: Yup.string()
        .email("E-mail inválido")
        .required("Campo obrigatório."),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("deliveryEmail")], "E-mails não conferem.")
        .required("Campo obrigatório."),

      cardOwnerName: Yup.string()
        .when((values, schema) =>
          paymentMethod === "card"
            ? schema.required("O campo é obrigatório")
            : schema
        )
        .min(5, "O nome precisa ter no mínimo 5 caractéres"),
      cardOwnerCpf: Yup.string()
        .when((values, schema) =>
          paymentMethod === "card"
            ? schema.required("O campo é obrigatório")
            : schema
        )
        .min(14)
        .max(14),
      cardNumber: Yup.string().when((values, schema) =>
        paymentMethod === "card"
          ? schema.required("O campo é obrigatório")
          : schema
      ),
      cardName: Yup.string()
        .when((values, schema) =>
          paymentMethod === "card"
            ? schema.required("O campo é obrigatório")
            : schema
        )
        .min(5),
      cardExpiryMonth: Yup.string().when((values, schema) =>
        paymentMethod === "card"
          ? schema.required("O campo é obrigatório")
          : schema
      ),
      cardExpiryYear: Yup.string().when((values, schema) =>
        paymentMethod === "card"
          ? schema.required("O campo é obrigatório")
          : schema
      ),
      cardCvv: Yup.string().when((values, schema) =>
        paymentMethod === "card"
          ? schema.required("O campo é obrigatório")
          : schema
      ),
      installments: Yup.number().when((values, schema) =>
        paymentMethod === "card"
          ? schema.required("O campo é obrigatório")
          : schema
      ),
    }),
    onSubmit: (values) => {
      purchase({
        billing: {
          document: values.cpf,
          email: values.email,
          name: values.fullName,
        },
        delivery: {
          email: values.deliveryEmail,
        },
        payment: {
          installments: values.installments,
          card: {
            active: paymentMethod === "card",
            name: values.cardName,
            code: Number(values.cardCvv),
            expires: {
              month: Number(values.cardExpiryMonth),
              year: Number(values.cardExpiryYear),
            },
            number: values.cardNumber,
            owner: {
              name: values.cardName,
              document: values.cardOwnerCpf,
            },
          },
        },
        products: items.map((item) => ({
          id: item.id,
          price: item.prices.current,
        })),
      });
    },
  });

  if (!items.length && !isSuccess) {
    return <Navigate to="/"></Navigate>;
  }

  return (
    <div className="container">
      {isSuccess && data ? (
        <CheckoutWrapper>
          <Card title="Pedido realizado">
            <div>
              <p>Seu pedido foi realizado com sucesso!</p>
              <strong>Seguem os detalhes do pedido: </strong>
              <p>
                <strong>Número do pedido: </strong>
                {data.orderId}
              </p>
              <p>
                <strong>Forma de pagamento: </strong>
                {paymentMethod === "card"
                  ? "Cartão de crédito"
                  : "Boleto bancário"}
              </p>
              <br />
              <br />
              <p>
                Agradecemos por nos escolher e esperamos que desfrute do seu
                novo jogo!
              </p>
            </div>
          </Card>
        </CheckoutWrapper>
      ) : (
        <CheckoutWrapper onSubmit={form.handleSubmit}>
          {isLoading && (
            <LoadingCheckout>
              <Spinner />
            </LoadingCheckout>
          )}
          <Card title="Dados de cobrança">
            <ContentRow>
              <ContentInputGroup>
                <label htmlFor="fullName">Nome completo</label>
                <input
                  id="fullName"
                  type="text"
                  name="fullName"
                  value={form.values.fullName}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("fullName", form.errors.fullName)}
                </small>
              </ContentInputGroup>
              <ContentInputGroup>
                <label htmlFor="email">E-mail</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.values.email}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage("email", form.errors.email)}</small>
              </ContentInputGroup>
              <ContentInputGroup>
                <label htmlFor="cpf">CPF</label>
                <ReactInputMask
                  mask="999.999.999-99"
                  id="cpf"
                  type="text"
                  name="cpf"
                  value={form.values.cpf}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>{getErrorMessage("cpf", form.errors.cpf)}</small>
              </ContentInputGroup>
            </ContentRow>
          </Card>
          <Card title="Dados de entrega - conteúdo digital">
            <ContentRow>
              <ContentInputGroup>
                <label htmlFor="deliveryEmail">E-mail</label>
                <input
                  id="deliveryEmail"
                  type="text"
                  name="deliveryEmail"
                  value={form.values.deliveryEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("deliveryEmail", form.errors.deliveryEmail)}
                </small>
              </ContentInputGroup>
              <ContentInputGroup>
                <label htmlFor="confirmEmail">Confirme o e-mail</label>
                <input
                  id="confirmEmail"
                  type="email"
                  name="confirmEmail"
                  value={form.values.confirmEmail}
                  onChange={form.handleChange}
                  onBlur={form.handleBlur}
                />
                <small>
                  {getErrorMessage("confirmEmail", form.errors.confirmEmail)}
                </small>
              </ContentInputGroup>
            </ContentRow>
          </Card>
          <Card title="Pagamento">
            <>
              <ContentRow>
                <Button
                  onClick={() => setPaymentMethod("boleto")}
                  type="button"
                  $variant={paymentMethod === "boleto" ? "primary" : "terciary"}
                >
                  <span>
                    <img src={boletoImg} />
                    <p>Boleto bancário</p>
                  </span>
                </Button>
                <Button
                  onClick={() => setPaymentMethod("card")}
                  type="button"
                  $variant={paymentMethod === "card" ? "primary" : "terciary"}
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
                    Ao optar por essa forma de pagamento, é importante lembrar
                    que a confirmação pode levar até 3 dias úteis, devido aos
                    prazos estabelecidos pals instituições financeiras.
                    Portanto, a liberação do código de ativação do jogo
                    adquirido ocorrerá somente após a aprovação somente após a
                    aprevação do pagamento do boleto.
                  </p>
                </ContentRow>
              ) : (
                <>
                  <ContentRow>
                    <ContentInputGroup>
                      <label htmlFor="cardOwnerName">
                        Nome do titular do cartão
                      </label>
                      <input
                        id="cardOwnerName"
                        type="text"
                        name="cardOwnerName"
                        value={form.values.cardOwnerName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          "cardOwnerName",
                          form.errors.cardOwnerName
                        )}
                      </small>
                    </ContentInputGroup>
                    <ContentInputGroup>
                      <label htmlFor="cardOwnerCpf">
                        CPF do titular do cartão
                      </label>
                      <ReactInputMask
                        mask="999.999.999-99"
                        id="cardOwnerCpf"
                        type="text"
                        name="cardOwnerCpf"
                        value={form.values.cardOwnerCpf}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          "cardOwnerCpf",
                          form.errors.cardOwnerCpf
                        )}
                      </small>
                    </ContentInputGroup>
                  </ContentRow>
                  <ContentRow>
                    <ContentInputGroup>
                      <label htmlFor="cardNumber">Número do cartão</label>
                      <ReactInputMask
                        mask="9999 9999 9999 9999"
                        id="cardNumber"
                        type="text"
                        name="cardNumber"
                        value={form.values.cardNumber}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage("cardNumber", form.errors.cardNumber)}
                      </small>
                    </ContentInputGroup>
                    <ContentInputGroup>
                      <label htmlFor="cardName">Nome no cartão</label>
                      <input
                        id="cardName"
                        type="text"
                        name="cardName"
                        value={form.values.cardName}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage("cardName", form.errors.cardName)}
                      </small>
                    </ContentInputGroup>
                    <ContentInputGroup $maxwidth="123px">
                      <label htmlFor="cardExpiryMonth">Mês do vencimento</label>
                      <ReactInputMask
                        mask="99"
                        id="cardExpiryMonth"
                        type="text"
                        name="cardExpiryMonth"
                        value={form.values.cardExpiryMonth}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          "cardExpiryMonth",
                          form.errors.cardExpiryMonth
                        )}
                      </small>
                    </ContentInputGroup>
                    <ContentInputGroup $maxwidth="123px">
                      <label htmlFor="cardExpiryYear">Ano do vencimento</label>
                      <ReactInputMask
                        mask="9999"
                        id="cardExpiryYear"
                        type="text"
                        name="cardExpiryYear"
                        value={form.values.cardExpiryYear}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage(
                          "cardExpiryYear",
                          form.errors.cardExpiryYear
                        )}
                      </small>
                    </ContentInputGroup>
                    <ContentInputGroup $maxwidth="54px">
                      <label htmlFor="cardCvv">CVV</label>
                      <ReactInputMask
                        mask="999"
                        id="cardCvv"
                        type="text"
                        name="cardCvv"
                        value={form.values.cardCvv}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      />
                      <small>
                        {getErrorMessage("cardCvv", form.errors.cardCvv)}
                      </small>
                    </ContentInputGroup>
                  </ContentRow>
                  <ContentRow>
                    <ContentInputGroup $maxwidth="250px">
                      <label htmlFor="installments">
                        Opções de parcelamento
                      </label>
                      <select
                        id="installments"
                        name="installments"
                        value={form.values.installments}
                        onChange={form.handleChange}
                        onBlur={form.handleBlur}
                      >
                        {calculateInstallments().map((i) => (
                          <option value={i.qnt} key={i.qnt}>
                            {i.qnt}x de {formatPrice(i.amount)} sem juros.
                          </option>
                        ))}
                      </select>
                      <small>
                        {getErrorMessage(
                          "installments",
                          form.errors.installments
                        )}
                      </small>
                    </ContentInputGroup>
                  </ContentRow>
                </>
              )}
            </>
          </Card>
          <Button type="button" submit disabled={isLoading}>
            {isLoading ? "Finalizando sua compra..." : "Finalizar compra"}
          </Button>
        </CheckoutWrapper>
      )}
    </div>
  );
};

export default Checkout;
