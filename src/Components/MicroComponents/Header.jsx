import { Box, useBreakpointValue, Image, Link} from "@chakra-ui/react"
import Logo from '../../assets/Images/logo.png'
import MenuDrawer from "../MicroComponents/MenuDrawer/MenuDrawer"

export const links = [
    {text: 'Inicio', href: '#inicio'},
    {text: 'Projetos', href: '#projetos'},
    {text: 'Experiência', href: '#experiencia'},
    {text: 'Contato', href: '#contato'},
    {text: 'Blog', href: '#inicio'},
]

export const Header = ()=>{
    const buttonsDisplay = useBreakpointValue({base:'none', md:'none', lg:'inline-flex'})
    const menuDisplay = useBreakpointValue({base:'inline-flex', md:'inline-flex', lg:'none'})
    const padding = useBreakpointValue({base:'0px 5%', md:'0px 5%', lg:'0px 5%', xl:'0px 10%'})
    const handleClick = ()=>{
        window.scrollTo({ top: 0, behavior: "smooth" })
    }
    return(
        <Box zIndex='15' bgColor='rgba(6,9,15,0.2)' borderBottom=' solid 0.3px #151B26' backdropFilter="blur(5px)" w='100%' position='fixed' h='10vh' color='textColor.100' display='flex' alignItems='center' justifyContent='space-between' p={padding}>
            <Image h='70%' src={Logo} alt="Logomarca samuel dev" cursor='pointer' onClick={handleClick}></Image>
            <Box display='inline-flex' gap='40px'>
                {links.map((link, key)=>{
                    return(
                        <Link key={key} display={buttonsDisplay} _hover={{color:'blueGradient.100'}} textDecoration='none' href={link.href} fontWeight='300' fontSize='1.05rem'>{link.text}</Link>
                    )
                })}
                <MenuDrawer display={menuDisplay}/>
            </Box>
        </Box>
    )
}
export default Header