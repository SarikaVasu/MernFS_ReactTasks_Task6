import { BsFillArrowRightCircleFill } from "react-icons/bs";
import {Link} from 'react-router-dom';
import './MainPage.css';

const MainPage = () => {
  return (
    <header className="mainPage">
        <article className="containerBox">
          <article className="contentBox">

            <aside className="leftBox">
              <aside className="leftBoxText">
                <span className='nowrap' id='line1'>
                Full Stack
                </span>
                <br />
                <span className='nowrap' id='line2'>
                Web Developer
                </span>
              </aside>
            </aside>

            <aside className="rightBox">
            <aside className="rightBoxText">
                <span className='nowrap' id='line3'>
                  Hello!
                </span>
                <br />
                <span className='nowrap' id='line4'>
                  I am Sarika,
                </span>
                <br />
                <span className='nowrap' id='line5'>
                  web developer.
                </span>
              </aside>

            </aside>
          </article>
        </article>

        <article className="arrowCircle1">
          <Link 
            to='/profile' 
            className='link'>
            <BsFillArrowRightCircleFill className="arrowCircle__icon" />
          </Link>
        </article>
        
    </header>
  )
}

export default MainPage;