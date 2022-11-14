import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';

const Footer = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [subscribeMail, setsubscribeMail] = useState("");

const postSubscribeMail= async(e)=>{
  console.log(subscribeMail);
  e.preventDefault();
const res=await fetch("/mail",{
  method:"POST",
  headers:{
    "Content-Type":"application/json",
  },
  body: JSON.stringify({ subscribeMail}),
}) 
const data= await res.json();
if(!data || res.status===402){
  toast.warn("plse fill the mail",{position: "top-center"});


}else if(res.status===422){
  toast.warn("your mail was already registered try new one",{position: "top-center"});

}else{

  toast.success("you have been subscribed, thank you vistis again..",{position: "top-center"});

}
}
  return (
    <>
      <footer class="py-3 text-white">
        <div class="container" >
          <div class="row pt-3">
            <div class="col-md-8">
              <div class="row mb-md-4">
                <div class="d-flex  img-fluid ">
                  <img src="/logo-white.png" height={80} width={100} alt="" />
                  <div class="brand-text">
                    
                    <span class="d-block"></span>
                  </div>
                </div>
              </div>
              <div class="row">
                <div class="col-md-7 mt-lg-4">
                  <div class="d-flex align-items-center mb-1">
                    <i class="fa fa-map-marker-alt me-1"></i>
                    <p class="ms-2 m-0">
                      Bharatpur <br />
                      Chitwan, Nepal
                    </p>
                  </div>
                  <div class="d-flex align-items-center mb-1">
                    <i class="fa fa-phone-alt"></i>
                    <p class="ms-2 m-0">+977- 9867682973</p>
                  </div>
                  <div class="d-flex align-items-center mb-2">
                    <i class="fa fa-envelope"></i>
                    <p class="ms-2 m-0">ecoforestnepal@gmail.com</p>
                  </div>






            <form method="POST">
  
  <div>
      <div className="form-group">
        <label htmlFor="inputEmail">Email</label>
        <input
          type="email"
          id="inputEmail"
          name="subscribeMail"
          value={subscribeMail}
          onChange={(e)=>{setsubscribeMail(e.target.value)}}
          className="form-control"
          placeholder="someone@example.com"
          required
        />
      </div>
  </div>
  <div className="form-group pb-4">
    <button
      className="btn btn-success px-5 m-auto " value="submit" name="submit" onClick={postSubscribeMail}
    >
      Subscribe
    </button>
  </div>

</form>

            
                </div>
                <div class="col-md-5 mt-lg-4">
                  <h6 class="fw-bold">Terms</h6>
                  <div class="links_ mb-2">
                    <Link to="/privacy">Privacy Policy</Link>
                    <Link to="/terms">Terms of Service</Link>
                    <Link to="/about">About Us</Link>
                    {/* <a onClick={handleShow} href="#/">
                      Subscribe for Newsletter
                    </a> */}
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <h6 class="fw-bold">Find us on</h6>
              <div class="social_">
                <a href="https://www.facebook.com/paradisemotornepal">
                  <i class="fab fa-facebook-square"></i>
                </a>
                <a href="https://www.instagram.com/paradisemotorsnepal/">
                  <i class="fab fa-instagram"></i>
                </a>
              </div>
              <div class="mt-2 text-center">
                <iframe
                  title="find-on-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d226116.63341412626!2d84.42776009999999!3d27.684157200000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3994fb37e078d531%3A0x973f22922ea702f7!2sBharatpur%2044200!5e0!3m2!1sen!2snp!4v1667758588426!5m2!1sen!2snp"
                  width="100%"
                  style={{ height: "260px", border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </div>

        <p class="text-center text-white">© Eco Forest 2022</p>
        <p class="text-center text-white">
          Designed & Developed By <b> WalkDigital Soft.</b>{" "}
        </p>
      </footer>
      
      {/* <form method="POST">

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <h5
            className="fw-bold m-auto text-center px-3"
            style={{ color: "#005A8A" }}
          >
            Subscribe to our mailing list and get updates from us
          </h5>
        </Modal.Header>
        <Modal.Body>
            <div className="form-group">
              <label htmlFor="inputEmail">Email</label>
              <input
                type="email"
                id="inputEmail"
                name="subscribeMail"
                value={subscribeMail}
                onChange={(e)=>{setsubscribeMail(e.target.value)}}
                className="form-control"
                placeholder="someone@example.com"
                required
              />
            </div>
        </Modal.Body>
        <Modal.Footer className="pb-4">
          <button
            className="btn btn-dark px-5 m-auto modal_btn" value="submit" name="submit" onClick={postSubscribeMail}
          >
            Subscribe
          </button>
        </Modal.Footer>
      </Modal>
      </form> */}

    </>
  );
};

export default Footer;
