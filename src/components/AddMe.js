import React from "react";
import axios from "axios";
import { useState } from "react";

const AddMe = ({ contactQr }) => {
  var [Name, setName] = useState("");
  var [Email, setEmail] = useState("");
  var [Message, setMessage] = useState("");
  const [alert, setAlert] = useState("");
  const sendMessage = (e) => {
    e.preventDefault();
    if (Name !== "" && Email !== "" && Message !== "") {
      axios
        .post("send-message/", {
          name: Name,
          email: Email,
          message: Message,
        })
        .then(() => {
          setAlert("");
          document.getElementById("message-form").reset();
          setAlert("Message Sent Successfuly!");
        })
        .catch((err) => {
          setAlert("");
          var errors = err.response.data;
          for (const i in errors) {
            console.log(errors[i][0]);
            setAlert(errors[i][0]);
          }
        });
    } else {
      setAlert("All Fields are Mandatory!");
    }
  };
  return (
    <div>
      <section className="resume-section" id="addme">
        <div className="resume-section-content">
          <a href="#addme" className="js-scroll-trigger">
            <h2 className="mb-5">Contact Me</h2>
          </a>
          <div className="col-lg-10 jumbotron">
            {alert !== "" ? (
              <div
                className="alert alert-info alert-dismissible fade show"
                role="alert"
              >
                {alert}
                <button
                  type="button"
                  className="close"
                  data-dismiss="alert"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
            ) : (
              ""
            )}
            <form id="message-form" method="POST">
              <div className="form-group">
                <label className="text-dark" htmlFor="name">
                  Name:
                </label>
                <input
                  type="name"
                  className="form-control"
                  id="name"
                  placeholder="Your Name Please"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label className="text-dark" htmlFor="email">
                  Email address:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Your Email Please"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </div>
              <div className="form-group">
                <label className="text-dark" htmlFor="message">
                  Message:
                </label>
                <textarea
                  type="text"
                  className="form-control"
                  id="message"
                  placeholder="Your Message Here"
                  rows="5"
                  onChange={(e) => {
                    setMessage(e.target.value);
                  }}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={(e) => sendMessage(e)}
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="qrcontainer" style={{ padding: "0pt" }}>
            <h5 className="p-2">Scan me to add to your contacts.</h5>
            <img
              style={{ maxBlockSize: "300px" }}
              className="img-fluid mx-auto mb-2"
              src={contactQr}
              alt="9843481901"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddMe;
