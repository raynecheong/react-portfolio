import React from "react";

class Skills extends React.Component {
  render() {
    const skillGroups = [
    {
        icon: "💻",
        category: "Programming & Databases",
        color: "#4c8bf5",
        items: ["Python", "SQL", "C#"]
    },
    {
        icon: "📊",
        category: "Data Analytics & Visualisation",
        color: "#7b61ff",
        items: ["Tableau", "Power BI", "Excel", "Alteryx"]
    },
    {
        icon: "🤖",
        category: "AI & Machine Learning",
        color: "#00b894",
        items: ["Machine Learning", "MLOps", "Model Development"]
    },
    {
        icon: "☁️",
        category: "Platforms & Tools",
        color: "#f39c12",
        items: ["Snowflake", "SAP Analytics Cloud", "SAP ERP"]
    },
    {
        icon: "🎨",
        category: "Design & Productivity",
        color: "#e84393",
        items: ["Figma", "Canva", "PowerPoint", "Word"]
    },
    {
        icon: "🗣️",
        category: "Professional Strengths",
        color: "#ff6b6b",
        items: ["Communication", "Teamwork", "Public Speaking", "Problem Solving"]
    }
    ];

    return (
      <section id="skills" className="sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <h3 className="title-a">Skills & Tools</h3>
            <p className="subtitle-a">
              A practical toolkit for working with data, AI and real-world problem solving.
            </p>
            <div className="line-mf"></div>
          </div>

          <div className="row">
            {skillGroups.map((group, index) => (
              <div className="col-md-4" key={index}>
                <div
                  style={{
                    padding: "24px",
                    marginBottom: "28px",
                    borderRadius: "18px",
                    background: "white",
                    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
                    borderTop: "4px solid ${group.color}",
                    minHeight: "190px"
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "18px" }}>
                    <span
                        style={{
                        width: "42px",
                        height: "42px",
                        borderRadius: "12px",
                        backgroundColor: group.color + "20",
                        color: group.color,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        fontSize: "20px",
                        marginRight: "12px"
                        }}
                    >
                        {group.icon}
                    </span>

                    <h5 style={{ marginBottom: "0" }}>{group.category}</h5>
                    </div>

                  {group.items.map((item, i) => (
                    <span
                      key={i}
                      style={{
                        display: "inline-block",
                        padding: "7px 13px",
                        margin: "5px",
                        borderRadius: "20px",
                        backgroundColor: group.color + "20",
                        color: group.color,
                        fontSize: "13px",
                        fontWeight: "600"
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;