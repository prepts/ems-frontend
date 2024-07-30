import { Box, styled } from "@mui/material";

export const Wrapper = styled(Box)(() => ({
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))

export const FormWrapper = styled(Box)(() => ({
    width: "60vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))


export const BgWrapper = styled(Box)(({theme}) => ({
    width: "40vw",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: `1px solid ${theme.palette.primary.light}`,
    borderRadius: "0px 36px 36px 0px",
    borderRightWidth: "5px"
}))

export const Image = styled('img')(() => ({
    width: "80%",
}))
export const LogoContainer = styled(Box)(() => ({
    width: "100%",
    marginBottom: "50px",
    display: "flex",
    justifyContent: "start",
    alignItems: "center",
    flexDirection: "column",
    "@media (max-height: 600px)": {
        marginBottom: "30px",
    }
}))
export const Logo = styled('img')(() => ({
    width: "40%",
}))

export const FormContainer = styled(Box)(() => ({
    width: "50%",
    padding: "20px",
    "@media (max-height: 600px)": {
        padding: "0 20px"
    }
}))
export const TextContainer = styled(Box)(() => ({
    // height: "75px",
}))
export const Title = styled('p')(() => ({
    margin: "0px",
    fontSize: "24px",
    fontFamily: "Noto Sans SC",
    color: "#202046",
    fontWeight: 600,
    lineHeight: "16px"
}))

export const Description = styled('p')(() => ({
    fontSize: "16px",
    fontFamily: "Noto Sans SC",
    color: "#202046",
    fontWeight: 400,
    lineHeight: "16px"
}))
export const Label = styled('p')(() => ({
    fontSize: "16px",
    fontFamily: "Noto Sans SC",
    color: "#202046",
    fontWeight: 600,
    lineHeight: "16px"
}))
export const FieldWrapper = styled(Box)(() => ({
    display: "flex",
    flexDirection: "column",
    gap: "24px"
}))
export const FieldContainer = styled(Box)(() => ({}))
export const ButtonContainer = styled(Box)(() => ({
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
}))