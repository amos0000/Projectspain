import HeaderComponent from '../../components/header/Header';
import './Landing.css';


function LandingOptions() {
    return(
        <>
      

        <HeaderComponent />
       
        <div>
            
            <div className="land-p">

            <div className="land-pasta">
           
            <div className="pastaa">
                     <img src="pimppi.jpg" alt="Pasta"/>
        </div>

        </div>
            
                
                </div> 
                <br></br>
                <h1>Location</h1>
                <div className="button-container">

                    <div className="button">
                        <a href='/Home'> 
                        <img src="hesa.jpg" alt="Helsinki"className='button-image'/>
                        <div className="overlay-text">Helsinki</div>
                        </a>
                    </div>

                    <div className="button">
                    <a href='/Home'> 
                        <img src="vanta.jpg" alt="Vantaa"className='button-image'/>
                        <div className="overlay-text">Vantaa</div>
                        </a>
                    </div>

                    <div className="button">
                        <a href='/Home'> 
                        <img src="tampere.jpg" alt="Tampere"className='button-image'/>
                      <div className="overlay-text">Tampere</div>
                      </a>
                    </div>  
                    
                </div>
            </div>
           
        </>
    );
}

export default LandingOptions;