import React from "react";

const PURPLE = "#1e3a5f";
const PURPLE_LIGHT = "#e8f0fb";
const CARD_SHADOW = "0 10px 24px rgba(30,58,95,0.10)";

class Experience extends React.Component {
  render() {
    const experiences = [
      {
        company: "Guzman Y Gomez",
        role: "Kitchen / Service Crew",
        year: "Aug 2025 – Oct 2025",
        icon: "🍽️",
        points: [
          "Delivered customer service by taking orders, processing sales, and ensuring smooth service in a fast-paced environment.",
          "Supported kitchen operations during peak hours, assisting with food preparation and maintaining hygiene standards.",
          "Worked collaboratively with team members to ensure efficient service flow and a positive dining experience.",
        ],
      },
      {
        company: "Genki Sushi",
        role: "Service Crew",
        year: "Jan 2024 – Apr 2024",
        icon: "🍣",
        points: [
          "Welcomed and seated guests, ensuring smooth table turnover and timely assistance.",
          "Served beverages and addressed customer needs promptly to maintain an efficient dining experience.",
        ],
      },
    ];

    return (
      <section id="experience" className="sect-pt4 route">
        <div className="container">

          {/* Section header */}
          <div className="title-box text-center">
            <div style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)",
              borderRadius: "999px",
              padding: "10px 36px",
              marginBottom: "16px",
            }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Experience</h3>
            </div>
            <p className="subtitle-a">Work experiences that developed my teamwork, communication and adaptability.</p>
            <div className="line-mf" style={{ backgroundColor: PURPLE }}></div>
          </div>

          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{
                background: "#fff",
                padding: "26px",
                borderRadius: "16px",
                boxShadow: CARD_SHADOW,
                marginBottom: "24px",
                borderLeft: `4px solid ${PURPLE}`,
              }}>
                {/* Top row */}
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  flexWrap: "wrap",
                  alignItems: "center",
                  marginBottom: "8px",
                }}>
                  <h4 style={{ margin: 0, color: "#1e1e1e" }}>
                    {exp.icon} {exp.company}
                  </h4>
                  <span style={{
                    fontSize: "12px",
                    color: PURPLE,
                    background: PURPLE_LIGHT,
                    borderRadius: "999px",
                    padding: "3px 14px",
                    fontWeight: 600,
                  }}>
                    {exp.year}
                  </span>
                </div>

                <p style={{ marginBottom: "12px", color: PURPLE, fontWeight: 600 }}>{exp.role}</p>

                <ul style={{ color: "#555", paddingLeft: "18px" }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Experience;