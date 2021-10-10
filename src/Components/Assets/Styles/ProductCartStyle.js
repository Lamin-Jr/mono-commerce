import { makeStyles } from "@material-ui/core/styles";

const ProductCartStyle = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
    padding: "70px 80px",
    [theme.breakpoints.down("md")]: {
      padding: "20px 30px",
    },
  },
  gridList: {
    width: "100%",
    height: "626px",
    transform: "translateZ(0)",
    "& li": {
      width: "25% !important",
      height: "100% !important",
      padding: 0,
    },
    [theme.breakpoints.down("md")]: {
      width: "98%",
      height: "auto",
      "& li": {
        width: "49% !important",
        height: "70vh !important",
        margin: 2,
        padding: 0,
      },
    },
  },
  sigleProductDis: {
    height: "100%",
  },
  titleBar: {
    backgroundColor: "transparent",
    height: "auto !important",
    right: "0 !important",
    "& :hover": {
      backgroundColor: "red",
      left: "auto !important",
      height: "auto !important",
      right: "0 !important",
    },
  },
  addToBagBtnDivHide: {
    display: "none",
    position: "absolute",
    top: "0",
    right: "0",
    margin: "10px",
  },
  addToBagBtnDivShow: {
    display: "flex",
    position: "absolute",
    top: "0",
    right: "0",
    margin: "10px",
    "& :hover": {
      backgroundColor: "gray",
    },
  },
  addToBagBtn: {
    backgroundColor: "white",
    borderColor: "white",
    borderStyle: "none",
    display: "flex",
    alignItems: "center",
    padding: "10px 15px ",
    fontSize: "10px",
    fontWeight: "normal",
    "& svg": {
      height: "14.63px",
      width: "13.5px",
      paddingRight: "10px",
    },
  },
  divTitle: {
    width: "98%",
    display: "flex",
    justifyContent: "flex-start",
    marginBottom: "20px",
  },
}));

export default ProductCartStyle;
