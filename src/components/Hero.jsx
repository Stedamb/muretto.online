import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";

import {styles} from '../styles';
import {bg} from "../assets";
import {args, words} from "../utils/words";

import {useTranslation} from "react-i18next";
import {slideIn, slideOut} from "../utils/motion";

const Hero = () => {
    const {i18n, t} = useTranslation();

    const [started,
        setStarted] = useState(false);

    const [time,
        setTime] = useState(1000);

    const [word,
        setWord] = useState('');

    const [dictionary,
        setDictionary] = useState(args);

    var index = 0;

    useEffect(() => {
        const timer = setInterval(() => {
            changeWord();
        }, time);

        return () => clearInterval(timer);
    }, [time]);

    function changeTime(t) {
        if (t >= 0.5) {
            console.log(t);
            setTime(t * 1000);
        }
    }

    function start() {
        setTimeout(() => setStarted(true), 0);
        changeWord();
    }

    function stop() {
        setStarted(false);
    }

    function changeWord() {
        var lastIndex = index;
        index = Math.floor(Math.random() * dictionary.length);
        while (index === lastIndex) {
            index = Math.floor(Math.random() * dictionary.length);
        }
        setWord(dictionary[index]);
    }

    function changeDictionary(d) {
        switch (d) {
            case "1":
                console.log(d);
                setDictionary(args);
                break;
            case "2":
                console.log(d);
                setDictionary(words);
                break;
            case "3":
                setDictionary(args);
                break;
        }
    }

    return (
        <section className='relative w-full h-screen mx-auto'>
            <img src={bg} className='w-full h-screen object-cover brightness-50'></img>
            <motion.div
                animate={started
                ? "show"
                : "hidden"}
                variants={slideOut("left", "linear", 0, 2)}
                className={`absolute inset-0 top-[10%] max-w-7xl mx-auto h-[20%] ${styles.paddingX} flex flex-col items-start`}>
                <h1 className={`${styles.heroHeadText}`}>
                    {t("title_highlighted")}
                </h1>
                <p className={`${styles.heroSubText} mt-2`}>
                    {t("subtitle")}<span className=''>{t("subtitle_highlighted")}</span>
                </p>
            </motion.div>
            <div
                className={`absolute top-[30%] left-[50%] translate-x-[-50%] h-[20%] flex flex-col justify-center align-middle`}>
                <h1 className={`${ !started && 'hidden'} text-center`}>{word}
                </h1>
                <button
                    id="startButton"
                    onClick={start}
                    className={`${started && 'hidden'} btn btn-start btn-transition text-[36px]`}>START</button>
                <button
                    id="stopButton"
                    onClick={stop}
                    className={`${ !started && 'hidden'} btn btn-start w-[250px] text-[24px] mt-4 mx-auto`}>STOP</button>
            </div>
            <div
                className="absolute top-[50%] w-full h-1/2 flex justify-around flex-wrap items-center">
                <div className="flex flex-col min-w-[250px] items-center">
                    <label className=" text-[24px] mb-4">Intervallo</label>
                    <div className="flex items-center">
                        <input
                            id="intervalInput"
                            className="bg-transparent text-[30px] w-[60px] focus-visible:outline-black"
                            type="number"
                            placeholder="1"
                            onChange={(e) => changeTime(e.target.value)}></input>
                        <span>secondi</span>

                    </div>
                </div>
                <div className="flex flex-col min-w-[250px] items-center">
                    <label className=" text-[24px] mb-4">Dizionario</label>
                    <div className="flex items-center">
                        <select
                            id="dictionaryInput"
                            className="bg-transparent text-[30px]"
                            onChange={(e) => changeDictionary(e.target.value)}>
                            <option className="text-black text-[24px]" value="1">Argomento</option>
                            <option className="text-black text-[24px]" value="2">Parola</option>
                            {/* <option className="text-black text-[24px]" value="3">Situazione</option> */}
                        </select>
                    </div>
                </div>
                <div className="flex flex-col min-w-[250px] items-center">
                    <label className=" text-[24px] mb-4">Intervallo</label>
                    <div className="flex items-center">
                        <input
                            id="intervalInput"
                            className="bg-transparent text-[30px] w-[50px] focus-visible:outline-black"
                            type="number"
                            placeholder="1"
                            onChange={(e) => changeTime(e.target.value)}></input>
                        <span>secondi</span>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero