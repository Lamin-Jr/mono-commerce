import React from "react";
import clsx from "clsx";
import {
  Input,
  InputLabel,
  InputAdornment,
  FormControl,
} from "@material-ui/core/";

//Style Import
import SignUpCardStyle from "../../Styles/SignUpCardStyle";

export default function InputAdornments() {
  const classes = SignUpCardStyle();

  return (
    <div className={classes.root}>
      <h2>SIGN UP FOR UPDATE </h2>
      <p>Sign up for exclusive early sale access and tailored new arrivals</p>
      <FormControl className={clsx(classes.margin, classes.textField)}>
        <InputLabel htmlFor="standard-adornment-password">
          Your email address
        </InputLabel>
        <Input
          id="standard-adornment-password"
          endAdornment={<InputAdornment position="end">JOIN</InputAdornment>}
        />
      </FormControl>
    </div>
  );
}
