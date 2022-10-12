import {
  Grid,
  GridItem,
  Heading,
  VStack,
  Image,
  Stack,
  Button,
  Wrap,
  WrapItem,
} from '@chakra-ui/react'
import Head from 'next/head'
// import {carne} from '../public/carne'
import styles from '/styles/Home.module.css'
import theme from '@/styles/theme'
import About from '@/components/About'
import Projects from '@/components/Projects'

import { BsLinkedin } from 'react-icons/bs'
import { SiGmail } from 'react-icons/si'
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaTwitterSquare,
  FaWhatsappSquare
} from 'react-icons/fa'

export default function Home() {
  return (
    <Grid
      bg="linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,85,139,1) 51%, rgba(49,55,55,1) 100%)"
      templateAreas={`"header header"
                  "nav main"
                  "nav footer"`}
      gridTemplateRows={'fix-content 1fr 60px'}
      gridTemplateColumns={'fix-content 1fr'}
      h="90%"
      gap="1"
      color="blackAlpha.700"
    >
      <GridItem
        pl="5"
       
        area={'header'}
        align="center"
      >
        <Image
          boxSize="200px 400px"
          objectFit="cover"
          src="./banner.png"
          alt="Carlos Pérez Lobo"
          p="3"
          mt="5"
        />
        <VStack color="#BDD1EC">
          <Heading>
            <p className={theme.heading}>My portfolio</p>
          </Heading>
          <Stack direction="column" pb={3}>
            <Wrap spacing={4}>
              <WrapItem>
                <Button colorScheme="gray">
                  <FaGithubSquare />
                </Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="linkedin">
                  <BsLinkedin />
                </Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="facebook">
                  <FaFacebookSquare />
                </Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="whatsapp">
                  <FaWhatsappSquare />
                </Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="twitter">
                  <FaTwitterSquare />
                </Button>
              </WrapItem>
              <WrapItem>
                <Button colorScheme="gmail">
                  <SiGmail />
                </Button>
              </WrapItem>
            </Wrap>
          </Stack>
        </VStack>
      </GridItem>
      <GridItem pl="2" bg="transparent"  area={'nav'}>
        <Projects></Projects>
      </GridItem>
      <GridItem pl="2" bg="transparent"   area={'main'}>
        <About></About> 
      </GridItem>
    

      <GridItem pl="2" bg="transparent"  color="white" area={'footer'}>
      <p>My Portfolio  - &copy; 2022</p>
      </GridItem>
    </Grid>
  )
}
