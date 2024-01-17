import { Box, Container, Grid, Typography } from "@mui/material";

const O_Nama = () => {
  return (
    <Container maxWidth="xl" sx={{ mt: 30, mb: 25 }}>
      <Grid container spacing={2} alignItems={"center"}>
        <Grid item sm={6} xs={12}>
          <Typography variant="h1">adsadsads</Typography>
          <Typography variant="body1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam,
            corrupti. Harum eaque architecto sequi necessitatibus culpa ex non
            tenetur maiores? Illo voluptatum autem aspernatur repudiandae
            reiciendis laudantium. Vitae nobis sequi mollitia cupiditate dolor
            vero, quae tempora eius fugit, ad repellat assumenda obcaecati
            cumque, modi illo minus! Id eos facilis corrupti.
          </Typography>
        </Grid>
        <Grid item sm={6} xs={12}>
          <img src="src\assets\testimg.png" style={{ width: "100%" }} />
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
