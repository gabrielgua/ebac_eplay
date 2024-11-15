import { PacmanLoader } from "react-spinners";
import { colors } from "../../styles";
import { SpinnerWrapper } from "./styles";

const Spinner = () => (
  <SpinnerWrapper className="container">
    <PacmanLoader color={colors.green} />
  </SpinnerWrapper>
);

export default Spinner;
