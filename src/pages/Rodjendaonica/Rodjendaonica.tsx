import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import "./Styles/Rodjendaonica.scss";
import rImage from "../../assets/cuvaonica.png";

const Rodjendaonica = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 30 }}>
      <Grid container alignItems="center" spacing={10}>
        <Grid item md={6} sm={12}>
          <Typography
            variant="h1"
            gutterBottom
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
        <Grid item sx={{ margin: "0 auto" }}>
          <Card
            sx={{
              maxWidth: 666,
              height: 222,
              borderRadius: 10,
              padding: 2,
              backgroundColor: "#FFE7CC",
              color: "#32355d",
              position: "relative"
            }}
          >
            <CardContent >
              <Typography gutterBottom variant="h3">
                Rodjendaonica
              </Typography>
              <Typography variant="body1">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography variant="h5" sx={{ position: "absolute" , bottom: 22 }}>100 eur</Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Rodjendaonica;
