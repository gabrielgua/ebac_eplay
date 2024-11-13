import { ButtonContainer, ButtonLink } from "./styles";

export type ButtonProps = {
  children: string | JSX.Element;
  type: "button" | "link";
  title?: string;
  to?: string;
  onClick?: () => void;
  $variant?: "primary" | "secondary" | "terciary";
  submit?: boolean;
};

const Button = ({
  to,
  type,
  children,
  title,
  onClick,
  $variant: variant = "primary",
  submit,
}: ButtonProps) => {
  if (type === "button") {
    return (
      <ButtonContainer
        $variant={variant}
        type={submit ? "submit" : "button"}
        title={title ? title : ""}
        onClick={onClick}
      >
        {children}
      </ButtonContainer>
    );
  }

  return (
    <ButtonLink to={to!} title={title}>
      {children}
    </ButtonLink>
  );
};

export default Button;
