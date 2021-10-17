import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const SignUpCardStyle = makeStyles((theme) => ({
  root: {
    // width: '100%',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
    "& h2": {
      fontSize: "19px",
      letterSpacing: "1px",
    },
  },
  margin: {
    margin: theme.spacing(4),
  },
  withoutLabel: {
    marginTop: theme.spacing(3),
  },
  textField: {
    width: "100%",
    "& p": {
      color: "black",
    },
  },
}));

export default SignUpCardStyle;
