import { Box } from "@mui/material";

const InfoCard = ({
  image,
  heading,
  text,
}: {
  image: any;
  heading: string;
  text: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: 400,
      }}
    >
      <Box component={"img"} src={image} maxWidth={200} />
      <Box className="info-text-wrapper" textAlign={"center"}>
        <h2 className="info-heading">{heading}</h2>
        <p className="text">{text}</p>
      </Box>
    </Box>
  );
};

export default InfoCard;
