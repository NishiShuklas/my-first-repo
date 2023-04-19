import 'bulma/css/bulma.css'
import ProfileCard from './ProfileCard';
import AlexaImage from './images/alexa.png'
import CortanaImg from './images/cortana.png'
import SiriImg from './images/siri.png'


function App() {
    const assistance = [{ imgSrc: "img1", text: "Text1" }, { imgSrc: "img2", text: "Text2" }, { imgSrc: "img3", text: "Text3" }]
    return (
        <div>
            <section class="hero is-primary">
                <div class="hero-body">
                    <p class="title">
                        Personal Digital Assistance
                    </p>
                </div>
            </section>

            <div className="container">
                <section className="section">
                    <div className="columns">
                        <div className="column is-4">
                            <ProfileCard 
                            title="Alexa" 
                            handle="@alexa99" 
                            image={AlexaImage} 
                            description="Alexa was created by amazon and helps you buy things"/>
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Cortana" 
                            handle="@cortana32" 
                            image={CortanaImg}
                            description="Cortana was made by Microsoft, who knows what it does " />
                        </div>
                        <div className="column is-4">
                            <ProfileCard 
                            title="Siri" 
                            handle="@siri01" 
                            image={SiriImg}
                            description="Siri was made by Apple and is being phased but" />
                        </div>
                    </div>
                </section>
            </div>

            {/* {assistance.map(ele => {
                return (<ProfileCard imgSrc={ele.imgSrc} text={ele.text}/>)
            })} */}

        </div>
    );
}

export default App;
