import React from "react";
import {
  ListSubheader,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core/";

//Style Import
import FootersLinksCardStyle from "../../Styles/FootersLinksCardStyle";

export default function NestedList(props) {
  const classes = FootersLinksCardStyle();

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="div"
          id="nested-list-subheader"
          className={classes.Title}
        >
          {props.Title}
        </ListSubheader>
      }
      className={classes.root}
    >
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link1Icon}
        </ListItemIcon>
        <ListItemText>{props.Link1}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link2aIcon}
        </ListItemIcon>
        <ListItemText>{props.Link2}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link3Icon}
        </ListItemIcon>
        <ListItemText>{props.Link3}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link4Icon}
        </ListItemIcon>
        <ListItemText>{props.Link4}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link6Icon}
        </ListItemIcon>
        <ListItemText>{props.Link6}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link7Icon}
        </ListItemIcon>
        <ListItemText>{props.Link7}</ListItemText>
      </ListItem>
      <ListItem button>
        <ListItemIcon className={classes.LinkIcon}>
          {props.Link8Icon}
        </ListItemIcon>
        <ListItemText>{props.Link8}</ListItemText>
      </ListItem>
    </List>
  );
}
