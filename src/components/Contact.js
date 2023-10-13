import {Link} from 'react-router-dom';
import {BsFillArrowLeftCircleFill} from 'react-icons/bs';
import {RiContactsFill} from 'react-icons/ri';
import './Contact.css';


const Contact = () => {
  return (
    <header className="mainPage">
      <article className="Box3">
        <aside className="navContent profile3">
          <Link className="link" to='/'>
              <nav className="navTab">
                <article className="navComp">
                  Main Page
                </article>
              </nav>
          </Link>
        </aside>     
      </article>

      <article className="contactBox">
        <article className="contentBox">       
          <aside className="picture">
            <RiContactsFill />
          </aside>
          <aside className="contactInfo">
            <aside className="contactInfo__item">
              <h3 className="contactInfo__title">
                Phone Number
              </h3>
              <p className="contactInfo__text">
                +234812345678
              </p>
            </aside>
            <aside className="contactInfo__item">
              <h3 className="contactInfo__title">
                Email Address
              </h3>
              <p className="contactInfo__text">
                sarika.v2021@vistudent.ac.in
              </p>
            </aside>
            <aside className="contactInfo__item">
              <h3 className="contactInfo__title">
                LinkedIn Profile
              </h3>
              <p className="contactInfo__text">
                <a href="https://www.linkedin.com/in/sarika-vasu-602425220/">Sarika Vasu</a>
              </p>
            </aside>
        </aside>

        </article>
      </article>

      <article className="arrowCircle3">
          <Link 
            to='/profile' 
            className='link'>
            <BsFillArrowLeftCircleFill className="arrowCircle__icon" />
          </Link>
        </article>
        
    </header>
  )
}

export default Contact