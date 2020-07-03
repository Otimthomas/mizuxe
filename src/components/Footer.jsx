import React from "react";

export default function Footer() {
  return (
    <footer id='main-footer' className='py-5 bg-primary text-white'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col-md-6 ml-auto'>
            <p className='lead'>
              Copyright &copy; <span>{new Date().getFullYear()}</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
