import * as React from "react";
import '@fontsource/roboto';
import { Box, Button, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useState } from 'react';


const useStyles = makeStyles({
  fadeIn: {
    transition: 'opacity 1s ease',
  },
  fadeOut: {
    opacity: 0,
    transition: 'opacity 1s ease',
  },
  vanish: {
    opacity: 0,
  },
  center: {
    textAlign: 'center',
  },
  fadeBox: {
    paddingLeft: '5%',
    paddingRight: '5%',
  },
  skipBox: {
    display: 'block',
    position: 'absolute', 
    bottom: 0,
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
    const [showSkip, setShowSkip] = useState(false);
    const [isSkipped, setIsSkipped] = useState(false);

    const { text, onDone } = props;

    function skip() {
      setIsSkipped(true);
      setShowSkip(false);
    }

    React.useEffect(() => {
        const timeout = setInterval(async () => {
          if(!isSkipped) {
            if(currentTextItem === 1) {
              setShowSkip(true);
            }
            if (fadeProp.fade === classes.fadeIn) {
              setFadeProp({
                    fade: classes.fadeOut
              })
              await new Promise(f => setTimeout(f, 1000));
              if(currentTextItem + 1 >= text.length) {
                setShowSkip(false);
                onDone();
                clearInterval(timeout);
              }
              setCurrentTextItem(currentTextItem + 1);
            } else {
                setFadeProp({
                    fade: classes.fadeIn
                })
            }
          } else {
            setFadeProp({
              fade: classes.fadeOut
            })
            await new Promise(f => setTimeout(f, 1000));
            onDone();
            clearInterval(timeout);
          }
        }, 2500);
        return () => clearInterval(timeout)
    }, [fadeProp, classes.fadeIn, classes.fadeOut, currentTextItem, onDone, text.length, isSkipped])

    return (
        <>
          <Box className={classes.fadeBox}>
            <Typography className={fadeProp.fade} variant="h2">{text[currentTextItem]}</Typography>
          </Box>
          {showSkip &&
            <Box className={classes.skipBox}>
              <Button onClick={skip}>skip</Button>
            </Box>
          }
        </>
    )
}

export default Fader;