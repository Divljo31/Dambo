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
      </Box>
    </Box>
  );
};

export default LandingPage;
