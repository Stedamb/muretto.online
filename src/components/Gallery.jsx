import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

import {hero} from "../assets";
import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const Gallery = () => {
    const { i18n, t } = useTranslation();
  return (
    <>
      <motion.div
        variants={fadeIn("", "", 0.5, 1)}
        className='w-full my-8'
      >
        <img src={hero} className='w-full h-[70vh] object-cover brightness-75'></img>
      </motion.div>

    </>
  );
};

export default Gallery;