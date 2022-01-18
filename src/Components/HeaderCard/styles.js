import { makeStyles } from "@material-ui/core";
import { cardProperties } from "../../Constants/constantProperties";

export default makeStyles(() => ({
  headerCardStyle: {
    ...cardProperties,
    boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
    // paddingLeft: "10px",
    // paddingRight: "10px",
  },
  //   headingStyle: {
  //     fontSize: "1.5rem",
  //     fontWeight: "550",
  //     color: "rgba(0, 0, 0, 0.7)",
  //   },
  headingStylesss: {
    "& span": {
      fontSize: "1.5rem",
      fontWeight: "550",
      color: "rgba(0, 0, 0, 0.7)",
    },
    "& p": {
      fontSize: "1rem",
      fontWeight: "600",
    },
  },
  headerIcons: {
    color: "rgba(25, 118, 210, 1)",
  },
}));
