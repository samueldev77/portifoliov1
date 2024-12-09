import Header from "../Components/MicroComponents/Header"
import SectionFive from "../Components/Sections/SectionFive"
import SectionFour from "../Components/Sections/SectionFour"
import { SectionOne } from "../Components/Sections/SectionOne"
import SectionThree from "../Components/Sections/SectionThree"
import SectionTwo from "../Components/Sections/SectionTwo"

export const HomePage = ()=>{
    return(
        <>
            <Header/>
            <SectionOne/>
            <SectionTwo/>
            <SectionThree/>
            <SectionFour/>
            <SectionFive/>
        </>
    )
}
export default HomePage