import * as React from "react";
import logo from './logo.svg';
import ReactDOM from 'react-dom';
import '@fontsource/roboto';
import { Typography, Button, Grid, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';
import { useHistory, Switch, Route } from "react-router-dom";
import PropTypes from 'prop-types';


const useStyles = makeStyles({
  fadeIn: {
    transition: 'opacity 1s ease',
  },
  fadeOut: {
    opacity: 0,
    transition: 'opacity 1s ease',
  },
});

type FaderProps = {
    text: string[];
    onDone: () => void;
};

export const Fader: React.FC<FaderProps> = (props) => {

    const classes = useStyles();

    Fader.defaultProps = {
        text: ['Hello World!'],
    }

    const [fadeProp, setFadeProp] = useState({
        fade: classes.fadeIn,
    });

    const [currentTextItem, setCurrentTextItem] = useState(0);

    const { text, onDone } = props;

    React.useEffect(() => {
        const timeout = setInterval(async () => {
           if (fadeProp.fade === classes.fadeIn) {
              setFadeProp({
                   fade: classes.fadeOut
              })
              await new Promise(f => setTimeout(f, 1000));
              if(currentTextItem + 1 == text.length) {
                onDone();
                clearInterval(timeout);
              }
              setCurrentTextItem(currentTextItem + 1);
           } else {
                setFadeProp({
                   fade: classes.fadeIn
                })
           }
        }, 2500);
        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <>
            <Typography className={fadeProp.fade} variant="h2">{text[currentTextItem]}</Typography>
        </>
    )
}

export default Fader;