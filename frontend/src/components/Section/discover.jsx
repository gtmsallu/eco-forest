import React, { useEffect } from "react";

const Discover = () => {
  useEffect(() => {
    const bodyClassList = document.body.classList;
    const bodyBg = bodyClassList.contains("bg-white");
    if (bodyBg) {
      bodyClassList.remove("bg-white");
    }
  });

  return (
    <>
      <div class="p-lg-4 "style={{backgroundColor:"#f9f6f0"}} >
        <div class="container  " > 
          <div class="row " >
            
            <div class="col-md-6 my-auto px-md-4">
              <h1 class=" mb-3 fw-bold">
                Plants made easy
              </h1>
              <p class=" " style={{ fontSize: "1.3rem" }}>
              Eco forest helps you discover the best plants for your space, delivers them to your door and helps you look after them.              </p>
            </div>
            <div class="col-md-6">
              <img src="/assets/images/1.png" alt="" class="img-fluid" />
            </div>
          </div>
        </div>
      </div>

      <div class="p-4  bg-white">
        <div class="container py-4">
        <h1 class=" text-center fw-bold mb-4">
                Why Eco-Forest ?
              </h1>
          <div class="row p-1">
         
            
            <div class="col-md-12 featuresList px-md-4">
              <div class="ps-md-2">
                <h4 className="fw-bold">Unbeatable quality</h4>
                <p className="fw-bold">
                 We source directly from top-rated growers, so we can sell the finest quality plants at the very best prices.
                </p>
              </div>
              <div class="ps-md-2">
                <h4 className="fw-bold">Delivery to your door</h4>
                <p className="fw-bold">
                 We’ll bring your plants to your door, anywhere in GB. If you’re not 100% happy, tell us within 30 days and we’ll sort it.
                </p>
              </div>
              <div class="ps-md-2">
                <h4 className="fw-bold">All the help you need</h4>
                <p className="fw-bold">
                 We’ll send you a free plant-parenting course and our plant doctors are always on call.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Discover;
