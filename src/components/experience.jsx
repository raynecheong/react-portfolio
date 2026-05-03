import React from "react";

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
          <div className="title-box text-center">
            <h3 className="title-a">Experience</h3>
            <p className="subtitle-a">
              Work experiences that developed my teamwork, communication and adaptability.
            </p>
            <div className="line-mf"></div>
          </div>

          <div style={{ maxWidth: "850px", margin: "0 auto" }}>
            {experiences.map((exp, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "26px",
                  borderRadius: "16px",
                  boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                  marginBottom: "24px",
                }}
              >
                {/* Top row */}
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    flexWrap: "wrap",
                    marginBottom: "8px",
                  }}
                >
                  <h4 style={{ margin: 0 }}>
                    {exp.icon} {exp.company}
                  </h4>

                  <span style={{ color: "#888", fontSize: "14px" }}>
                    {exp.year}
                  </span>
                </div>

                <p style={{ marginBottom: "10px", color: "#666" }}>
                  {exp.role}
                </p>

                <ul style={{ color: "#555", paddingLeft: "18px" }}>
                  {exp.points.map((point, i) => (
                    <li key={i} style={{ marginBottom: "6px" }}>
                      {point}
                    </li>
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