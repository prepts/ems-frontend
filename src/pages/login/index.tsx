import {
  BgWrapper,
  ButtonContainer,
  Description,
  FieldContainer,
  FieldWrapper,
  FormContainer,
  FormWrapper,
  Image,
  Label,
  Logo,
  LogoContainer,
  TextContainer,
  Title,
  Wrapper,
} from "./login.styled";
import LoginBg from "./../../assets/images/login_bg_new.png";
import AppLogo from "./../../assets/icons/Synergech_logo.png";
import SharedTextfield from "../../components/SharedTextField";
import SharedButton from "../../components/SharedButton";
import { useState } from "react";
import { Email } from "@mui/icons-material";
import { useMediaQuery } from "@mui/material";
import { customAxios } from "../../api/axios";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const isSmallScreen = useMediaQuery('(max-width: 800px)')

  const handleLogin = () => {
    customAxios.post("/api/Authentication/Login", { params: { emailId: email, password } })
  }
  return (
    <Wrapper>
      {!isSmallScreen && (
      <BgWrapper>
        <Image src={LoginBg} alt="login-bg" />
      </BgWrapper>
      )}
      <FormWrapper style={{width: isSmallScreen ? "100vw" : ""}}>
        <FormContainer style={{width: isSmallScreen ? "100%" : ""}}>
          <LogoContainer>
            <Logo src={AppLogo} alt="login-bg" />
          </LogoContainer>
          <TextContainer>
            <Title>Welcome back!</Title>
            <Description>
              Enter your credentials to access your account
            </Description>
          </TextContainer>
          <FieldWrapper>
            <FieldContainer>
              <Label>Email</Label>
              <SharedTextfield
                type="text"
                endAdornment={<Email sx={{width: "75%"}} />}
                width="100%"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Label>Password</Label>
              <SharedTextfield
                type="password"
                width="100%"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </FieldContainer>
            <ButtonContainer>
              <SharedButton
                width="50%"
                height="45px"
                type="primary"
                text="Login"
                onClick={handleLogin}
              />
            </ButtonContainer>
          </FieldWrapper>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
