import { Box, Button, Card, styled } from "@mui/material";
import { H1, Paragraph } from "components/Typography";
import { FC } from "react";

// styled components
const StyledCard = styled(Card)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 3rem",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column-reverse",
    padding: "2rem",
    "& img": { marginBottom: "1.5rem" },
  },
}));

// component props interface
interface FooterProps {
  imageLink: string;
}

const Footer: FC<FooterProps> = ({ imageLink }) => {
  return (
    <StyledCard>
      <Box>
        <H1 fontSize={24}>Reverse Engineering Infosec </H1>
        <Paragraph fontSize={13} color="secondary.400" fontWeight="500">
          We help to defend against advanced threats and protect your business with a SOC as a service solution from Reinfosec
        </Paragraph>
        <Button variant="contained" size="small" sx={{ mt: "2rem" }}>
          Visit
        </Button>
      </Box>

      <Box>
        <img src={imageLink} alt="saas-dasboard-footer" />
      </Box>
    </StyledCard>
  );
};

export default Footer;
