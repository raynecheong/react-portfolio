import React from "react";
import busBot from "../img/bus_bot.png";

class Projects extends React.Component {
  render() {
    const projects = [
      {
        image: busBot,
        icon: "🚌",
        title: "Bus Arrival Timing Telegram Bot",
        colour: "#4c8bf5",
        description:
          "Built a workflow using LTA bus arrival data to provide users with real-time bus timing information through a Telegram bot. Users can query bus timings and receive useful updates such as arrival time, bus type and crowd level.",
        tools: ["LTA API", "Alteryx", "Telegram Bot", "Workflow Automation"],
      },
      {
        icon: "📊",
        title: "Data Visualisation Dashboard",
        colour: "#7b61ff",
        description:
          "Created interactive dashboards to explore data patterns and communicate insights clearly. The project focused on turning raw data into visual summaries that support faster interpretation.",
        tools: ["Tableau", "Power BI", "Excel", "Data Visualisation"],
      },
      {
        icon: "🤖",
        title: "Machine Learning Model",
        colour: "#00b894",
        description:
          "Developed machine learning models to analyse data, identify patterns, and evaluate model performance using appropriate metrics. The project strengthened my understanding of data preparation, model training and validation.",
        tools: ["Python", "Machine Learning", "Model Evaluation"],
      },
    ];

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <h3 className="title-a">Projects</h3>
            <p className="subtitle-a">
              Selected projects that show how I apply data, analytics and technology to practical problems.
            </p>
            <div className="line-mf"></div>
          </div>

          {projects.map((project, index) => (
            <div
              className="row align-items-center"
              key={index}
              style={{
                marginBottom: "36px",
                borderRadius: "24px",
                background: "white",
                boxShadow: "0 14px 32px rgba(0,0,0,0.08)",
                borderTop: `6px solid ${project.colour}`,
                overflow: "hidden",
              }}
            >
              <div
                className="col-12 col-md-6"
                style={{
                  minHeight: "300px",
                  backgroundColor: project.colour + "18",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "18px",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: "100%",
                      maxHeight: "330px",
                      objectFit: "contain",
                      borderRadius: "14px",
                    }}
                  />
                ) : (
                  <span style={{ fontSize: "70px" }}>{project.icon}</span>
                )}
              </div>

              <div
                className="col-12 col-md-6"
                style={{
                  padding: "30px",
                }}
              >
                <h2 className="w-title" style={{ marginBottom: "16px" }}>
                  {project.title}
                </h2>

                <p
                  style={{
                    fontSize: "15px",
                    color: "#4a4a4a",
                    lineHeight: "1.7",
                  }}
                >
                  {project.description}
                </p>

                <div style={{ marginTop: "18px" }}>
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        padding: "7px 13px",
                        margin: "5px",
                        borderRadius: "18px",
                        backgroundColor: project.colour + "18",
                        color: project.colour,
                        fontSize: "12px",
                        fontWeight: "600",
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
}

export default Projects;