import { Grid, Image } from '@chakra-ui/react'
import React from "react";
import style from "./Projects.module.css"

export default function About(){

return (
    <Grid>
            <div className={style.title} bg="#F9F9F9">My Projects</div>
            <Image
                boxSize='200px'
                borderRadius='full'
                src= 'logoCane.png'
                alt='Cane-food'
                />
            <p className={style.subtitle}>Final Project 
                </p>
            <p className={style.subtitle}>Bootcamp Soy Henry
                </p>

            <br />

                <Image
                boxSize='200px'
                borderRadius='full'
                src= 'huella.png'
                alt='Dogs Life'
                />
            <p className={style.subtitle}>Individual Project
                </p>
                <p className={style.subtitle}>Bootcamp Soy Henry
                </p>

        </Grid>
)
}