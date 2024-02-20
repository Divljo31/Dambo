import { Box, Button, Container, Grid, Paper, TextField, TextareaAutosize, Typography } from "@mui/material";
import "./Styles/Contact.scss";

const Kontakt = () => {
  return (
    <Container maxWidth="xl" sx={{mt: "240px"}}>
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
          <Paper
            elevation={4}
            sx={{ p: 2, height: "400px", borderRadius: "20px" }}
          >

            {<Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d750.6109188707942!2d19.36085141626068!3d44.36521766095769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ssr!2srs!4v1698879896592!5m2!1ssr!2srs"
              sx={{ width: "100%", height: "100%", borderRadius: 3 }}
            /> }
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ xs: { width: "1000px" } }}>
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
          <Paper
            elevation={4}
            sx={{ p: 2, borderRadius: "20px", height: "400px" }}
          >
            <Box
              component="form"
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <TextField
                className="input-form"
                type="text"
                placeholder="Ime i prezime"
                fullWidth
                InputProps={{
                  style: {
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  },
                }}
              />
              <TextField type="email" placeholder="Email" fullWidth />
              <TextareaAutosize
                placeholder="Napisite poruku..."
                maxRows={5}
                style={{
                  height: 100,
                  maxWidth: "97.5%",
                  minWidth: "97.5%",
                  fontFamily: "'Baloo 2', cursive",
                  paddingLeft: 12,
                  fontSize: 18,
                  fontWeight: "normal",
                }}
              ></TextareaAutosize>
              <Button type="submit">Submit</Button>
            </Box>
          </Paper>
        </Grid>

        <Grid item>
                
                <Typography
                component="h6"
                variant="h6"
                fontFamily={"'Baloo 2', cursive"}
                >
                  Dambo bar and play
                </Typography>

                <Typography
                component="h6"
                variant="h6"
                fontFamily={"'Baloo 2', cursive"}
                >
                  Jovana Zeljić
                </Typography>

                <Typography
                component="h6"
                variant="h6"
                fontFamily={"'Baloo 2', cursive"}
                >
                  +381 65 9021 992
                </Typography>

                <Typography
                component="h6"
                variant="h6"
                fontFamily={"'Baloo 2', cursive"}
                >
                  Vuka Karadžića 4, 15314 Krupanj
                </Typography>
                <Typography
                component="h6"
                variant="h6"
                fontFamily={"'Baloo 2', cursive"}
                >
                   PIB: Y73Y43278Y4328
                </Typography>
                <Typography
                component="h6"
                variant="h6"
                fontFamily={"'Baloo 2', cursive"}
                >
                  Maticni broj: 5515199
                </Typography>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Kontakt;
