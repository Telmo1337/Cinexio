import { BackgroundImage } from "@mantine/core";

import RegisterForm from "./RegisterForm";
import useRegister from "./useRegister";

import registerImg from "../../../../assets/loginImg.jpg";

const RegisterPage = () => {
  const { register} = useRegister();

  return (
    <BackgroundImage
      src={registerImg}
      h="100vh"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        boxShadow: "0 0 300px rgba(0,0,0,0.1) inset",
        backgroundColor: "rgba(0,0,0,0.5)",
        backgroundBlendMode: "multiply",
      }}
    >
      <RegisterForm onSubmit={register} />
    </BackgroundImage>
  );
};

export default RegisterPage;
