import React from "react";

class Education extends React.Component {
  render() {
    const education = [
      {
        title: "Diploma in Data Science",
        school: "Ngee Ann Polytechnic",
        year: "2024 – 2027",
        icon: "🎓",
        description:
          "Focused on data analytics, machine learning and visualisation. Gained hands-on experience through coursework and projects involving Python, SQL and data-driven problem solving.",
      },
      {
        title: "Beatty Secondary School",
        school: "Singapore",
        year: "2020 – 2023",
        icon: "🏫",
        description:
          "Recognized for academic performance and all-round development.",
        awards: [
          "EAGLES Award (2023)",
          "Edusave Scholarship (2021, 2022)",
        ],
      },
    ];

    return (
      <section id="education" className="sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <h3 className="title-a">Education</h3>
            <p className="subtitle-a">
              My academic background and key achievements.
            </p>
            <div className="line-mf"></div>
          </div>

          <div style={{ position: "relative", maxWidth: "800px", margin: "0 auto" }}>
            
            {/* vertical line */}
            <div
              style={{
                position: "absolute",
                left: "20px",
                top: 0,
                bottom: 0,
                width: "3px",
                background: "#ddd",
              }}
            ></div>

            {education.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  marginBottom: "40px",
                  position: "relative",
                }}
              >
                {/* icon */}
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "white",
                    border: "3px solid #4c8bf5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "18px",
                    zIndex: 1,
                  }}
                >
                  {item.icon}
                </div>

                {/* content */}
                <div
                  style={{
                    marginLeft: "20px",
                    background: "white",
                    padding: "22px",
                    borderRadius: "16px",
                    boxShadow: "0 10px 24px rgba(0,0,0,0.08)",
                    flex: 1,
                  }}
                >
                  <h4 style={{ marginBottom: "6px" }}>{item.title}</h4>

                  <p style={{ marginBottom: "4px", color: "#666" }}>
                    {item.school}
                  </p>

                  <p style={{ fontSize: "13px", color: "#999", marginBottom: "10px" }}>
                    {item.year}
                  </p>

                  <p style={{ lineHeight: "1.6", color: "#4a4a4a" }}>
                    {item.description}
                  </p>

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