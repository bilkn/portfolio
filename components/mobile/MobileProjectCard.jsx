import React from "react";

function MobileProjectCard(props) {
  const { name, img } = props;

  return (
    <Card sx={{ position: "relative" }}>
      <CardHeader
        subheader={"text"}
        sx={{ position: "absolute", width: "100%" }}
      >
        {/*     {techStack.map((name) => (
          <Box>
            <img src={techStackLogoMapping[name]} alt={name} />
          </Box>
        ))} */}
        <Typography sx={{ textAlign: "center" }}>{name}</Typography>
      </CardHeader>
      <Box>
        <img className={css``} src={img} />
      </Box>
      <CardContent
        sx={{
          "&&": {
            py: 0,
          },
        }}
      >
          </CardContent>
    </Card>
  );
}

export default MobileProjectCard;
