import React from "react";
import web3 from "../src/images/t1.jpg"
import web2 from "../src/images/t2.jpeg"
import web1 from "../src/images/t3.webp"
const Services=()=>{
    return(
        <>
        <div className="container-fluid d-flex justify-content-center ">
            <div className="row">
                <div className="col-md-4">
                <div class="card">
        <img class="card-img-top" src={web3} alt="Card image cap"/>
         <div class="card-body">
         <h5 class="card-title">Truck 1</h5>
        <p class="card-text">Mumbai to Delhi</p>
        <a href="/form3" className="btn btn-primary">Check Health</a>
  </div>
</div>

                    </div>
                <div className="col-md-4">
                <div class="card">
  <img class="card-img-top" src={web2} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Truck 2</h5>
    <p class="card-text">Chennai to Bangalore</p>
    <a href="/form2" class="btn btn-primary">Check Health</a>
  </div>
</div>
                    </div>
                <div className="col-md-4">
                <div class="card">
  <img class="card-img-top" src={web1} alt="Card image cap"/>
  <div class="card-body">
    <h5 class="card-title">Truck 3</h5>
    <p class="card-text">Jalandhar to Delhi</p>
    <a href="/form1" class="btn btn-primary">Check Health</a>
  </div>
                    </div>
                </div>
            </div>
        
           




</div> 
<div class="spacetaker">

</div>
        
        </>
    );
};

export default Services;