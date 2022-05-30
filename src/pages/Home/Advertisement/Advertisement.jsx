import React from "react";
import "./Advertisement.scss";
import { CheckCircleOutlined } from "@ant-design/icons";

export default function Advertisement(props) {
  return (
    <section id="advertisement">
      <div className="my-container">
        <h1 className="container">
          A whole world of freelance talent at your fingertips
        </h1>
        <div className="d-flex flex-wrap">
          <div className="advertisement-left">
            <ul>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  The best for every budget
                </h2>
                <p>
                  Find high-quality services at every price point. No hourly
                  rates, just project-based pricing.
                </p>
              </li>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  Quality work done quickly
                </h2>
                <p>
                  Find the right freelancer to begin working on your project
                  within minutes.
                </p>
              </li>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  Protected payments, every time
                </h2>
                <p>
                  Always know what you'll pay upfront. Your payment isn't
                  released until you approve the work.
                </p>
              </li>
              <li>
                <h2 className="d-flex align-items-center">
                  <CheckCircleOutlined
                    className="mr-2"
                    style={{ fontSize: "20px", color: "#404145" }}
                  />
                  24/7 support
                </h2>
                <p>
                  Questions? Our round-the-clock support team is available to
                  help anytime, anywhere.
                </p>
              </li>
            </ul>
          </div>

          <div className="advertisement-right">
            <iframe
              width="100%"
              style={{borderRadius:"5px"}}
              height="350"
              src="https://www.youtube.com/embed/bchLMoAS1CU"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>{" "}
          </div>
        </div>
      </div>
    </section>
  );
}
