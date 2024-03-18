import { Box, Card, CardContent, Container, Grid, Typography } from "@mui/material";
import "./Styles/Igraonica.scss";
import rImage from "../../assets/cuvaonica.png";

const Igraonica = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 30 }}>
      <Grid container alignItems="center" spacing={10}>
        <Grid item md={6} sm={12}>
          <Typography
            variant="h1"
            gutterBottom
            sx={{ typography: { xs: { fontSize: 60 }, md: { fontSize: 100 } } }}
          >
            Igraonica
          </Typography>
          <Typography variant="body1">
          Kada jednom dožive zabavu u Dambo igraonici, vaši mališani tražiće da ih dovodite iznova i iznova! 
          Bilo da dolazite sami ili sa drugarima, Dambo garantuje nezaboravnu zabavu i druženje, jer naš zadatak je da svakom detetu poseta 
          bude prava mala avanutra. Dambo je igraonica za decu koja vole da se upoznaju sa novim drugarima, da probaju raznovrsne igre i da nauče nešto novo kroz igru, 
          kao i za roditelje koji žele da budu bezbrižni, znajući da je njihovo dete u rukama iskusnih animatora.
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
              position: "relative",
            }}
          >
            <CardContent>
              <Typography gutterBottom variant="h3">
                Rodjendaonica
              </Typography>
              <Typography variant="body1">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
              <Typography
                variant="h5"
                sx={{ position: "absolute", bottom: 22 }}
              >
                100 eur
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Igraonica;
