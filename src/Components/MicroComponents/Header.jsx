import { Box, useBreakpointValue, Image, Link} from "@chakra-ui/react"
import Logo from '../../assets/Images/logo.png'
import MenuDrawer from "../MicroComponents/MenuDrawer/MenuDrawer"
export const Header = ()=>{
    const buttonsDisplay = useBreakpointValue({base:'none', md:'none', lg:'inline-flex'})
    const menuDisplay = useBreakpointValue({base:'inline-flex', md:'inline-flex', lg:'none'})
    const padding = useBreakpointValue({base:'0px 5%', md:'0px 5%', lg:'0px 5%', xl:'0px 10%'})
    return(
        <Box zIndex='15' bgColor='rgba(6,9,15,0.2)' backdropFilter="blur(5px)" w='100%' position='fixed' h='10vh' color='textColor.100' display='flex' alignItems='center' justifyContent='space-between' p={padding}>
            <Image h='40%' src={Logo} alt="Logomarca samuel dev"></Image>
            <Box display='inline-flex' gap='40px'>
                <Link display={buttonsDisplay} _hover={{color:'blueGradient.100', opacity:'80%'}} textDecoration='none' href="#inicio" fontWeight='300' fontSize='1.05rem'>Inicio</Link>
                <Link display={buttonsDisplay} _hover={{color:'blueGradient.100', opacity:'80%'}} textDecoration='none' href="#projetos" fontWeight='300' fontSize='1.05rem'>Projetos</Link>
                <Link display={buttonsDisplay} _hover={{color:'blueGradient.100', opacity:'80%'}} textDecoration='none' href="#experiencia" fontWeight='300' fontSize='1.05rem'>Experiência</Link>
                <Link display={buttonsDisplay} _hover={{color:'blueGradient.100', opacity:'80%'}} textDecoration='none' href="#contato" fontWeight='300' fontSize='1.05rem'>Contato</Link>
                <MenuDrawer display={menuDisplay}/>
            </Box>
        </Box>
    )
}
export default Header