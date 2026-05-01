import React from "react";
import myImage from "../img/myImage.png";

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
              <div className="box-shadow-full">
                <div className="row">
                  <div className="col-md-6">
                    <div className="row">
                      <div
                        className="col-sm-6 col-md-5"
                        style={{ margin: "0 auto" }}
                      >
                        <div
                          className="about-img"
                          style={{ textAlign: "center" }}
                        >
                          <img
                            className="img-fluid rounded b-shadow-a"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="about-me pt-4 pt-md-0">
                      <div className="title-box-2">
                        <h5 className="title-left">About Me</h5>
                      </div>
                      {this.state.about_me.map(content => {
                        return (
                          <p className="lead" key={content.id}>
                            {content.content}
                          </p>
                        );
                      })}
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
