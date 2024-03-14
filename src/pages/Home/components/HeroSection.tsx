import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";
import oblaci from "../../../assets/oblaci.svg";

const LandingPage = () => {
  return (
    <Box className="bg-image">
      <Box className="overlay"></Box>
      <Box
        component={motion.div}
        className="landing-page"
        paddingTop={24}
        initial={{
          transform:
            "translateX(10px) translateY(5px) translateZ(15px) rotate(-1deg)",
        }}
        animate={{
          transform:
            "translateX(20px) translateY(15px) translateZ(100px) rotate(1deg)",
        }}
        transition={{
          repeat: Infinity,
          repeatType: "mirror",
          duration: 2,
          ease: "easeInOut",
        }}
        position={"relative"}
      >
        <Box
          component={"img"}
          src={oblaci}
          maxWidth={{ md: 900, sm: 700, xs: 370 }}
        />
        <Typography
          component={motion.h1}
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          position={"absolute"}
          left={{ md: 100, sm: 150, xs: 200 }}
          right={0}
          top={450}
          marginLeft={"auto"}
          marginRight={"auto"}
          maxWidth={800}
          fontSize={{ md: 70, sm: 50, xs: 30 }}
          fontWeight={700}
        >
          DEČIJA IGRAONICA
        </Typography>
        <Typography
          component={motion.h1}
          viewport={{ once: true }}
          initial={{ scale: 0, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ ease: "easeIn", duration: 0.3 }}
          position={"absolute"}
          left={{ md: 100, sm: 180, xs: 200 }}
          right={0}
          bottom={200}
          marginLeft={"auto"}
          marginRight={"auto"}
          maxWidth={800}
          fontSize={{ md: 70, sm: 45, xs: 30 }}
          fontWeight={700}
        >
          DAMBO BAR AND PLAY
        </Typography>
      </Box>
    </Box>
  );
};

export default LandingPage;
