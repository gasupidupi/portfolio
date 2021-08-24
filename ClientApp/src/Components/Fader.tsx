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
  center: {
    textAlign: 'center',
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
    const [showSkip, setShowSkip] = useState(true);

    const { text, onDone } = props;

    function skip() {
      setFadeProp({
        fade: classes.fadeOut
     });
      setShowSkip(false);
      setCurrentTextItem(text.length);
      onDone();
    }

    React.useEffect(() => {
        const timeout = setInterval(async () => {
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
        }, 2500);
        return () => clearInterval(timeout)
    }, [fadeProp])

    return (
        <>
          <Typography className={fadeProp.fade} variant="h2">{text[currentTextItem]}</Typography>
          {showSkip &&
            <Box className={classes.center}>
              <Button onClick={skip}>skip</Button>
            </Box>
          }
        </>
    )
}

export default Fader;