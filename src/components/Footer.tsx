import {
  Box,
  Container,
  Grid,
  TextField,
  TextareaAutosize,
} from "@mui/material";
import React, { useRef } from "react";
import dumbo from "../assets/dumbo.png";
import igLogo from "../assets/instagram.png";
import fbLogo from "../assets/facebook.png";
import waLogo from "../assets/whatsapp.png";
import viLogo from "../assets/viber.png";
import Button from "@mui/material/Button";
import emailjs from "@emailjs/browser";
import "../styles/Footer.scss";

const Footer = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        form.current!,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Box component="footer" sx={{ marginTop: "100px" }}>
      <Container maxWidth="md">
        <Grid
          container
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 5,
          }}
        >
          <Grid item className="left-section" sm={6}>
            <div className="brand-info">
              <img src={dumbo} className="footer-logo" />
              <p>Dambo</p>
              <p>&copy; Bar & Play</p>
              <p>Telefon: +381 65 9021 992</p>
            </div>
            <div className="social-icons">
              <a href="#" className="icon">
                <img src={igLogo} className="social-icon" />
              </a>
              <a href="#" className="icon">
                <img src={fbLogo} className="social-icon" />
              </a>
              <a href="#" className="icon">
                <img src={waLogo} className="social-icon" />
              </a>
              <a href="#" className="icon">
                <img src={viLogo} className="social-icon" />
              </a>
            </div>
          </Grid>
          <Grid
            item
            className="right-section"
            sm={6}
            sx={{
              display: "flex",
              alignItems: "end",
              flexDirection: "column",
            }}
          >
            <Box
              component="form"
              ref={form}
              onSubmit={sendEmail}
              sx={{
                display: "flex",
                alignItems: "end",
                flexDirection: "column",
                gap: 2,
                width: "330px",
              }}
            >
              <TextField
                className="white-border"
                id="filled-basic"
                type="email"
                name="user_email"
                label="Email"
                variant="filled"
                sx={{ width: "100%" }}
              />
              <TextField
                className="white-border"
                id="filled-basic"
                type="text"
                name="user_name"
                label="Ime i Prezime"
                variant="filled"
                sx={{ width: "100%" }}
              />
              <TextareaAutosize
                className="input-form"
                placeholder="Napisite poruku..."
                maxRows={5}
                name="message"
                style={{ height: 100, width: "98%" }}
              />
              <Button type="submit" variant="contained">
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
