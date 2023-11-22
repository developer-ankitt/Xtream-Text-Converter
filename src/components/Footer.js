import React from 'react'

const Footer = () => {
    return (
        <>
            <footer class="footer section bd-container">
                <div class="footer__container bd-grid">
                    <div class="footer__content">
                        <a href="#" class="footer__logo">Yummy Sandwich</a>
                        <span class="footer__description">Follow for more</span>
                        <div>
                            <a href="https://www.facebook.com/profile.php?id=100076434714683" target="_blank" class="footer__social"><i class='bx bxl-facebook'></i></a>
                            <a href="https://www.instagram.com/yes_its_yummy.sandwich/" target="_blank" class="footer__social"><i class='bx bxl-instagram'></i></a>
                        </div>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Services</h3>
                        <ul>
                            <li><a href="#" class="footer__link">Delivery</a></li>
                            <li><a href="#" class="footer__link">Pricing</a></li>
                            <li><a href="#" class="footer__link">Fast food</a></li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Information</h3>
                        <ul>
                            <li><a href="#" class="footer__link">Event</a></li>
                            <li><a href="#" class="footer__link">Contact us</a></li>
                            <li><a href="#" class="footer__link">Privacy policy</a></li>
                            <li><a href="#" class="footer__link">Terms of services</a></li>
                        </ul>
                    </div>

                    <div class="footer__content">
                        <h3 class="footer__title">Adress</h3>
                        <ul>
                            <li>60 Ft. Road</li>
                            <li>Near Axis Bank</li>
                            <li>Khumarpura, Gwalior</li>
                            <li>88-398-66063</li>
                            <li>yummysandwich@gmail.com</li>
                        </ul>
                    </div>
                </div>
                {/* <p class="footer__copy">&#169; 2023 Yummy Sandwich. All right reserved <br><a href="https://instagram.com/developer_ankitt?igshid=OGQ5ZDc2ODk2ZA==" target="blank">Made with Love❤️@devloper_ankitt</a></p> */}
            </footer>
        </>
    )
}

export default Footer