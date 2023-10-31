import {logo} from "../assets";
import {styles} from "../styles";
import {footerLinks, socialMedia} from "../constants";
import {SectionWrapper} from "../hoc";
import {useTranslation} from "react-i18next";

const Footer = () => {
    const {i18n, t} = useTranslation();

    return (
        <section className="bg-[color:var(--primary)] pt-12 mt-8"> 
            <div className={`${styles.flexCenter} ${styles.padding} flex-col max-w-7xl mx-auto `}>
                <div className={`${styles.flexStart} md:flex-row flex-col w-full`}>
                    <div className="flex-[1] flex flex-col justify-start mr-10">
                        <img src={logo} alt="logo" className="w-60 h-20 object-contain"/>
                        <p className="mt-8 max-w-sm text-white">
                            {t("footer_text")}
                        </p>
                    </div>

                    <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10 pl-8 border-l-[1px] border-l-white">
                        <div className={`flex flex-col ss:my-0 min-w-[150px]`}>
                            <h5 className="text-white">
                                {t("footer_links")}
                            </h5>
                            {footerLinks.map((footerlink) => (
                                <ul className="list-none mt-4">
                                    {footerlink
                                        .links
                                        .map((link, index) => (
                                            <li
                                                key={link.name}
                                                className={`text-white hover:text-slate-300 cursor-pointer ${index !== footerlink.links.length - 1
                                                ? "mb-4"
                                                : "mb-6"}`}>
                                                {link.name}
                                            </li>
                                        ))}
                                </ul>
                            ))}
                        </div>
                    </div>
                </div>

                <div
                    className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-white">
                    <p
                        className="text-center text-white">
                        {t("copyright")}
                    </p>

                    <div className="flex flex-row md:mt-0 mt-6">
                        {socialMedia.map((social, index) => (<img
                            key={social.id}
                            src={social.icon}
                            alt={social.id}
                            className={`w-[21px] h-[21px] object-contain cursor-pointer ${index !== socialMedia.length - 1
                            ? "mr-6"
                            : "mr-0"}`}
                            onClick={() => window.open(social.link)}/>))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Footer;
