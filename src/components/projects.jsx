import React from "react";
import busBot from "../img/bus_bot.png";

const NAVY = "#1e3a5f";

class Projects extends React.Component {
  render() {
    const projects = [
      {
        image: busBot,
        icon: "🚌",
        title: "Bus Arrival Timing Telegram Bot",
        color: "#4c8bf5",
        cardBg: "#eef4ff",
        description:
          "Built a workflow using LTA bus arrival data to provide users with real-time bus timing information through a Telegram bot. Users can query bus timings and receive useful updates such as arrival time, bus type and crowd level.",
        tools: ["LTA API", "Alteryx", "Telegram Bot", "Workflow Automation"],
      },
      {
        icon: "📊",
        title: "Data Visualisation Dashboard",
        color: "#7b61ff",
        cardBg: "#f0eeff",
        description:
          "Created interactive dashboards to explore data patterns and communicate insights clearly. The project focused on turning raw data into visual summaries that support faster interpretation.",
        tools: ["Tableau", "Power BI", "Excel", "Data Visualisation"],
      },
      {
        icon: "🤖",
        title: "Machine Learning Model",
        color: "#00916e",
        cardBg: "#e6faf5",
        description:
          "Developed machine learning models to analyse data, identify patterns, and evaluate model performance using appropriate metrics. The project strengthened my understanding of data preparation, model training and validation.",
        tools: ["Python", "Machine Learning", "Model Evaluation"],
      },
    ];

    return (
      <section id="work" className="portfolio-mf sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Projects</h3>
            </div>
            <p className="subtitle-a">
              Selected projects that show how I apply data, analytics and technology to practical problems.
            </p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          {projects.map((project, index) => (
            <div
              className="row align-items-center"
              key={index}
              style={{
                marginBottom: "36px",
                borderRadius: "20px",
                background: project.cardBg,
                boxShadow: `0 8px 20px ${project.color}18`,
                border: `1px solid ${project.color}44`,
                overflow: "hidden",
              }}
            >
              {/* Image / icon panel */}
              <div
                className="col-12 col-md-5"
                style={{
                  minHeight: "280px",
                  background: `linear-gradient(135deg, ${project.color}22, ${project.color}08)`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "24px",
                }}
              >
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", maxHeight: "300px", objectFit: "contain", borderRadius: "14px" }}
                  />
                ) : (
                  <span style={{
                    fontSize: "80px",
                    width: "120px",
                    height: "120px",
                    borderRadius: "28px",
                    background: `linear-gradient(135deg, ${project.color}, ${project.color}99)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}>{project.icon}</span>
                )}
              </div>

              {/* Content panel */}
              <div className="col-12 col-md-7" style={{ padding: "30px" }}>
                <h2 style={{ fontSize: "1.3rem", fontWeight: 700, marginBottom: "14px", color: "#1e1e1e" }}>
                  {project.title}
                </h2>
                <p style={{ fontSize: "15px", color: "#4a4a4a", lineHeight: "1.7", marginBottom: "18px" }}>
                  {project.description}
                </p>
                <div>
                  {project.tools.map((tool, i) => (
                    <span key={i} style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      margin: "4px",
                      borderRadius: "999px",
                      backgroundColor: "#fff",
                      color: project.color,
                      fontSize: "12px",
                      fontWeight: "600",
                      boxShadow: `0 2px 6px ${project.color}22`,
                    }}>
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