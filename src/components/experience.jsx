import React from "react";

const NAVY = "#1e3a5f";

class Experience extends React.Component {
  render() {
    const experiences = [
      {
        company: "Guzman Y Gomez",
        role: "Kitchen / Service Crew",
        year: "Aug 2025 – Oct 2025",
        icon: "🍽️",
        color: "#d97706",
        cardBg: "#fff8e6",
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
        color: "#db2777",
        cardBg: "#fdf0f7",
        points: [
          "Welcomed and seated guests, ensuring smooth table turnover and timely assistance.",
          "Served beverages and addressed customer needs promptly to maintain an efficient dining experience.",
        ],
      },
    ];

    return (
      <section id="experience" className="sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Experience</h3>
            </div>
            <p className="subtitle-a">Work experiences that developed my teamwork, communication and adaptability.</p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            {experiences.map((exp, index) => (
              <div key={index} style={{
                background: exp.cardBg,
                padding: "26px",
                borderRadius: "20px",
                boxShadow: `0 8px 20px ${exp.color}18`,
                marginBottom: "24px",
                border: `1px solid ${exp.color}44`,
              }}>
                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", alignItems: "center", marginBottom: "8px" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <span style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${exp.color}, ${exp.color}99)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      flexShrink: 0,
                    }}>
                      {exp.icon}
                    </span>
                    <h4 style={{ margin: 0, color: "#1e1e1e", fontWeight: 700 }}>{exp.company}</h4>
                  </div>
                  <span style={{ fontSize: "12px", color: exp.color, background: "#fff", borderRadius: "999px", padding: "3px 14px", fontWeight: 600, boxShadow: `0 2px 6px ${exp.color}22` }}>
                    {exp.year}
                  </span>
                </div>

                <p style={{ marginBottom: "12px", color: exp.color, fontWeight: 600, marginLeft: "58px" }}>{exp.role}</p>

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