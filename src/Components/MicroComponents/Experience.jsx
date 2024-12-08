import { Box, Heading, Text, Image } from "@chakra-ui/react"

export const XpCard = (props)=>{
    return(
        <Box w='100%' color='white' display='flex' flexDir='column'  gap='1rem' mb='3rem'>
            <Box display='flex' alignItems='center' justifyContent='space-between' gap='20px' flexWrap='wrap'>
                <Box display='flex' gap='20px' alignItems='center'>
                    <Image h='30px' w='auto' src={props.icon} alt="Experiência"/>
                    <Heading fontSize="clamp(1.1rem, 2.1vw, 3vw)" fontWeight='200' >{props.tittle}</Heading>
                </Box>
                <Text fontSize="clamp(1rem, 1vw, 2vw)" fontWeight='300' color='green.300'>{props.date}</Text>
            </Box>
            <Text fontSize="clamp(1rem, 1.1vw, 1.2vw)" fontWeight='200' color='textColor.200' textAlign='justify' >{props.description}</Text>
        </Box>
    )
}
export default XpCard