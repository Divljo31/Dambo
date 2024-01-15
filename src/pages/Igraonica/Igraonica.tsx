import { Box, Container, Grid, Typography } from "@mui/material";
import "./Styles/Igraonica.scss";
import rImage from "../../assets/cuvaonica.png";

const Igraonica = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 30 }}>
      <Grid container alignItems="center" spacing={10}>
        <Grid item md={6} sm={12}>
          <Typography
            variant="h1"
            sx={{ typography: { xs: { fontSize: 60 }, md: { fontSize: 100 } } }}
          >
            Igraonica
          </Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro
            molestias quibusdam unde, reiciendis repellat libero omnis modi quae
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro
            molestias quibusdam unde, reiciendis repellat libero omnis modi quae
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod porro
            molestias quibusdam unde, reiciendis repellat libero omnis modi quae
            et. et. et. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quod porro molestias quibusdam unde, reiciendis repellat libero
            omnis modi quae et.
          </Typography>
        </Grid>
        <Grid item md={6} sm={12}>
          <Box component="img" src={rImage} maxWidth="100%" />
        </Grid>
      </Grid>
      <Typography
        variant="h1"
        sx={{
          mt: 10,
          typography: { xs: { fontSize: 60 }, md: { fontSize: 100 } },
        }}
        textAlign="center"
      >
        Cenovnik
      </Typography>
      <Grid container>
        <Grid item sx={{ position: "relative" }}>
          <Box component="img" maxWidth="100%" />
          <Typography
            variant="body1"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography
            variant="h5"
          >
            100 Eur
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Igraonica;
