import React from "react";
import { FiPhoneCall } from "react-icons/fi";
import { MdOutlineMarkEmailUnread, MdLocationOn } from "react-icons/md";
import "../../CSS/Contact.scss";
import "../core/Header";
import Header from "../core/Header";

function Contact() {
  <Header />;
  return (
    <div>
      <section className="contain text-center my-1">
        <div className="common-header">CONTACT US</div>
      </section>
      <div class="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d98980.77958290937!2d-86.60188667868584!3d39.17132507403884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbg!4v1669109434552!5m2!1sen!2sbg"
          frameBorder="0"
          style={{ border: "0", width: " 100%", height: "400px" }}
          allowfullscreen
        ></iframe>
      </div>

      <section id="contact" class="contact contact-background mb-5 mt-4">
        <div class="container">
          <div class="row justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <div class="info-wrap">
                <div class="row">
                  <div class="col-lg-4 info">
                    <i class="bi bi-geo-alt">
                      <MdLocationOn />
                    </i>
                    <h4>Location:</h4>
                    <p>
                      A108 Adam Street
                      <br />
                      New York, NY 535022
                    </p>
                  </div>

                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="bi bi-envelope">
                      <MdOutlineMarkEmailUnread />
                    </i>
                    <h4>Email:</h4>
                    <p>
                      info@example.com
                      <br />
                      contact@example.com
                    </p>
                  </div>

                  <div class="col-lg-4 info mt-4 mt-lg-0">
                    <i class="bi bi-phone">
                      <FiPhoneCall />
                    </i>
                    <h4>Call:</h4>
                    <p>
                      +1 5589 55488 51
                      <br />
                      +1 5589 22475 14
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row mt-5 justify-content-center" data-aos="fade-up">
            <div class="col-lg-10">
              <form action="forms/contact.php" method="post" role="form" class="php-email-form">
                <div class="row">
                  <div class="col-md-6 form-group">
                    <input type="text" name="name" class="form-control" id="name" placeholder="Your Name" required />
                  </div>
                  <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input
                      type="email"
                      class="form-control"
                      name="email"
                      id="email"
                      placeholder="Your Email"
                      required
                    />
                  </div>
                </div>
                <div class="form-group mt-3">
                  <input type="text" class="form-control" name="subject" id="subject" placeholder="Subject" required />
                </div>
                <div class="form-group mt-3">
                  <textarea class="form-control" name="message" rows="5" placeholder="Message" required></textarea>
                </div>
                <div class="my-3">
                  <div class="loading">Loading</div>
                  <div class="error-message"></div>
                  <div class="sent-message">Your message has been sent. Thank you!</div>
                </div>
                <div class="text-center">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;