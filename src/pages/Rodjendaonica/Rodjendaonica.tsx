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
          Dečiji rođendani u našoj igraonici prilagođavaju se željama i potrebama dece i roditelja. Uvek kreiramo proslavu koja će biti po mnogo čemu posebna, 
          a naše osoblje garantuje da će svaki naš gost biti obasut pažnjom i uslužen kao član porodice. Organizujemo sadržajne tematske animacije dece i naš zadatak 
          nije samo da ih zabavimo već se uvek trudimo da ih kroz animaciju nečemu lepom naučimo. Naš tim poseduje višegodišnje iskustvo u kompletnoj organizaciji različitih događaja uz tematsku dekoraciju. Zato smo uvereni da ćemo ispuniti, 
          kako želje vaših mališana, tako i vaše!
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
