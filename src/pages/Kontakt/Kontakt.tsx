import { Box, Button, Container, Grid, Paper, TextField, TextareaAutosize, Typography } from "@mui/material";
import "./Styles/Contact.scss";

const Kontakt = () => {
  return (
    <Container maxWidth="xl" sx={{ my: 40 }}>
      <Grid
        container
        spacing={{ sm: 12, xs: 20 }}
        sx={{ display: "flex", alignItems: "center" }}
      >
        <Grid item xs={12} sm={6}>
          <Typography
            component="h3"
            variant="h3"
            fontFamily={"'Baloo 2', cursive"}
            textAlign="center"
            fontWeight="500"
            m={2}
          >
            Karta do igraonice
          </Typography>
          <Paper elevation={4} sx={{ p: 4, height: 400, borderRadius: 5 }}>
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d750.6109188707942!2d19.36085141626068!3d44.36521766095769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ssr!2srs!4v1698879896592!5m2!1ssr!2srs"
              loading="lazy"
              sx={{ width: "100%", height: "100%" }}
            />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            component="h3"
            variant="h3"
            fontFamily={"'Baloo 2', cursive"}
            textAlign="center"
            fontWeight="500"
            m={2}
          >
            Kontakt forma
          </Typography>
          <Paper elevation={4} sx={{ p: 2 }}>
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              <TextField
                className="input-form"
                type="text"
                placeholder="Ime i prezime"
                fullWidth
              />
              <TextField
                className="input-form"
                type="email"
                placeholder="Email"
                fullWidth
              />
              <TextareaAutosize
                className="input-form"
                placeholder="Napisite poruku..."
                maxRows={5}
                style={{ height: 100, maxWidth: "99%", minWidth: "99%" }}
              ></TextareaAutosize>
              <Button type="submit">Submit</Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Kontakt;
