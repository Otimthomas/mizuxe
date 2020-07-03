import React from "react";
import {FaArrowCircleDown} from "react-icons/fa";

export default function About() {
  return (
    <section id='about' className='py-5 text-center bg-light'>
      <div className='container'>
        <div className='row'>
          <div className='col'>
            <div className='info-header mb-5'>
              <h1 className='text-primary pb-3'>Why This Book?</h1>
              <p className='lead pb-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto,
                magnam delectus. Fugit excepturi maxime quasi.
              </p>
            </div>

            <div id='accordion'>
              <div className='card'>
                <div className='card-header'>
                  <h5 className='mb-0'>
                    <div
                      href='#collapse1'
                      data-toggle='collapse'
                      data-parent='#accordion'>
                      <FaArrowCircleDown /> Get Inspired
                    </div>
                  </h5>
                </div>

                <div id='collapse1' className='collapse show'>
                  <div className='card-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa accusamus exercitationem fugiat suscipit vitae
                    excepturi laudantium provident! Tempora, earum quo aperiam,
                    dolor itaque dignissimos ullam id eos ad commodi eveniet
                    illo dicta dolorem voluptates dolorum pariatur? Quia harum
                    mollitia voluptatum dolore qui eum minima commodi eius
                    tempore laudantium! Vitae, neque.
                  </div>
                </div>
              </div>

			  <div className='card'>
                <div className='card-header'>
                  <h5 className='mb-0'>
                    <div
                      href='#collapse2'
                      data-toggle='collapse'
                      data-parent='#accordion'>
                      <FaArrowCircleDown /> Gain The Knowledge
                    </div>
                  </h5>
                </div>

                <div id='collapse2' className='collapse'>
                  <div className='card-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa accusamus exercitationem fugiat suscipit vitae
                    excepturi laudantium provident! Tempora, earum quo aperiam,
                    dolor itaque dignissimos ullam id eos ad commodi eveniet
                    illo dicta dolorem voluptates dolorum pariatur? Quia harum
                    mollitia voluptatum dolore qui eum minima commodi eius
                    tempore laudantium! Vitae, neque.
                  </div>
                </div>
              </div>

			  <div className='card'>
                <div className='card-header'>
                  <h5 className='mb-0'>
                    <div
                      href='#collapse3'
                      data-toggle='collapse'
                      data-parent='#accordion'>
                      <FaArrowCircleDown /> Open Your Mind
                    </div>
                  </h5>
                </div>

                <div id='collapse3' className='collapse'>
                  <div className='card-body'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Culpa accusamus exercitationem fugiat suscipit vitae
                    excepturi laudantium provident! Tempora, earum quo aperiam,
                    dolor itaque dignissimos ullam id eos ad commodi eveniet
                    illo dicta dolorem voluptates dolorum pariatur? Quia harum
                    mollitia voluptatum dolore qui eum minima commodi eius
                    tempore laudantium! Vitae, neque.
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
