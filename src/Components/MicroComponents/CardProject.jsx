import { Box, Image, Heading, Text, useToast } from "@chakra-ui/react"
import ArrowIcon from '../../assets/Icons/seta.png'

export const CardProject = (props)=>{
    const toast = useToast()
    const handleClick = ()=>{
        if(props.link == ''){
            toast({
                title: 'Ainda indisponível, desculpe!',
                description: "Obrigado pela visita",
                status: 'info',
                duration: 5000,
                isClosable: true,
                position:'top-right'
            })
        }else{
            window.open(props.link)
        }
    }
    return(
        <Box flexGrow='1' flexShrink='1' minH='350px' minW='250px' maxW='450px' display='flex' flexDir='column' _hover={{border: 'solid 1px white'}} borderRadius='10px'>
            <Box h='70%' overflow='hidden' backgroundImage={props.image} backgroundSize='cover' bgPos='center' bgRepeat='no-repeat' borderRadius='10px 10px 0px 0px'></Box>
            <Box p='5%'  bgColor='dark.200' borderRadius='0px 0px 10px 10px' position='relative' onClick={handleClick} cursor='pointer'>
                <Heading fontWeight='300' fontSize='1.3rem' color='textColor.100' mb='2%'>{props.tittle}</Heading>
                <Text color='textColor.200' fontWeight='200'>{props.subtittle}</Text>
                <Image src={ArrowIcon} position='absolute' boxSize='20px' right='5%' bottom='40%' alt="icone abrir outra aba"></Image>
            </Box>
        </Box>
    )
}

export default CardProject