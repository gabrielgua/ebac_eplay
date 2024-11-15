import { ButtonContainer, ButtonLink } from "./styles";

export type ButtonProps = {
  children: string | JSX.Element;
  type: "button" | "link";
  title?: string;
  to?: string;
  onClick?: () => void;
  $variant?: "primary" | "secondary" | "terciary";
  submit?: boolean;
  disabled?: boolean;
};

const Button = ({
  to,
  type,
  children,
  title,
  onClick,
  $variant: variant = "primary",
  submit,
  disabled = false,
}: ButtonProps) => {
  if (type === "button") {
    return (
      <ButtonContainer
        $variant={variant}
        disabled={disabled}
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
