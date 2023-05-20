import React from "react";

const Footer = () => {
  return (
    <>
      <div class="container my-5">
        <footer class="bg-light text-center">
          <div class="container p-4 pb-0">
            <section class="">
              <form action="">
                <div class="row d-flex justify-content-center">
                  <div class="col-auto">
                    <p class="pt-2">
                      <strong>Sign up for our newsletter</strong>
                    </p>
                  </div>

                  <div class="col-md-5 col-12">
                    <div class="form-outline mb-4">
                      <input
                        type="email"
                        id="form5Example2"
                        class="form-control"
                      />
                      <label class="form-label" for="form5Example2">
                        Email address
                      </label>
                    </div>
                  </div>

                  <div class="col-auto">
                    <button type="submit" class="btn btn-primary mb-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </section>
          </div>

          <div class="text-center p-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.142262000001!2d85.333333314777!3d27.71722298280366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb18f0f5c5c8d7%3A0x6b8f8a6b8f8a6b8f!2sKathmandu%20Valley%20College%20of%20Engineering%20and%20Management!5e0!3m2!1sen!2snp!4v1625581000000!5m2!1sen!2snp"
              width="600"
              height="450"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
