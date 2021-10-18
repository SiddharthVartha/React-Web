import React from "react";
const Contacts = () => {
  return (
    <>
      <div className='my-5'>  
      <h1 className="text-center">CONTACT</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-6 mx-auto">
            <form>
              <div class="form-group my-2">
                <label for="exampleInputEmail1">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your full name"
                />
              </div>
              <div class="form-group my-2">
                <label for="exampleInputEmail1">Email ID</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Email ID"
                />
              </div>
              <div class="form-group my-2">
                <label for="exampleInputEmail1">Phone Number</label>
                <input
                  type="tel"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Enter your Phone Number"
                />
              </div>
              <div class="form-group my-2">
                <label for="exampleInputPassword1">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div class="form-group my-2">
                <label for="exampleFormControlTextarea1">
                  Message
                </label>
                <textarea
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <button type="submit" class="serviceButton">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacts;
