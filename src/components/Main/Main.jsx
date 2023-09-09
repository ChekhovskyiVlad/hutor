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

            <img src='../../../public/donut.gif' className='donut'/>
          </div>


          <div className="buttons">

            <button className='button'>Get Request</button>

            <div className="social">
                <ul className="social__menu">
                    <li className="social__menu-item">
                        <img src='../../../public/img/instagram-icon.svg'/>
                    </li>
                    <li className="social__menu-item">
                        <img src='../../../public/img/linkedin-icon.svg'/>
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
                        <img className='description__background-photo' src='../../../public/img/background.png' />
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



            <article className='offers'>
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
            </article>


            <article className="contact">
                <div className="contact__background">
                </div>
                <div className="contact__body">


                    <div className="contact__form-table">

                    <form action="" className="contact__form">

                        <div className="contact__form-body">

                        <h3 className='contact__title'>ourhutor@gmail.com</h3>
                        <input type="text" className="contact__form-name" placeholder='Name' required/>

                        <input type="email" className="contact__form-email" placeholder='Email' required/>
                        <input type="email" className="contact__form-text" placeholder='Your Message' required/>
                        </div>

                        <div className="contact__form-button-container">

                        <button className="contact__form-button">Send Message</button>
                        </div>
                    </form>
                    </div>
                    <h5 className="footer">Hutor Studio ©2023</h5>
                </div>
            </article>

        </div>
    )
}