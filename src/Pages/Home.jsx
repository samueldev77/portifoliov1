import Header from "../Components/MicroComponents/Header"
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
        </>
    )
}
export default HomePage