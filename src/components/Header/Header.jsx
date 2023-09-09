import './Header.scss'

export const Header = () => {

    const ScrollToContact = () => {
        window.scrollTo({
            top: 1800,
            left: 0,
            behavior: 'smooth'
        });
    }


    return(
        <div>
            <header className='header'>

        <div className='container'>
                <div className="header__body">


          <div className='logo' ><img className='logo__photo' src='/img/logo.png'></img></div>
            <div className='menu'>

                <ul className="menu__list">
                    <li className="menu__list-item">

                        <a className='menu__list-text'  onClick={() => ScrollToContact()}>

                        Services
                        </a>
                    </li>
                    <li className="menu__list-item">

                    <a  className='menu__list-text'  onClick={() => ScrollToContact()}>

Contact
</a>
                    </li>
                </ul>
            </div>
        </div>
                </div>
        <hr className='description__line'></hr>
            </header>


</div>

    )
}