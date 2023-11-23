import React from 'react'

const Footer = () => {
    return (
        <>
        {/* HEAD detached from d39b8d7 */}
            <footer className="footer section bd-container">
                <div className="footer__container bd-grid">
                    <div className="footer__content">
                        <a href="#" className="footer__logo">Xtream Text Converter</a>
                        <span className="footer__description">Follow for more</span>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100076434714683" target="_blank" className="footer__social"><i className='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/yes_its_yummy.sandwich/" target="_blank" className="footer__social"><i className='bx bxl-instagram'></i></a>
                        </div>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Services</h3>
                        <ul>
                            <li><a href="#" className="footer__link">Uses</a></li>
                            <li><a href="#" className="footer__link">Helpful links</a></li>
                            <li><a href="#" className="footer__link">Support Us</a></li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Information</h3>
                        <ul>
                            <li><a href="#" className="footer__link">Event</a></li>
                            <li><a href="#" className="footer__link">Contact us</a></li>
                            <li><a href="#" className="footer__link">Privacy policy</a></li>
                            <li><a href="#" className="footer__link">Terms of services</a></li>
                        </ul>
                    </div>

                    <div className="footer__content">
                        <h3 className="footer__title">Address</h3>
                        <ul>
                            <li>60 Ft. Road</li>
                            <li>Near Axis Bank</li>
                            <li>Gwalior</li>
                            <li>999-999-9999</li>
                            <li>developer_ankit@gmail.com</li>
                        </ul>
                    </div>
                </div>
                {/* <p className="footer__copy">&#169; 2023 Yummy Sandwich. All right reserved <br><a href="https://instagram.com/developer_ankitt?igshid=OGQ5ZDc2ODk2ZA==" target="blank">Made with Love❤️@devloper_ankitt</a></p> */}
            </footer>
        </>
    )
}

export default Footer