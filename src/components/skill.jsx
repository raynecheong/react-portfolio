import React from "react";

const NAVY = "#1e3a5f";

class Skills extends React.Component {
  render() {
    const skillGroups = [
      {
        icon: "💻",
        category: "Programming & Databases",
        color: "#4c8bf5",
        cardBg: "#eef4ff",
        items: ["Python", "SQL", "C#"]
      },
      {
        icon: "📊",
        category: "Data Analytics & Visualisation",
        color: "#7b61ff",
        cardBg: "#f0eeff",
        items: ["Tableau", "Power BI", "Excel", "Alteryx"]
      },
      {
        icon: "🤖",
        category: "AI & Machine Learning",
        color: "#00916e",
        cardBg: "#e6faf5",
        items: ["Machine Learning", "MLOps", "Model Development"]
      },
      {
        icon: "☁️",
        category: "Platforms & Tools",
        color: "#d97706",
        cardBg: "#fff8e6",
        items: ["Snowflake", "SAP Analytics Cloud", "SAP ERP"]
      },
      {
        icon: "🎨",
        category: "Design & Productivity",
        color: "#db2777",
        cardBg: "#fdf0f7",
        items: ["Figma", "Canva", "PowerPoint", "Word"]
      },
      {
        icon: "🗣️",
        category: "Professional Strengths",
        color: "#e05252",
        cardBg: "#fff0f0",
        items: ["Communication", "Teamwork", "Public Speaking", "Problem Solving", "Adaptability"]
      }
    ];

    return (
      <section id="skills" className="sect-pt4 route">
        <div className="container">

          {/* Section header - navy */}
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Skills & Tools</h3>
            </div>
            <p className="subtitle-a">A practical toolkit for working with data, AI and real-world problem solving.</p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          <div className="row">
            {skillGroups.map((group, index) => (
              <div className="col-md-4" key={index}>
                <div style={{
                  padding: "24px",
                  marginBottom: "28px",
                  borderRadius: "20px",
                  background: group.cardBg,
                  boxShadow: `0 8px 20px ${group.color}18`,
                  minHeight: "190px",
                  border: `1px solid ${group.color}44`,
                }}>
                  {/* Icon + Title */}
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "18px" }}>
                    <span style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${group.color}, ${group.color}99)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      marginRight: "14px",
                      flexShrink: 0,
                    }}>
                      {group.icon}
                    </span>
                    <h5 style={{ marginBottom: 0, color: "#1e1e1e", fontWeight: 700 }}>{group.category}</h5>
                  </div>

                  {/* Tags */}
                  {group.items.map((item, i) => (
                    <span key={i} style={{
                      display: "inline-block",
                      padding: "6px 14px",
                      margin: "4px",
                      borderRadius: "999px",
                      backgroundColor: "#fff",
                      color: group.color,
                      fontSize: "13px",
                      fontWeight: "600",
                      boxShadow: `0 2px 6px ${group.color}22`,
                    }}>
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