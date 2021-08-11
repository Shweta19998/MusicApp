import React from "react";
import "./Footer.css";
// for center
import ShuffleIcon from "@material-ui/icons/Shuffle";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import PlayCircleOutlineOutlinedIcon from "@material-ui/icons/PlayCircleOutlineOutlined";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
// for right side
import { Grid, Slider } from "@material-ui/core";
import QueueMusicSharpIcon from "@material-ui/icons/QueueMusicSharp";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
//for left side

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src="" alt="" />
        <div className="footer__songInfo">
          <h4>Song Name</h4>
          <p>Singer Name</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineOutlinedIcon
          fontSize="large"
          className="footer__icon"
        />
        <SkipNextIcon className="footer__icon" />
        <RepeatRoundedIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <QueueMusicSharpIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
