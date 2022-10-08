import {
  Grid,
  Image,
  Container,

} from '@chakra-ui/react'
import React from 'react'
import style from './About.module.css'
export default function About() {
  return (
    <div className={style.main}>
      <Grid>
        <div className={style.title} bg="#F9F9F9">
          About Me
        </div>

        <Container>
          <Image
            borderRadius="full"
            boxSize="150px"
            src="/carne.png"
            alt="Carlos Pérez"
          />
        </Container>
        <p className={style.text}>
          Hello, I&apos;m Carlos Pérez, a FULL STACK DEVELOPER with more than 10 year
          of experience in the industry. In these years I have dedicate myself
          to offering tailor-made solutions to management problems, I have
          worked on different platforms with various programming languages which
          has led me to countless applications using this technology and
          integrating other knowledge with PHP Symfony, doctrine, Oracle, SQL
          Server, MariaDB. And all this has been, with creative thinking,
          problem solving, multidisciplinary teamwork, effective communication
          and autonomy.
        </p>
      </Grid>
      
    </div>
  )
}
