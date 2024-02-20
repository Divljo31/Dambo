import { Container, Grid, Typography } from "@mui/material";
import testONama from "../../assets/testimg.png"

const O_Nama = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 30, mb: 25 }}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item sm={6} xs={12}>
          <Typography variant="h1">O nama</Typography>
          <Typography variant="body1">
          Dambo bar and play je moderna igraonica, čuvaonica i rodjendaonica u malom gradiću Krupanj, 
          a koncept je osmišljen tako da podstiče razvoj, kreativnost i socijalizaciju dece uzrasta do deset godina.
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img src={testONama} style={{ width: "100%" }} />
        </Grid>
      </Grid>
      <Typography
        align="center"
        variant="h6"
        sx={{
          borderLeft: 2,
          borderColor: "green",
          borderWidth: 6,
          borderRadius: 1,
          padding: 2,
          marginTop: 20,
        }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
        sapiente voluptatibus velit sequi eius neque natus fugit officiis
        repudiandae tenetur odit architecto adipisci provident vero consequatur
        ipsa vel nisi dolor possimus ab, illum quae? A cupiditate sapiente
        deleniti maiores laboriosam.
      </Typography>
    </Container>
  );
};

export default O_Nama;
