import '../Main/Main.scss';
import { motion } from "framer-motion";

export const Main = () => {


    const textAnimation = {
        hidden: {
            y: 30,
            opacity: 0
        },
        visiable: custom => ({
            y: 0,
            opacity: 1,
            transition: {delay: custom * 0.7}
        })
    }


    const ScrollToContact = () => {
        window.scrollTo({
            top: 3000,
            left: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div>
            <article className="page__first">

            <div className="container">



            <div className="titles">

            <h1 className='titles__title1'>
                Dream. Design.
                <br></br>
                Deliver.
            </h1>


            <h3 className='titles__title2'>
                Your Web Studio Partner
            </h3>
            </div>
          <div className="donut__container">

            <img src='/donut.gif' className='donut'/>
          </div>


          <div className="buttons">

            <button className='button'onClick={() => ScrollToContact()} >Get Request</button>

            <div className="social">
                <ul className="social__menu">
                    <li className="social__menu-item">
                    <a href='https://www.instagram.com/hutorua/?igshid=OGQ5ZDc2ODk2ZA%3D%3D'><img src='/img/instagram-icon.svg'/></a>
                    </li>
                    <li className="social__menu-item">
                        <a> <img src='/img/linkedin.png'/></a>
                    </li>
                </ul>
            </div>
          </div>
</div>
        <hr className='line'></hr>
            </article>
            <article className="description">
                <div className="container">
                    <div className="description__background">
                        <img className='description__background-photo' src='/img/background.png' />
                    </div>

                    <div className="description__text-body">


                    <p className="description__text">
                    Welcome to "Hutor" = innovators in web development and design. We create exceptional digital solutions, exceeding expectations.
                    </p>
                    <p className="description__text">

                    With us, you access professionals and trend-conscious partners. We passionately design websites merging style and function, ensuring smooth user engagement.

                    </p>
                    <p className="description__text">

                    We create and partner for lasting impact. Ready to listen, consult, and bring ambitious projects to life. Every project is a chance to showcase expertise and enhance your success.
                    </p>
                    </div>
                </div>

            </article>

            <pre id="d"></pre>

            <article className='offers'>
                <div className="container">
                <div className="offers__body">
                        <motion.ul className="offers__list" custom={1} variants={textAnimation} initial="hidden" whileInView="visiable">
                            <li className="offers__list-item">
                            <span>Web development</span>
                            </li>
                             <li className="offers__list-item">
                             <span>Back-end</span>
                            </li>
                             <li className="offers__list-item">
                                <span className='offers__webdesign'>Web design</span>
                            </li>
                             <li className="offers__list-item">
                             <span> Front-end</span>
                            </li>
                             <li className="offers__list-item">
                             <span> Ui/Ux design</span>
                            </li>
                        </motion.ul>
                </div>
                </div>
            </article>

            <article className="contact">


                <div className="contact__background">
                </div>
                <div className="container">

                <div className="contact__body">
                    <div className="contact__form-table">
                    <form className="contact__form" action="https://formsubmit.co/ourhutor@gmail.com" method="POST">
                        <div className="contact__form-body">
                        <h3 className='contact__title'>ourhutor@gmail.com</h3>
                        <input type="text" name='name' className="contact__form-name" placeholder='Name' required maxLength="50"/>
                        <input type="email" name='email'className="contact__form-email" placeholder='Email' required maxLength="50"/>
                        <input type="text" name='message' className="contact__form-text" placeholder='Your Message' required maxLength="250"/>
                        </div>
                        <div className="contact__form-button-container">
                        <button className="contact__form-button">Send Message</button>
                        </div>
                    </form>
                </div>
                    </div>
                </div>
            </article>
        </div>
    )
}