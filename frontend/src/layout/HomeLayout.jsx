import '../index.css';
import HomeNavbar from '../component/HomeNavbar'
export default function homeLayout({children}){
    return(
        <>
            <HomeNavbar/>
            {children}
        </>
    )
}