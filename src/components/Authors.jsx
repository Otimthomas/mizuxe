import React from "react";
import {FaFacebook, FaTwitter, FaInstagram} from "react-icons/fa";

export default function Authors() {
  return (
    <section id='authors' className='my-5 text-center'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='info-header mb-5'>
              <h1 className='text-primary pb-3'>Meet The Authors</h1>
              <p className='lead'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Corporis maxime temporibus adipisci aperiam, quaerat
                necessitatibus!
              </p>
            </div>
          </div>
        </div>

        <div className='row'>
          <div className='col-lg-3 col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <img
                  src='img/person1.jpg'
                  alt=''
                  className='img-fluid rounded-circle w-50 mb-3'
                />
                <h1>Eric Otyema</h1>
                <h5 className='text-muted'>Lead Writer</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nemo, accusantium?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='http://facebook.com'>
                      <FaFacebook />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://twitter.com'>
                      <FaTwitter />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://instagram.com'>
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

		  <div className='col-lg-3 col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <img
                  src='img/person2.jpg'
                  alt=''
                  className='img-fluid rounded-circle w-50 mb-3'
                />
                <h1>Cynthia Ijang</h1>
                <h5 className='text-muted'>Co-Writer</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nemo, accusantium?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='http://facebook.com'>
                      <FaFacebook />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://twitter.com'>
                      <FaTwitter />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://instagram.com'>
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

		  <div className='col-lg-3 col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <img
                  src='img/person3.jpg'
                  alt=''
                  className='img-fluid rounded-circle w-50 mb-3'
                />
                <h1>Ayugi Heelda</h1>
                <h5 className='text-muted'>Editor</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nemo, accusantium?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='http://facebook.com'>
                      <FaFacebook />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://twitter.com'>
                      <FaTwitter />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://instagram.com'>
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

		  <div className='col-lg-3 col-md-6'>
            <div className='card'>
              <div className='card-body'>
                <img
                  src='img/person4.jpg'
                  alt=''
                  className='img-fluid rounded-circle w-50 mb-3'
                />
                <h1>Thomas Otim</h1>
                <h5 className='text-muted'>Designer</h5>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Nemo, accusantium?
                </p>
                <div className='d-flex justify-content-center'>
                  <div className='p-4'>
                    <a href='http://facebook.com'>
                      <FaFacebook />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://twitter.com'>
                      <FaTwitter />
                    </a>
                  </div>
                  <div className='p-4'>
                    <a href='http://instagram.com'>
                      <FaInstagram />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>		  
        </div>
      </div>
    </section>
  );
}
