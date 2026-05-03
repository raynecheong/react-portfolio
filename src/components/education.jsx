import React from "react";

const NAVY = "#1e3a5f";

class Education extends React.Component {
  render() {
    const education = [
      {
        title: "Diploma in Data Science",
        school: "Ngee Ann Polytechnic",
        year: "2024 – 2027",
        icon: "🎓",
        color: "#0078ff",
        colorLight: "#e8f4ff",
        description: "Focused on data analytics, machine learning and visualisation. Gained hands-on experience through coursework and projects involving Python, SQL and data-driven problem solving.",
      },
      {
        title: "Beatty Secondary School",
        school: "Singapore",
        year: "2020 – 2023",
        icon: "🏫",
        color: "#059669",
        colorLight: "#d1fae5",
        description: "Recognized for academic performance and all-round development.",
        awards: ["EAGLES Award (2023)", "Edusave Scholarship (2021, 2022)"],
      },
    ];

    return (
      <section id="education" className="sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Education</h3>
            </div>
            <p className="subtitle-a">My academic background and key achievements.</p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
            <div style={{ position: "absolute", left: "20px", top: 0, bottom: 0, width: "3px", background: `linear-gradient(180deg, #0078ff, #059669)` }}></div>

            {education.map((item, index) => (
              <div key={index} style={{ display: "flex", marginBottom: "40px", position: "relative" }}>
                <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: item.colorLight, border: `3px solid ${item.color}`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "18px", zIndex: 1, flexShrink: 0 }}>
                  {item.icon}
                </div>

                <div style={{ marginLeft: "20px", background: "#fff", padding: "22px", borderRadius: "16px", boxShadow: `0 10px 24px ${item.color}22`, flex: 1, borderLeft: `4px solid ${item.color}` }}>
                  <h4 style={{ marginBottom: "6px", color: "#1e1e1e" }}>{item.title}</h4>
                  <p style={{ marginBottom: "4px", color: item.color, fontWeight: 600 }}>{item.school}</p>
                  <span style={{ display: "inline-block", fontSize: "12px", color: item.color, background: item.colorLight, borderRadius: "999px", padding: "2px 12px", marginBottom: "10px" }}>{item.year}</span>
                  <p style={{ lineHeight: "1.6", color: "#4a4a4a" }}>{item.description}</p>
                  {item.awards && (
                    <ul style={{ marginTop: "10px", color: "#555" }}>
                      {item.awards.map((award, i) => (
                        <li key={i}>{award}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Education;