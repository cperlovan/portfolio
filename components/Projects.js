import { Grid, Image } from '@chakra-ui/react'
import React from "react";
import style from "./Projects.module.css"

export default function About(){

return (
    <Grid>
            <div className={style.title} bg="#F9F9F9">My Projects</div>
            <Image
                boxSize='200px'
                objectFit='cover'
                src= 'cane.png'
                alt='Cane-food'
                />
            <p className={style.subtitle}>Final Project - Bootcamp Soy Henry
                </p>

                <hr />

                <Image
                boxSize='200px'
                objectFit='cover'
                src= 'dogs.png'
                alt='Dogs Life'
                />
            <p className={style.subtitle}>Individual Project - Bootcamp Soy Henry
                </p>

        </Grid>
)
}