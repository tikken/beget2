import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = () => (
    <div className="header">
        <div className="header_wrapper">
            <div className="header_wrapper-item">
                <Link to="/">
                    <div className="header_wrapper-item_logo">
                        <img className="header_wrapper-item_logo-item" src={'/header/LOGO.png'} alt="Logo"/>
                    </div>
                </Link>
            </div>
            <div className="header_wrapper-item">
                <ul className="header_wrapper-item_menu">
                    <li className="header_wrapper-item_menu-item"><Link to="/catalog">Каталог</Link></li>
                    <li className="header_wrapper-item_menu-item">
                        <Link to="/information">Информация</Link>
                        <ul className="header_wrapper-item_menu-item-secondary">
                            <Link className="header_wrapper-item_menu-item-secondary_item" to="/information#payments">
                                <li>Оплата</li>
                            </Link>
                            <Link className="header_wrapper-item_menu-item-secondary_item" to="/information#delivery">
                                <li>Доставка</li>
                            </Link>
                            <Link className="header_wrapper-item_menu-item-secondary_item" to="/information#guaranty">
                                <li>Гарантия</li>
                            </Link>
                        </ul>
                    </li>
                    <li className="header_wrapper-item_menu-item">
                        <Link to="/hits">Хит-парад принтеров</Link>
                    </li>
                    <li className="header_wrapper-item_menu-item">
                        <Link to="/sales">Акции</Link>
                    </li>
                    <li className="header_wrapper-item_menu-item">
                        <Link to="/blog">Блог</Link>
                    </li>
                    <li className="header_wrapper-item_menu-item">
                        <Link to="/about">О нас</Link>
                    </li>
                    <li className="header_wrapper-item_menu-item">
                        <Link to="/contacts">Контакты</Link>
                    </li>
                </ul>
            </div>
            <div className="header_wrapper-item">
                <div className="header_wrapper-item_contacts">
                    <div className="header_wrapper-item_contacts-icon">
                        <img className="header_wrapper-item_contacts-icon-item" src={'/header/contact.svg'} alt="Logo"/>
                    </div>
                    <span className="header_wrapper-item_contacts-tel">8 800 555 66 33</span>
                    <div className="header_wrapper-item_contacts-email">kakayatopochta@gmail.com</div>
                </div>
            </div>
        </div>
    </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
