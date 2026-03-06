import React from 'react';

const Footer = () => {
  return (
    <footer className='bg-black text-white'>
      <div className='w-11/12 mx-auto pt-20'>
        <div className='grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_1fr_1fr] gap-12'>
          <div className='w-87.5'>
          <h3 className='text-2xl'>CS — Ticket System</h3>
          <p className='text-[#A1A1AA] mt-4'>A customer ticketing system effectively organizes client inquiries into trackable digital documents. It streamlines support workflows by assigning, prioritizing, and resolving issues efficiently. By centralizing communication, it ensures no request is overlooked, ultimately enhancing customer satisfaction and team productivity.</p>
        </div>
        <div>
          <h3 className='text-xl mb-4'>Company</h3>
          <div className='flex flex-col gap-4'>
            <a className='text-[#A1A1AA] link no-underline'>About Us</a>
            <a className='text-[#A1A1AA] link no-underline'>Our Mission</a>
            <a className='text-[#A1A1AA] link no-underline'>Contact Saled</a>
          </div>
        </div>
          <div>
            <h3 className='text-xl mb-4'>Services</h3>
            <div className='flex flex-col gap-4'>
              <a className='text-[#A1A1AA] link no-underline'>Products & Services</a>
              <a className='text-[#A1A1AA] link no-underline'>Customer Stories</a>
              <a className='text-[#A1A1AA] link no-underline'>Download Apps</a>
            </div>
        </div>
        
          <div>
            <h3 className='text-xl mb-4'>Information</h3>
            <div className='flex flex-col gap-4'>
              <a className='text-[#A1A1AA] link no-underline'>Privacy Policy</a>
              <a className='text-[#A1A1AA] link no-underline'>Terms & Conditions</a>
              <a className='text-[#A1A1AA] link no-underline'>Join Us</a>
            </div>
        </div>
        
          <div>
            <h3 className='text-xl mb-4'>Social Links</h3>
            <div className='flex flex-col gap-4'>
              <a className='text-[#A1A1AA] link no-underline'><i className="fa-solid fa-x mr-1"></i>@CS — Ticket System</a>
              <a className='text-[#A1A1AA] link no-underline'>@CS — Ticket System</a>
              <a className='text-[#A1A1AA] link no-underline'>@CS — Ticket System</a>
              <a className='text-[#A1A1AA] link no-underline'>support@cst.com</a>
            </div>
          </div>
        </div>
        <hr className='mt-20 text-gray-100' />
        <div className='text-center mt-7.5 pb-7.5'>
          <h4 className='text-[#A1A1AA]'>© 2025 CS — Ticket System. All rights reserved.</h4>
        </div>
      </div>
    </footer>
  );
};

export default Footer;