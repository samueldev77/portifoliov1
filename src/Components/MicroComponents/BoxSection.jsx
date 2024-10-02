import { Box, useBreakpointValue } from "@chakra-ui/react";
export const BoxSection = (props)=>{
    const wSection = useBreakpointValue({base:'90%', md:'90%', lg:'90%', xl:'80%'})
    const padding = useBreakpointValue({base:'10%', md:'5%', lg:'5%'})
    return(
        <Box bgColor={props.bgColor} w='100vw' h={props.height} paddingTop={padding} paddingBottom={padding}>
            <Box w={wSection} bgColor={props.boxInternColor} margin='0 auto'>{props.children}</Box>
        </Box>
    )
}