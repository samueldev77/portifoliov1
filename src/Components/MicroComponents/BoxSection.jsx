import { Box, useBreakpointValue } from "@chakra-ui/react";
export const BoxSection = (props)=>{
    const wSection = useBreakpointValue({base:'90%', md:'90%', lg:'90%', xl:'80%'})
    const padding = useBreakpointValue({base:'10%', md:'5%', lg:'5%'})
    return(
        <Box display={props.display} id={props.id} bgColor={props.bgColor} w='100%' minH={props.minH} paddingTop={padding} paddingBottom={padding} borderTop={props.borderTop}>
            <Box w={wSection} margin='0 auto'>{props.children}</Box>
        </Box>
    )
}