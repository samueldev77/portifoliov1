import { Heading,  Image, Box, useBreakpointValue, Avatar, Text, Button} from "@chakra-ui/react"
import { BoxSection} from "../MicroComponents/BoxSection"
import BlueCircle from '../../assets/Images/blueCircle.png'
import Person from '../../assets/Images/samuel.jpg'

export const SectionOne = ()=>{
    const h = useBreakpointValue({base:'90%', md:'80%', lg:'90%', xl:'100%'})
    const widthText = useBreakpointValue({base:'100%', md:'80%', lg:'50%', xl:'50%'})
    const margin = useBreakpointValue({base:'20%', md:'5%', lg:'3%'})
    const direction = margin == '20%' ? 'column' : 'inline-blocl'
    return (
        <BoxSection bgColor="dark.100" minH='100vh'>
            <Image
                w={h}
                h={h}
                position="absolute"
                left="50%"
                transform="translate(-50%, -25%)"
                objectFit="contain"
                src={BlueCircle}
            />
            <Box
                w="100%"
                display="flex"
                flexDir="column"
                alignItems="center"
                justifyContent='center'
                gap="30px"
            >
                <Image
                    mt={margin}
                    zIndex="2"
                    border="solid 2px"
                    borderColor='blueGradient.100'
                    src={Person}
                    boxSize="clamp(150px, 15vw, 150px)"
                    borderRadius="100%"
                />
                <Box>
                    <Heading
                        textAlign="center"
                        color="textColor.100"
                        fontWeight="600"
                        fontSize="clamp(1.5rem, 2.8vw, 3.2vw)"
                    >
                        Eu crio sites incríveis
                    </Heading>
                    <Heading
                        textAlign="center"
                        color="textColor.100"
                        fontWeight="600"
                        fontSize="clamp(1.5rem, 2.8vw, 3.2vw)"
                    >
                        e amo minhas criações!
                    </Heading>
                </Box>
                <Box w={widthText}>
                    <Text color='textColor.200' textAlign='center' fontSize="clamp(1rem, 1vw, 2vw)" fontWeight='200'>
                        Sou desenvolvedor front end, Graduando em Análise e desenvolvimento de sistemas. Crio interfaces responsivas e intuitivas
                        utilizando React js, com boas práticas e padrões de projeto. 
                    </Text>
                </Box>
                <Box w='100%' mt='30px' color='textColor.100' display='flex' flexDirection={direction} gap='20px' justifyContent='center'>
                    <Button variant='solid' fontWeight='400' fontSize='1rem' borderRadius='2xl' p='20px'
                     >Estou apenas olhando</Button>
                    <Button variant='outline' colorScheme="white" fontWeight='400' fontSize='1rem' borderRadius='2xl' p='20px' >Preciso de um projeto</Button>
                </Box>
            </Box>
        </BoxSection>
    );
}