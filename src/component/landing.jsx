import React, { Suspense, lazy, useState, useEffect } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles, fade, useTheme } from "@material-ui/core/styles";
import { motion } from "framer-motion";
import { Typography } from "@material-ui/core";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    NavLink,
    Link,
    Redirect,
  } from "react-router-dom";
 
  import {Example} from './Example';
import image from '../assets/ing.png';
  const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor:"#FAF3FF"
     
    },
    row:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly",
        alignItems:"center"
    },
    text:{
        fontSize:"40px",

    },
    subtext:{
        fontSize:"28px",
        fontWeight:"600",
        margin:'20px auto',
        color:"rgb(101, 32, 120)"
    }
}));
export default function Landing(){
    const classes = useStyles();
    return(
       <div className={classes.root}>
           <Container className={classes.row}>
           <motion.div
 initial={{ y: "-201px", opacity: 0 }}
 transition={{ duration: 1 }}
 animate={{ y: 0, opacity: 1 }}
>
           <img src={image} />
           </motion.div>
           <div>
           <motion.div 
           width={'100%'}
           height={26*1.2}
           initial={{y:26*1.2}}
           overflow={ "hidden" }
           animate={{y:0}}
           transition={{ ease: "easeOut", duration: 0.4 }}>
           <Typography className={classes.text}>
               Hi!
      <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="40px" />
               I am <span style={{color:"rgb(243, 112, 33)"}}>Anushka Singh.</span>
               </Typography>
               </motion.div>
               <motion.div 
           width={'100%'}
           height={26*1.2}
           initial={{y:-26*1.2}}
           overflow={ "hidden" }
           animate={{y:0}}
           transition={{ ease: "easeOut", duration: 0.4 }}>
           <Typography className={classes.text}>
              Certified Skincare Trainer !!
              and an Instagram Infulencer
           </Typography>
           </motion.div>
           </div>
           
           </Container>
           {/* <Container> */}
           <Typography className={classes.subtext}>
             Do have a look at Some of my collaboration's
           </Typography>
           <br/>
           <Example/>
           {/* </Container> */}
           {/* <Example/> */}
       </div>
    )
}