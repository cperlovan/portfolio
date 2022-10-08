// pages/_app.js
// import { ChakraProvider } from '@chakra-ui/react'

// 1. Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const style = {
  styles: {
   global: (props) => ({
    "body": {
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        color: "white",
        
    },
    a: {
        color: "violet",
    }, 

    img: {
        border:"5px solid #BDD1EC",
        borderRadius:"10px",
        padding:3,
          

    },
    p: {
        padding:3
    },
    "header": {
        background: "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(12,85,139,1) 51%, rgba(49,55,55,1) 100%) ",
        padding:5,
        borderRadius:"10px",
        height:"540px"
    
        },


   }),
}
}

const theme = extendTheme(style )
export default theme