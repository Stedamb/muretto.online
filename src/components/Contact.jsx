import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
// import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";


import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
    const { i18n, t } = useTranslation();


  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        'service_e5seb8b',
        'template_0oo669z',
        {
          from_name: form.name,
          to_name: "Stefano D'Ambrosio",
          from_email: form.email,
          to_email: "stedamb@gmail.com",
          message: form.message,
        },
        'uGS_JfntuUmAGCpKP'
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <motion.div variants={slideIn("down", "spring", 0.2, 1)}
      className={`bg-[color:var(--secondary)] rounded-2xl xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
    >
      <div
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>{t("contact_subtitle")}</p>
        <h3 className={styles.sectionHeadText}>{t("contact_title")}</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-4 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='mb-4'>{t("contact_name")}</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder={t("contact_name")}
              className='bg-[color:var(--secondary)] outline-none focus:outline-[color:var(--primary)] py-4 px-6 placeholder:text-[color:var(--primary)] rounded-lg'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4'>{t("contact_email")}</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder={t("contact_email")}
              className='bg-[color:var(--secondary)] outline-none focus:outline-[color:var(--primary)] py-4 px-6 placeholder:text-[color:var(--primary)] rounded-lg'
            />
          </label>
          <label className='flex flex-col'>
            <span className='mb-4'>{t("contact_message")}</span>
            <textarea
              rows={4}
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder={t("contact_message")}
              className='bg-[color:var(--secondary)] outline-none focus:outline-[color:var(--primary)] py-4 px-6 placeholder:text-[color:var(--primary)] rounded-lg'
            />
          </label>

          <button
            type='submit'
            className='text-white bg-[color:var(--primary)] py-3 px-8 rounded-xl w-fit shadow-md shadow-primary'
          >
            {loading ? t("contact_sending") : t("contact_send")}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Contact, "contact");
