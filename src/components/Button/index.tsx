import { ButtonContainer, ButtonLink } from "./styles";

export type ButtonProps = {
  children: string;
  type: "button" | "link";
  title?: string;
  to?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
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
        title={title ? title : children}
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
