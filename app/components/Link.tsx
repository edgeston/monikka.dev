import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

interface LinkProps {
  linkName: string;
  href: string;
}

export default function Links(props: LinkProps) {
  return (
    <Box sx={{ typography: "body1" }}>
      <Link color="inherit" underline="none" fontSize="22px" href={props.href}>
        {props.linkName}
      </Link>
    </Box>
  );
}
