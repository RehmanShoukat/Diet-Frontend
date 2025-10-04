import React from 'react';
import { href } from 'react-router-dom';

const links = window?.links || {};

const topbarItems = [
  {
    type: 'text',
    icon: 'fa-solid fa-phone-volume',
    text: links.phone?links.phone.replace("tel",""): "",
    href: links.phone
  },
  {
    type: 'text',
    icon: 'fa-solid fa-envelope',
    text: links.email,
    href: `mailto:${links.email}`
  },
  {
    type: 'social',
    icon: 'fa-brands fa-facebook',
    href: links.facebook || '#',
  },
  {
    type: 'social',
    icon: 'fa-brands fa-instagram',
    href: links.instagram || '#',
  },
  {
    type: 'social',
    icon: 'fa-brands fa-youtube',
    href: links.youtube || '#',
  },
  {
    type: 'social',
    icon: 'fa-brands fa-whatsapp',
    href: links.whatsapp || '#',
  },
];

export default function Topbar() {
  return (
    <div className="bg-green-600 text-white text-xl ">
      <div className=" w-full px-4 sm:px-8 lg:px-24 py-2 h-10 cursor-pointer">

        <div className="hidden sm:flex justify-between items-center">
          <div className="flex items-center gap-6">
            {topbarItems.map((item, index) =>
              item.type === 'text' && (
                <div key={index} className="flex items-center gap-2">
                  <i className={item.icon}></i>
                  <span>{item.text}</span>
                </div>
              )
            )}
          </div>

          <div className="flex items-center gap-4">
            {topbarItems.map((item, index) =>
              item.type === 'social' && (
                <a key={index} href={item.href} target="_blank" rel="noreferrer">
                  <i className={item.icon}></i>
                </a>
              )
            )}
          </div>
        </div>

        <div className="flex sm:hidden justify-center items-center gap-4 flex-wrap">
          {topbarItems.map((item, index) => (
            <div key={index}>
              {item.type === 'text' ? (
                <i className={item.icon}></i> 
              ) : (
                <a href={item.href} target="_blank" rel="noreferrer">
                  <i className={item.icon}></i>
                </a>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
