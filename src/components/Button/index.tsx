import { ButtonContainer, ButtonLink } from "./styles";

export type ButtonProps = {
  children: string | JSX.Element;
  type: "button" | "link";
  title?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "terciary";
};

const Button = ({
  to,
  type,
  children,
  title,
  onClick,
  variant = "primary",
}: ButtonProps) => {
  if (type === "button") {
    return (
      <ButtonContainer
        variant={variant}
        type="button"
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
