import { Heading, Box, Icon } from "@chakra-ui/react"
import { BoxSection } from "../MicroComponents/BoxSection"
import Exp1 from '../../assets/Images/xp1.png'
import XpCard from "../MicroComponents/Experience"

const experiencia = [
    {cargo: 'Desenvolvedor Front end Junior - SECULT', Icon: Exp1, date: 'Jan 2024 - Atualmente',
        description: `Criação e manutenção de blogs e sistemas de cadastros de alunos e artistas, propostas
        de melhorias de desempenho de sites e novas funcionalidades para a melhoria do funcionamento da SECULT. Suporte de
        TI para artistas e Produção, redação e fotografia para websites da SECULT.`
    }
]

export const SectionFour = ()=>{
    return(
        <BoxSection id='experiencia' bgColor="dark.100" aos="fade-right" aosOffset={10}>
            <Box w='100%' textAlign='center' mb='3rem'>
                <Heading className="orangeGradient" fontSize="clamp(2.5rem, 2.9vw, 3.2vw)">Experiência</Heading>
            </Box>
            <Box>
                {experiencia.map((item,index)=>{
                    return(
                        <XpCard key={index} icon={item.Icon} tittle={item.cargo} date={item.date} description={item.description} />
                    )
                })}
            </Box>
        </BoxSection>
    )
}
export default SectionFour