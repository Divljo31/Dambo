import lion from "../../../assets/Lav.svg";
import elephant from "../../../assets/Slon.svg";
import fox from "../../../assets/Lisica.svg";
import BasicDateCalendar from "./Calendar";
import { motion } from "framer-motion";
import { Box, Grid, Typography } from "@mui/material";
import InfoCard from "./InfoCard";

const InfoSection = () => {
  return (
    <Grid
      container
      spacing={4}
      marginTop={5}
      justifyContent={"center"}
      rowSpacing={10}
    >
      <Grid
        item
        md={4}
        component={motion.div}
        transition={{ ease: "easeOut", duration: 0.65 }}
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <InfoCard
          image={lion}
          heading={"Caffe bar"}
          text={"Odvojen kutak u kome uživaju roditelji."}
        />
      </Grid>
      <Grid
        item
        md={4}
        component={motion.div}
        transition={{ ease: "easeOut", duration: 0.65 }}
        initial={{ x: -400, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <InfoCard
          image={elephant}
          heading={"Čuvaonica"}
          text={
            'Čuvaonica "Dambo" je mesto gde možete dovesti Vaše dete i biti uvereni da je u sigurnom, prijatnom i kreativnom okruženju...'
          }
        />
      </Grid>
      <Grid
        item
        md={4}
        component={motion.div}
        transition={{ ease: "easeOut", duration: 0.65 }}
        initial={{ x: -600, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
      >
        <InfoCard
          image={fox}
          heading={"Rođendaonica"}
          text={
            'Ukoliko Vi i Vaše dete želite kreativnu i nesvakidašnju proslavu rođendana, "Dambo" je pravo mesto za vas...'
          }
        />
      </Grid>
      <Grid item md={6} paddingLeft={0}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            padding: 5,
            gap: 6,
            backgroundColor: "#d7f5fa",
            borderRadius: 6,
            boxShadow: 10,
          }}
        >
          <Typography component="h3" variant="h3" textAlign="center">
            RADNO VREME
          </Typography>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography component="h4" variant="h4" fontWeight="600">
              PON - PET
            </Typography>
            <Typography component="h4" variant="h4" fontWeight="600">
              12:00 - 20:00
            </Typography>
          </Box>
          <Box
            component="div"
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography component="h4" variant="h4" fontWeight="600">
              VIKENDOM
            </Typography>
            <Typography component="h4" variant="h4" fontWeight="600">
              10:00 - 21:00
            </Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item md={6}>
        <Box className="calendar-div">
          <BasicDateCalendar />
        </Box>
      </Grid>
    </Grid>
  );
};

export default InfoSection;
