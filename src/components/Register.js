import React from "react";
import "../components/Register.css";

export default function Register() {
  return (
    <div>
      <div className="container-style">
        <div className="box">
          <div className="header">
            <h2>Create a account</h2>
            <form className="row g-3">
              <div className="col-md-4">
                <label for="validationServer01" className="form-label">
                  First name
                </label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer01"
                  value="Mark"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label for="validationServer02" className="form-label">
                  Last name
                </label>
                <input
                  type="text"
                  className="form-control is-valid"
                  id="validationServer02"
                  value="Otto"
                  required
                />
                <div className="valid-feedback">Looks good!</div>
              </div>
              <div className="col-md-4">
                <label for="validationServerUsername" className="form-label">
                  Email
                </label>
                <div className="input-group has-validation">
                  <span className="input-group-text" id="inputGroupPrepend3">
                    @
                  </span>
                  <input
                    type="text"
                    className="form-control is-invalid"
                    id="validationServerUsername"
                    aria-describedby="inputGroupPrepend3 validationServerUsernameFeedback"
                    required
                  />
                  <div
                    id="validationServerUsernameFeedback"
                    className="invalid-feedback"
                  >
                    Please give a valid email.
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationServer03" className="form-label">
                  Phone number
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                />
                <div
                  id="validationServer03Feedback"
                  className="invalid-feedback"
                >
                  Please provide a valid number.
                </div>
              </div>
              <div className="col-md-6">
                <label for="validationServer03" className="form-label">
                  Password
                </label>
                <input
                  type="text"
                  className="form-control is-invalid"
                  id="validationServer03"
                  aria-describedby="validationServer03Feedback"
                  required
                />
                {/* <div id="validationServer03Feedback" className="invalid-feedback">
            Please provide a valid city.
          </div> */}
              </div>

              <div className="col-12">
                <div className="form-check">
                  <input
                    className="form-check-input is-invalid"
                    type="checkbox"
                    value=""
                    id="invalidCheck3"
                    aria-describedby="invalidCheck3Feedback"
                    required
                  />
                  <label className="form-check-label" for="invalidCheck3">
                    Agree to terms and conditions
                  </label>
                  <div id="invalidCheck3Feedback" className="invalid-feedback">
                    You must agree before submitting.
                  </div>
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-primary" type="submit">
                  Register
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
