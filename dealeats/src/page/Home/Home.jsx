import './Home.css';
import Header from "../../components/header/Header"


function Home(){
    return (
        <>
            <Header/>
           
            <div className="container">
            <div className="background-image">
            <img src="land.jpg" alt="Land"/>
            </div>
            <div className="text-container">
                <h1 className="heading">BROWSE RESTAURANTS, RESERVE AND EAT CHEAP.</h1>     
            </div>
        </div>  
        </>
    )
}


export default Home;
