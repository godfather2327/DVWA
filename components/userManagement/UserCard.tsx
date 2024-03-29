import { Box, Button, Card, Divider, Grid, styled } from "@mui/material";
import { H6, Tiny } from "components/Typography";
import UkoAvatar from "components/UkoAvatar";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

// component props interface
interface UserCardProps {
  user: {
    cover: string;
    avatar: string;
    name: string;
    position: string;
    // post: number;
    // follower: number;
    // following: number;
  };
}
// styled components
const ImageWrapper = styled(Box)(({ theme }) => ({
  height: 100,
  position: "relative",
  "&::before": {
    content: '""',
    width: "100%",
    height: "100%",
    left: 0,
    top: 0,
    position: "absolute",
    opacity: 0.6,
    backgroundColor: theme.palette.primary[100],
  },
}));

const StyledAvatar = styled(UkoAvatar)(({ theme }) => ({
  zIndex: 1,
  width: 50,
  height: 50,
  bottom: -25,
  position: "absolute",
  left: "50%",
  right: "50%",
  transform: "translateX(-50%)",
  border: "2px solid",
  borderColor: theme.palette.background.paper,
}));

const UserCard: FC<UserCardProps> = ({ user }) => {
  const handleLabbrute = () =>
    (window.location.href = "http://localhost/dvwa/vulnerabilities/brute/");
  let navigate = useNavigate();

  const handleQuiz = () => {
    navigate("/quiz");
  };

  const handleTheory = () => {
    navigate("/theory");
  };

  return (
    <Card>
      <ImageWrapper>
        <img src={user.cover} width="100%" height="100%" alt={user.name} />

        <StyledAvatar src={user.avatar} alt={user.name} />
      </ImageWrapper>

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          marginTop: 5,
        }}
      >
        <H6>{user.name}</H6>
        <Tiny color="text.disabled" fontWeight={500}>
          {user.position}
        </Tiny>

        {/* <Box marginTop={2}>
          <IconButton>
            <img src="/static/social-media/facebook.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="/static/social-media/twitter.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="/static/social-media/instagram.svg" alt="" />
          </IconButton>
          <IconButton>
            <img src="/static/social-media/dribble.svg" alt="" />
          </IconButton>
        </Box> */}
      </Box>

      <Divider sx={{ my: 2 }} />

      <Grid container spacing={3} mb={2}>
        <Grid item xs={4} textAlign="center">
          <Button variant="contained" onClick={handleTheory}>
            Theory
          </Button>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Button variant="contained" onClick={handleLabbrute}>
            Labs
          </Button>
        </Grid>
        <Grid item xs={4} textAlign="center">
          <Button variant="contained" onClick={handleQuiz}>
            Quiz
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default UserCard;
