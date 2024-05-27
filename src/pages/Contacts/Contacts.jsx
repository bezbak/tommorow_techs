import Header from "../../components/Header/Header";
import scss from "./Contacts.module.scss"
import Footer from "../../components/Footer/Footer";
import nameIcon from "../../components/img/name.svg"
import numberIcon from "../../components/img/number.svg"
import instIcon from '../../components/img/inst.svg';
import waIcon from '../../components/img/wa.svg';
import tgIcon from '../../components/img/tg.svg'
import faceIcon from '../../components/img/Facebook-icon.png'
const Contacts = () => {
    return (
        <div>
            <br />
            <Header />
            <div className={scss.block}>
                <div className={scss.Image}>
                </div>
                <div>
                    <div className={scss.text2}>
                        <div  className={scss.text1}>
                            <h1>Контакты</h1>
                            <p>Мы открыты для сотрудничества с вами <br /> и готовы обсудить ваш будуший проект</p>
                        </div>
                        <div className={scss.text}>
                            <div className={scss.wrap}>
                                <p>Обсудить проект</p>
                                <a href="">projectnew@tt.io</a><br />
                                <a href="tel:+996700121212">+996(700)12-12-12</a>
                            </div>
                            <div className={scss.wrap}>
                                <p>Адрес</p>
                                <a href="https://www.google.com/maps/place/72+%D0%9F%D1%80.+%D0%9C%D0%B0%D1%81%D0%B0%D0%BB%D0%B8%D0%B5%D0%B2%D0%B0,+%D0%9E%D1%88/@40.529333,72.802328,17z/data=!3m1!4b1!4m6!3m5!1s0x38bdaea77996f4ad:0x84ded06c3db376e5!8m2!3d40.529329!4d72.8049029!16s%2Fg%2F11c4sm82wt?entry=ttu">Кыргызстан <br></br> город Ош,Масалиева 72</a>
                            </div>
                            <div className={scss.wrap}>
                                <p>Контакты</p>
                                <a href="tel:+996700121212">+996(700)12-12-12</a><br />
                                <a href="tel:+996700121212">+996(700)12-12-12</a>
                            </div>
                            <div className={scss.wrap}>
                                <p>Социалные сети</p>
                                <a className={scss.links} href="https://t.me/amk2k">
                                    <img className={scss.icons} src={tgIcon} alt="tg" />
                                </a>
                                <a  className={scss.links} href="https://www.instagram.com/">
                                    <img className={scss.icons} src={instIcon} alt="inst" />
                                </a>
                                <a className={scss.links}  href="https://api.whatsapp.com/">
                                    <img className={scss.icons} src={waIcon} alt="wa" />
                                </a>
                                <a className={scss.links} href="https://t.me/amk2k">
                                    <img className={scss.icons}  src={faceIcon} alt="face" />
                                </a>
        
                            </div>
                            <div className={scss.wrap}>
                                <p>Карьера</p>
                                <a href="jobsemail@tt.io">jobsemail@tt.io</a>
                            </div>
                        </div>
                    </div>
                    <div className={scss.Inputs_a}>
                        <h2 className={scss.hcontact}>Или же свяжитесь с нами</h2>
                        <div className={scss.inputWithIcon}>
                            <label>
                                <img className={scss.imgInput} src={nameIcon} alt="имя" />
                                <input className={scss.input} type="text" placeholder="Имя" />
                            </label>
                        </div>
                        <div className={scss.inputWithIcon}>
                            <label>
                              <img className={scss.imgInput} src={numberIcon} alt="номер" />
                              <input className={scss.input} type="text" placeholder="Номер" />
                            </label>
                        </div>
                        <button className={scss.buttonOtpr}>Отправить</button>
                    </div>
                </div>
            </div>
            <div className={scss.black}></div>
            <Footer/>

        </div>
    );
}

export default Contacts;