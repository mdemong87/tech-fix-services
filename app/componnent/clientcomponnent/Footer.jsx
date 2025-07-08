import Image from "next/image";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";
import logo from '../../../public/assets/logo.png';
import styles from "../../../styles/clientconponnent/Footer/Footer.module.css";
import Container from "../../componnent/clientcomponnent/Container";

export default function Footer() {
    return (
        <footer className={`bg-[#000000] ${styles.footer}`}>
            <Container>
                <div className={styles.footerWrp}>
                    <div className={styles.singleWrp}>
                        <Image className={`w-full h-full ${styles.foooterLogo}`} src={logo} width={1000} height={1000} alt="footer-logo" />
                        <p className="text-lg text-gray-300 text-center md:text-left translate-y-4 md:-translate-y-4 pt-6 mb-10 md:mb-0 md:pt-3">
                            Your Home Appliance Repair Services Provider
                        </p>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Our Servicess</h4>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="tel:929.888.3820" target="blank">
                                    <BsArrowRight className={`${styles.rightArrowIcons}`} />
                                    <span>
                                        Air Conditioner (AC) Repair & Maintenance
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:picturetimetv@gmail.com" target="blank">
                                    <BsArrowRight className={styles.rightArrowIcons} />
                                    <span>
                                        Refrigerator / Fridge Repair
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://maps.app.goo.gl/x5vwU51htrRVnf1z7" target="blank">
                                    <BsArrowRight className={`${styles.rightArrowIcons} text-2xl`} />
                                    <span>
                                        Washing Machine Repair
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>

                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>Information</h4>
                        <ul className={styles.ul}>
                            <li><a href="/aboutus"><BsArrowRight className={styles.rightArrowIcons} /><span>About Us</span></a></li>
                            <li><a href="/contactus"><BsArrowRight className={styles.rightArrowIcons} /><span>Contact Us</span></a></li>
                            <li><a href="/termsandconditions"><BsArrowRight className={styles.rightArrowIcons} /><span>Terms and Conditions</span></a></li>

                        </ul>
                    </div>
                    <div className={styles.singleWrp}>
                        <h4 className={styles.footerhadering}>General Contact</h4>
                        <ul className={styles.ul}>
                            <li>
                                <Link href="tel:929.888.3820" target="blank">
                                    <BsArrowRight className={`${styles.rightArrowIcons}`} />
                                    <span>
                                        +974 7057 8042
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="mailto:picturetimetv@gmail.com" target="blank">
                                    <BsArrowRight className={styles.rightArrowIcons} />
                                    <span>
                                        techfixservicess@gmail.com
                                    </span>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://maps.app.goo.gl/x5vwU51htrRVnf1z7" target="blank">
                                    <BsArrowRight className={`${styles.rightArrowIcons} text-2xl`} />
                                    <span>
                                        Doha City,
                                        Qatar
                                    </span>
                                </Link>
                            </li>

                        </ul>
                    </div>





                    <div className={styles.copyRight}>Tech Fix Servicess Copyright at 2025 - Tech Fix Servicess all rights reserved
                        || <Link style={{ color: "#b57912" }} href="https://www.linkedin.com/in/mdemong87">Developed By Md Emon Hossen</Link>
                    </div>
                </div>
            </Container>
        </footer>
    )
}