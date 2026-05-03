import React from "react";
import profile from "../img/profile.png";

const PURPLE = "#1e3a5f";

class About extends React.Component {
  constructor() {
    super();
    this.state = {
      about_me: [
        {
          id: "first-p-about",
          content:
            "I am a Year 3 Data Science student at Ngee Ann Polytechnic with a strong interest in AI and data-driven problem solving. I enjoy applying what I learn to real-world contexts and exploring how data can be used to drive meaningful insights."
        },
        {
          id: "second-p-about",
          content:
            "Through my coursework and projects, I have gained experience in Python, SQL, and data visualisation tools such as Tableau and Power BI. I am particularly interested in how AI can be applied practically and communicated clearly to different audiences."
        },
        {
          id: "third-p-about",
          content:
            "Beyond technical skills, I value communication and teamwork. My involvement in outreach and volunteering has strengthened my ability to explain complex ideas simply and engage with diverse groups. I am currently seeking opportunities to further develop my skills and contribute to real-world data and AI projects."
        }
      ]
    };
  }

  render() {
    return (
      <section id="about" className="about-mf sect-pt4 route">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">

              {/* Section header */}
              <div className="title-box text-center">
                <div style={{
                  display: "inline-block",
                  background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)",
                  borderRadius: "999px",
                  padding: "10px 36px",
                  marginBottom: "16px",
                }}>
                  <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>About Me</h3>
                </div>
                <div className="line-mf" style={{ backgroundColor: PURPLE }}></div>
              </div>

              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-5">
                    <div className="row">
                      <div className="col-sm-12 text-center">
                        <div className="about-img" style={{ textAlign: "center" }}>
                          <img
                            src={profile}
                            className="img-fluid rounded b-shadow-a"
                            alt="Profile"
                            style={{
                              width: "100%",
                              maxWidth: "380px",
                              height: "auto",
                              objectFit: "cover",
                              borderRadius: "16px",
                              boxShadow: "0 12px 25px rgba(30,58,95,0.15)",
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-7">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left" style={{ color: PURPLE }}>Who I Am</h5>
                      </div>
                      {this.state.about_me.map(content => (
                        <p className="lead" key={content.id}>{content.content}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default About;