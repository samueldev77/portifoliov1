import { BoxSection } from "../MicroComponents/BoxSection"
import { Box, Heading, Image } from "@chakra-ui/react"
import Html from '../../assets/Images/1.png'
import Css from '../../assets/Images/2.png'
import Js from '../../assets/Images/3.png'
import ReactIcon from '../../assets/Images/4.png'
import Chakra from '../../assets/Images/5.png'
import Github from '../../assets/Images/6.png'
import Npm from '../../assets/Images/7.png'
import Firebase from '../../assets/Images/8.png'

const Images = [Html, Css, Js, ReactIcon, Chakra, Github, Npm, Firebase]

export const SectionTwo = ()=>{
    const boxSizing = 'clamp(3.5rem, 4.5vw, 5rem)'
    return(
        <BoxSection bgColor="dark.100">
            <Box display='grid' placeItems='center' gap='5%'>
                <Box>
                    <Heading fontWeight='200' fontSize="clamp(1.6rem, 2.1vw, 3vw)" color='textColor.100' textAlign='center' mb='25px'>Experiência com as tecnologias</Heading>
                    <Box display='flex' justifyContent='center' gap='30px' padding='30px 0px' flexWrap='wrap'>
                        {Images.map((imageTech, key)=>{
                            return <Image src={imageTech} boxSize={boxSizing} key={key} alt='Tecnologias icone'></Image>
                        })}
                    </Box>
                </Box>
            </Box>
        </BoxSection>
    )
}
export default SectionTwo