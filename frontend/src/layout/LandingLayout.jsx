import '../index.css';
import Navbar from '../component/landingNavbar'
export default function homeLayout({children}){
    return(
        <>
            <Navbar/>
            {children}
        </>
    )
}