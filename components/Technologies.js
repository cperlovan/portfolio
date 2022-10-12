import React from "react";
import {
  Grid, 
  GridItem,
  Heading,
  VStack,
  HStack,
  Image,
  Stack,
  Wrap,
  WrapItem,
  Center
} from '@chakra-ui/react'

import style from './Technologies.module.css'
export default function About(){

    return (

<div class="chart-wrap">
<div className={style.title} bg="#F9F9F9">
          Technologies
        </div>
  <Grid
      gridTemplateRows={'100px 4fr 30px'}
      gridTemplateColumns={'fix-content 2fr'}
      h="90%"
      gap="1"
      color="blackAlpha.700"
    >
    <GridItem
        pl="5"
       
        area={'header'}
        align="center"
      >
        <HStack color="#BDD1EC">
          <Stack direction="column" pb={3}>
            <Wrap spacing={3} align='center'>
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='150px'
                    objectFit='cover'
                    src= 'w3_html5-ar21.svg'
                    alt='HTML5'
                  />
              </WrapItem> 
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='150px'
                    objectFit='cover'
                    src= 'w3_css-ar21.svg'
                    alt='CSS3'
                  />
              </WrapItem> 
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width="150"
                    objectFit='cover'
                    src= 'visualstudio_code-ar21.svg'
                    alt='Visual Studio Code'
                  />
              </WrapItem> 
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    objectFit='cover'
                    src= 'sequelizejs-ar21.svg'
                    alt='Dogs Life'
                    title="HTML5"
                  />
              </WrapItem> 
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    objectFit='cover'
                    src= 'javascript-ar21.svg'
                    alt='Javascript'
                    title="Javascript"
                  />
              </WrapItem> 
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    objectFit='cover'
                    src= 'getbootstrap-ar21.svg'
                    alt='Bootstrap'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    objectFit='cover'
                    src= 'php-ar21.svg'
                    alt='php'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    objectFit='contain'
                    src= 'reactjs-ar21.svg'
                    alt='React'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    src= 'https://raw.githubusercontent.com/prplx/svg-logos/master/svg/redux.svg'
                    alt='PHP'
                    title="PHP"
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#ffffff'
                    boxSize='100px'
                    width='170px'
                    src= 'expressjs-ar21.svg'
                    alt='Express'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'oracle-ar21.svg'
                    alt='Oracle'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'postgresql-ar21.svg'
                    alt='Postgresql'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'mariadb-ar21.svg'
                    alt='MariaDB'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'sqlite-ar21.svg'
                    alt='SQLite'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'laravel-ar21.svg'
                    alt='Laravel'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'symfony-ar21.svg'
                    alt='Symfony'
                  />
              </WrapItem>
              <WrapItem>
                  <Image
                    bg='#e9e9e9'
                    boxSize='100px'
                    width='170px'
                    src= 'doctrine.png'
                    alt='Doctrine'
                  />
              </WrapItem>
              
              
            </Wrap>
          </Stack>
        </HStack>
  
      </GridItem>
  

  </Grid>

</div>
)
}