import './WelcomePage.css';
import TopHeaders from '../TopHeaders/index.jsx';
import girlThinking from '../../assets/girl_thinking.jpeg';
import List from '../../assets/listem.png';
import Status from '../../assets/status.png';
import Done from '../../assets/done.png';
import Repeat from '../../assets/repeat.png';
import Sparkle from '../../assets/sparkle.png';
import { useState } from 'react';
import Wand from '../../assets/sparkle_wand.png'


const bottomTabs=[
    {
        name:'List \'em',
        color: '#fa8128',
        icon: List,
        description: 'some line about this'
    },
    {
        name:'Update status',
        color: '#73c2fb',
        icon: Status,
        description: 'some line about this'

    },
    {
        name:'Get it done',
        color: '#c24641',
        icon: Done,
        description: 'some line about this'

    },
    {
        name:'Repeat',
        color: '#74b72e',
        icon: Repeat,
        description: 'some line about this'

    }
]
function WelcomePage() {

    const [showSparkle, setShowSparkle] = useState(false);
  return (
    <div className='outer-container'>
        <div className='inner-container'>
            <TopHeaders/>
            <div className='welcome-box'>
                <div className='welcome-text-box'>
                    <div className='welcome-text'>Lot of things on  <br/>
                     your mind? <br/>
                     Jot it down<br/>
                     </div>
                     <div className='welcome-description'>Join this all new to do app and get your shit done sooner and easier. 
                        Join this all new to do app and get your shit done sooner and easier
                    </div>
                    <button onMouseEnter={()=>setShowSparkle(true)} onMouseLeave={()=>setShowSparkle(false)}  className='get-started-button'>Get Started</button>
                    {showSparkle && <img className='sparkle one' width='24px' height='24px' src={Sparkle} alt='sparkle'/>}
                    {showSparkle && <img className='sparkle two' width='20px' height='20px' src={Sparkle} alt='sparkle'/>}
                </div>
                <div className="image-container">
                    <img className='welcome-image' src={girlThinking} alt='welcome'/> 
                </div>
            </div>
            <div className='bottom-tabs'>
                {bottomTabs.map((tab) => 
                    <div className='bottom-tab' style={{backgroundColor: tab.color}}>
                        <div className='tab-text'>{tab.name}<div className='tab-description'>{tab.description}</div></div>
                        <div className='tab-image'><img src={tab.icon} alt={tab.name} /></div>
                        
                    </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default WelcomePage;
