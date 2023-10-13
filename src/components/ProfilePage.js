import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import './ProfilePage.css';
import {FcContacts} from 'react-icons/fc';
import {TfiHtml5, TfiCss3} from 'react-icons/tfi';
import {TbBrandBootstrap, TbBrandReact, TbBrandNodejs} from 'react-icons/tb';
import {SiMongodb, SiCanva, SiPython, SiJavascript, SiCyberdefenders} from 'react-icons/si';

const ProfilePage = () => {
  return (
    <header className="profile">
        <article className="ProfileBox Box1">
            <aside className="profileContent profile1">
                <ul>
                    <li>
                        <TfiHtml5 />
                        <p>HTML</p>
                    </li>
                    <li>
                        <TfiCss3 />
                        <p>CSS</p>
                    </li>
                    <li>
                        <TbBrandBootstrap />
                        <p>Bootstrap</p>
                    </li>
                    <li>
                        <SiJavascript />
                        <p>JavaScript</p>
                    </li>
                    <li>
                        <TbBrandReact />
                        <p>React JS</p>
                    </li>
                    <li>
                        <SiMongodb />
                        <p>Mongo DB</p>
                    </li>
                    <li>
                        <TbBrandNodejs />
                        <p>Node JS</p>
                    </li>
                </ul>
            </aside>
        </article>
        <article className="ProfileBox Box2">
            <aside className="profileContent profile2">
                <ul>
                    <li>
                        <SiCanva />
                        <p>Digital Designing</p>
                    </li>
                    <li>
                        <SiPython />
                        <p>Python Programming</p>
                    </li>
                    <li>
                        <SiCyberdefenders />
                        <p>Cyber Security</p>
                    </li>
                </ul>
            </aside>
        </article>
        
        <article className="navBox">
            <aside className="navContent profile3">
                <Link className="link" to='/contact'>
                    <nav className="navTab">
                        {/* <article className="navComp aboutBox">
                            <Link className="link">
                                <FcAbout style={{"fontSize": '1.5rem',"color": "green"}}></FcAbout> 
                                About
                            </Link>
                        </article> */}
                        <article className="navComp">    
                            <FcContacts />
                            Contact    
                        </article>
                    </nav>
                </Link>
            </aside>     
        </article>
        

        <article className="arrowCircle2">
            <Link 
              to='/' 
              className='link'>
              <BsFillArrowLeftCircleFill className="arrowCircle__icon" />
            </Link>
          </article>
    
    </header>
  )
}

export default ProfilePage