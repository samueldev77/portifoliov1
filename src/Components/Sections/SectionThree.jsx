import { BoxSection } from "../MicroComponents/BoxSection";
import { Box, Heading } from "@chakra-ui/react";
import Projeto1 from "../../assets/Images/devFinance.png";
import Projeto2 from "../../assets/Images/melhorFlix.png";
import Working from '../../assets/Images/working.png'
import CardProject from "../MicroComponents/CardProject";

const contentCards = [
    { tittle: "Dev Finance $", subtittle: "Clique aqui para ver o projeto", image: Projeto1, link: 'https://devfinance1.netlify.app' },
    { tittle: "Melhor Flix", subtittle: "Clique aqui para ver o projeto", image: Projeto2, link:'https://melhorflix.netlify.app' },
    { tittle: "Samuel Fotografia", subtittle: "Projeto ainda em produção", image: Working, link: '' },
];

export const SectionThree = () => {
    return (
        <BoxSection id='projetos' bgColor="dark.100" aos="fade-up" aosOffset={10}>
            <Box
                w="100%"
                display="flex"
                flexDirection="column"
                alignItems="center"
                gap="50px"
            >
                <Box>
                    <Heading
                        fontWeight="700"
                        fontSize="clamp(2.5rem, 2.9vw, 3.2vw)"
                        color="blueGradient.100"
                    >
                        Projetos
                    </Heading>
                </Box>
                <Box w="100%" display="flex" justifyContent="center" gap="2%" rowGap='30px' flexWrap='wrap'>
                    {contentCards.map((project, id) => {
                        return (
                            <CardProject
                                key={id}
                                image={project.image}
                                tittle={project.tittle}
                                subtittle={project.subtittle}
                                link={project.link}
                            />
                        );
                    })}
                </Box>
            </Box>
        </BoxSection>
    );
};

export default SectionThree
