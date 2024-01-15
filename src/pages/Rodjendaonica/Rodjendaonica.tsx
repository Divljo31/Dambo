import { Box, Container, Grid, Typography } from "@mui/material";
import "./Styles/Rodjendaonica.scss";

const Rodjendaonica = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 40 }}>
      <Grid container alignItems="center" spacing={10}>
        <Grid item md={6}>
          <Typography
            variant="h1"
            sx={{ typography: { xs: { fontSize: 60 }, md: { fontSize: 100 } } }}
          >
            Rodjendaonica
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
        <Grid item md={6}>
          <Box component="img" maxWidth="100%" />
        </Grid>
      </Grid>
      <Typography
        variant="h1"
        sx={{
          mt: 10,
          typography: { xs: { fontSize: 60 }, md: { fontSize: 100 } },
        }}
      >
        Cenovnik
      </Typography>
      <Grid container>
        <Grid item sx={{ position: "relative" }}>
          <Box component="img" maxWidth="100%" />
          <Typography
            variant="body1"
            sx={{
              position: "absolute",
              top: 0,
              m: 6,
            }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              position: "absolute",
              right: "30px",
              bottom: "50px",
            }}
          >
            100 Eur
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rodjendaonica;
