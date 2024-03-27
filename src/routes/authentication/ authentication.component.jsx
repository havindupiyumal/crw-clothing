import "./authentication.styles.scss";

import { SignIn } from "../../components/sign-in/sign-in.component";
import { SignUp } from "../../components/sign-up/sign-up.component";

export const Authentication = () => {
  return (
    <div>
      <SignIn />
      <SignUp />
    </div>
  );
};
