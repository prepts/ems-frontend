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
import LoginBg from "./../../assets/images/login_bg.png";
import AppLogo from "./../../assets/icons/app_logo.png";
import SharedTextfield from "../../components/SharedTextField";
import SharedButton from "../../components/SharedButton";
import { useState } from "react";
import { AlternateEmail } from "@mui/icons-material";
import { useMediaQuery, useTheme } from "@mui/material";
const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const theme = useTheme()
  const isSmallScreen = useMediaQuery('(max-width: 800px)')
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
                endAdornment={<AlternateEmail />}
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
              <Label  style={{ cursor: "pointer", textAlign: "center", color: theme.palette.primary.main}}>forgot password?</Label>
            </FieldContainer>
            <ButtonContainer>
              <SharedButton
                width="60%"
                type="primary"
                text="Login"
                onClick={() => console.log({ email, password })}
              />
            </ButtonContainer>
          </FieldWrapper>
        </FormContainer>
      </FormWrapper>
    </Wrapper>
  );
};

export default Login;
