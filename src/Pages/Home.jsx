import { Box } from "@chakra-ui/react"
import Header from "../Components/MicroComponents/Header"
import SectionFive from "../Components/Sections/SectionFive"
import SectionFour from "../Components/Sections/SectionFour"
import { SectionOne } from "../Components/Sections/SectionOne"
import SectionThree from "../Components/Sections/SectionThree"
import SectionTwo from "../Components/Sections/SectionTwo"

export const HomePage = ()=>{
    return(
        <Box bgColor="#06090F">
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
        </Box>
    )
}
export default HomePage