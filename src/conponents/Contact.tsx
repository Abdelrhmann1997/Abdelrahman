import React, { useRef } from 'react';
import type { FormEvent } from 'react';
import { MdOutlineMail } from "react-icons/md";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import emailjs from '@emailjs/browser';
import mycv from "../assets/AbdelrahmanCV22.pdf";

// تعريف الواجهة للبيانات
interface ContactItem {
  id: number;
  icon: React.ReactNode; // استخدام ReactNode يحل مشكلة JSX namespace
  title: string;
  info: string;
  link: string;
}

const ContactData: ContactItem[] = [
  {
    id: 1,
    icon: <MdOutlineMail />,
    title: "Email",
    info: "abdoelrazky0@gmail.com",
    link: "mailto:abdoelrazky0@gmail.com",
  },
  {
    id: 2,
    icon: <FaLinkedin />,
    title: "Linkedin",
    info: "Abdo Elrahman Mohmed",
    link: "https://www.linkedin.com/in/abdo-elrahman-mohmed-106849224/",
  },
  {
    id: 3,
    icon: <FaWhatsapp />,
    title: "WhatsApp",
    info: "+201221500495",
    link: "https://wa.me/201221500495",
  },
];

const Contact: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // التحقق من وجود الفورم يحل مشكلة الـ 'null'
    if (form.current) {
      emailjs
        .sendForm(
          'service_3hhytrp',
          'template_0hmw1nb',
          form.current,
          '8Gx25Q2BJa_1_xko7'
        )
        form.current?.reset();
    }
  }; // تأكد من وجود هذا القوس لغلق الدالة

  return (
    <section id="contact" className="flex flex-col min-h-[70vh] min-w-full items-center justify-center gap-3 space-y-6">
      <div className="text-white space-y-6 p-16 ">
        <h5 className="text-center">Get In Touch</h5>
        <h2 className="bg-linear-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent text-4xl">Contact Me</h2>
      </div>

      <div className="container mb-10 contat_container lg:w-3/5 flex flex-col gap-[12%] lg:flex-row ">
        <div className="contact_options flex-[30%] flex flex-col gap-[1.2rem]">
          {ContactData.map(({ id, icon, title, info, link }) => (
            <article key={id} className="contact-option relative bg-black/70 p-[1.2rem] rounded-2xl text-center border border-transparent transition-all duration-300 hover:border-indigo-500 hover:bg-transparent">
              <h3 className="text-white text-xl mb-2 absolute bottom-30 left-1/2 -translate-x-1/2 ">{icon}</h3>
              <h4 className="text-white mb-2 pt-8 ">{title}</h4>
              <h5 className="text-white text-sm mb-4">{info}</h5>
              <a className="text-pink-500 hover:text-pink-300 text-xs transition-all duration-300" href={link} target="_blank" rel="noreferrer">
                Send Message
              </a>
            </article>
          ))}
        </div>

        <form ref={form} onSubmit={sendEmail} className="flex flex-[58%] flex-col gap-7">
          <input type="text" placeholder="Full Name" name="name" required className="w-full text-sm px-6 py-4 rounded-lg text-white border border-indigo-500 bg-transparent" />
          <input type="email" placeholder="Your Email" name="email" required className="w-full text-sm px-6 py-4 rounded-lg text-white border border-indigo-500 bg-transparent" />
          <textarea rows={8} placeholder="Enter Your Message" name="message" required className="w-full text-sm p-6 rounded-lg text-white border border-indigo-500 resize-none bg-transparent"></textarea>
          
          <button type="submit" className="btn-primary text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">
            Send Message
          </button>
          
          <a id="cv" href={mycv} download className="btn-primary text-center w-fit mx-auto my-8 text-nowrap rounded-lg border border-indigo-600 bg-black px-5 py-3 text-lg font-bold text-white shadow-lg shadow-indigo-700 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-indigo-600">
            Download CV
          </a>
        </form>
      </div>
    </section>
  );
};

export default Contact;