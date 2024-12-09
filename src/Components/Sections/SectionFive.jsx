import { Box, Heading, Text, Image, Link } from "@chakra-ui/react"
import { BoxSection} from "../MicroComponents/BoxSection"
import EmailIcon from '../../assets/Icons/email.png'
import InstaIcon from '../../assets/Icons/insta.png'
import LinkedinIcon from '../../assets/Icons/linkedin.png'
import GithubIcon from '../../assets/Icons/github.png'

const social = [
    {name:'e-mail', icon: EmailIcon, link: 'mailto:samueldev2817@gmail.com'},
    {name:'linkedin', icon: LinkedinIcon, link: 'https://www.linkedin.com/in/samueldev03'},
    {name:'github', icon: GithubIcon, link: 'https://github.com/Samael7735'},
]

const Texto = `Obrigado por visitar e conhecer um pouco das minhas habilidades. O intuito deste site é apresentar de forma simples
    e rápida um resumo das minhas habilidades como desenvolvedor front end. Em um futuro próximo espero poder contribuir com
    a comunidade dev com o meu blog, aprimorar, absorver e compartilhar conhecimento
`

export const SectionFive = ()=>{
    const handleClick = (link)=>{
        window.open(link, "_blank", "noopener,noreferrer")
        console.log('click')
    }
    return(
        <BoxSection id='contato' bgColor="dark.300" padding='1%' borderTop='solid 1px'>
            <Box textAlign='center'>
                <Heading color='textColor.100' fontSize="clamp(1.5rem, 2.1vw, 3vw)" fontWeight='400' mb='2rem'>Contato</Heading>
                <Text mb='2rem' fontSize="clamp(1rem, 1.1vw, 1.2vw)" fontWeight='200' color='textColor.200'>
                    {Texto}
                </Text>
            </Box>
            <Box display='flex' gap='10px' justifyContent='center' >
                {social.map((item,index)=>{
                    return <Image key={index} cursor='pointer' onClick={()=>{handleClick(item.link)}} h='40px' src={item.icon} alt={item.name} />
                })}
            </Box>
        </BoxSection>
    )
}
export default SectionFive