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
          I dok mališani uživaju u programu, roditeljima nudimo izuzetan ketering i izbor najkvalitetnijih pića. 
          Smestite se udobno u prostoru Dambo bar-a, u bašti, za šankom ili stolovima opremljenim za rad na laptopu, 
          i vreme će za vas proteći jednako brzo i kvalitetno kao za vaše dete. Roditeljima je na raspolaganju i usluga čuvanja dece na sat, sa ili bez njihovog prisustva.
          U ponudi imamo povoljne mesečne pakete za čuvaonicu koji donose značajne popuste
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
        Dambo je naš mali san pretočen u stvarnost. Pored igraonice za decu, sjajnih igara I prostora inspirisanog prirodom, obezbedili smo I kutak za odrasle gde se možete opustiti uz sjajnu kafu, ili završiti I poslovne obaveze dok se deca zabavljaju pod nadzorom stručnog tima. 

      </Typography>
    </Container>
  );
};

export default O_Nama;
