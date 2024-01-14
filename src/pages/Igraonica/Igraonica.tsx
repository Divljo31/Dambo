import { Box, Container, Grid, Typography } from "@mui/material";
import "./Styles/Igraonica.scss";
import rImage from "../../assets/cuvaonica.png";
import priceCard from "../../assets/price-card.png";

const Igraonica = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 40 }}>
      <Grid container alignItems="center" spacing={10}>
        <Grid item md={6}>
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
          <Box component="img" src={rImage} maxWidth="100%" />
        </Grid>
      </Grid>
      <Typography variant="h1" sx={{ mt: 10 }}>
        Cenovnik
      </Typography>
      <Grid container>
        <Grid item sx={{ position: "relative" }}>
          <Box component="img" src={priceCard} maxWidth="100%" />
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

export default Igraonica;
