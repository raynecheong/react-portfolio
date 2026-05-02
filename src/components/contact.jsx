import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="paralax-mf footer-paralax bg-image route">
        <div className="overlay-mf"></div>

        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div
                style={{
                  background: "white",
                  borderRadius: "20px",
                  padding: "40px",
                  textAlign: "center",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.08)",
                }}
              >
                <h3 className="title-a">Let’s Connect</h3>

                <p
                  style={{
                    maxWidth: "600px",
                    margin: "16px auto",
                    color: "#555",
                    lineHeight: "1.7",
                  }}
                >
                  I’m currently a data science student exploring opportunities to
                  learn and grow. If you’d like to connect, share advice, or
                  discuss potential opportunities, feel free to reach out.
                </p>

                <div style={{ marginTop: "28px" }}>
                  <p style={{ marginBottom: "10px" }}>
                    📧 <strong>Email:</strong>{" "}
                    <a href="mailto:raynecheong@gmail.com">
                      raynecheong@gmail.com
                    </a>
                  </p>

                  <p style={{ marginBottom: "12px" }}>
                    📧 <strong>School Email:</strong>{" "}
                    <a href="mailto:s10267916@connect.np.edu.sg">
                      s10267916@connect.np.edu.sg
                    </a>
                  </p>

                  <p style={{ marginBottom: "10px" }}>
                    💼{" "}
                    <a
                      href="https://linkedin.com/in/rayne-cheong-55b509304"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      LinkedIn
                    </a>
                  </p>

                  <p>
                    💻{" "}
                    <a
                      href="https://github.com/raynecheong"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </a>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Contact;
