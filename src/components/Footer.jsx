import { Icon } from '@iconify/react';
import React from 'react';
import { footerLinks } from '../utils/links';
import alif from '../assets/images/alif.png';
import raihan from '../assets/images/raihan.png';
import tegar from '../assets/images/tegar.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 dark:bg-blueDark py-10">
      <div className="container mx-auto flex flex-col items-center lg:flex-row lg:justify-between">
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={alif} alt="Foto alif" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-white">21.11.4104 - FIRRESA ALIF NURRAHMAN</span>
        </div>
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={raihan} alt="Foto raihan" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-white">21.11.4099 - MUAMMAR RAIHAN</span>
        </div>
        <div className="flex items-center mb-4 lg:mb-0">
          <img src={tegar} alt="Foto tegar" className="w-20 h-20 rounded-full mr-2" />
          <span className="text-white">21.11.4111 - TEGAR TRI PUTRAWANA</span>
        </div>
        <div className="flex justify-center">
          {footerLinks.map((link, index) => (
            <a href={link.link} target="_blank" rel="noopener noreferrer" key={link.id} className="mx-2 flex items-center">
              <Icon icon={link.logo} className="w-6 h-6" />
              <span className="sr-only">{link.name}</span>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

