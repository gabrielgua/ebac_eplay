import { ButtonContainer, ButtonLink } from "./styles";

type ButtonProps = {
  children: string;
  type: "button" | "link";
  title: string;
  to?: string;
  onClick?: () => void;
};

const Button = ({ to, type, children, title, onClick }: ButtonProps) => {
  if (type === "button") {
    return (
      <ButtonContainer type="button" title={title} onClick={onClick}>
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
