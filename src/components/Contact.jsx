import React from "react";
import {FaUser, FaEnvelope, FaPencilAlt} from "react-icons/fa";

export default function Contact() {
  return (
    <section id='contact' className='bg-light py-5'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-9'>
            <h3>Get In Touch</h3>
            <p className='lead'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit,
              officiis.
            </p>
            <form>
              <div className='input-group input-group-lg mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <FaUser />
                  </span>
                </div>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Name'
                />
              </div>

              <div className='input-group input-group-lg mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <FaEnvelope />
                  </span>
                </div>
                <input
                  type='email'
                  className='form-control'
                  placeholder='Email'
                />
              </div>

              <div className='input-group input-group-lg mb-3'>
                <div className='input-group-prepend'>
                  <span className='input-group-text'>
                    <FaPencilAlt />
                  </span>
                </div>
                <textarea
                  className='form-control'
                  placeholder='Message'
                  rows='5'></textarea>
              </div>

              <input
                type='submit'
                value='Submit'
                className='btn btn-primary btn-block btn-lg'
              />
            </form>
          </div>

          <div className='col-lg-3 align-self-center'>
            <img src='img/mlogo.png' alt='' className='img-fluid' />
          </div>
        </div>
      </div>
    </section>
  );
}
