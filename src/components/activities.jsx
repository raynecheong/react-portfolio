import React from "react";

class Activities extends React.Component {
  render() {
    const groups = [
      {
        school: "Ngee Ann Polytechnic",
        icon: "🎓",
        sections: [
          {
            title: "Orion",
            items: [
              {
                name: "Red Camp 2024 – MC",
                desc: "Gave secondary school students a brief introduction to the School of ICT and its programmes.",
              },
              {
                name: "Red Camp 2025 – AI Demonstrator",
                desc: "Demonstrated how AI can be used in everyday and real-world contexts.",
              },
              {
                name: "Open House 2026 – Volunteer",
                desc: "Engaged with secondary school students and shared more about ICT courses and student life.",
              },
            ],
          },
        ],
      },
      {
        school: "Beatty Secondary School",
        icon: "🏫",
        sections: [
          {
            title: "Co-curricular",
            subsections: [
              {
                subtitle: "Chinese Orchestra",
                items: [
                  {
                    name: "Vice-President",
                    desc: "Led debriefs, managed attendance, supported orderly practice sessions and assisted with administrative matters (Apr 2022 – Apr 2023).",
                  },
                  {
                    name: "Singapore Youth Festival Arts Presentation",
                    desc: "Attained Certificate of Distinction (2021) and Certificate of Accomplishment (2023).",
                  },
                  {
                    name: "HUG Community Service Charity Gala Dinner",
                    desc: "Performed as part of the Chinese Orchestra at a charity event (2022).",
                  },
                ],
              },
            ],
          },
          {
            title: "Academic",
            items: [
              {
                name: "UNSW Science Competition",
                desc: "Represented the school in an international academic competition (2022).",
              },
            ],
          },
        ],
      },
    ];

    return (
      <section id="activities" className="sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <h3 className="title-a">Activities</h3>
            <p className="subtitle-a">
              Involvement in outreach, leadership and co-curricular activities.
            </p>
            <div className="line-mf"></div>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {groups.map((group, index) => (
              <div
                key={index}
                style={{
                  background: "white",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "0 12px 28px rgba(0,0,0,0.08)",
                  marginBottom: "28px",
                  borderTop: "5px solid #4c8bf5",
                }}
              >
                <h4 style={{ marginBottom: "22px" }}>
                  {group.icon} {group.school}
                </h4>

                {group.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: "22px" }}>
                    <h5 style={{ color: "#0078ff", marginBottom: "14px" }}>
                      {section.title}
                    </h5>

                    {/* CASE 1: has subsections (like Chinese Orchestra) */}
                    {section.subsections &&
                      section.subsections.map((sub, k) => (
                        <div key={k} style={{ marginBottom: "16px" }}>
                          <h6 style={{ marginBottom: "10px", color: "#333" }}>
                            {sub.subtitle}
                          </h6>

                          {sub.items.map((item, j) => (
                            <div
                              key={j}
                              style={{
                                padding: "14px 16px",
                                borderRadius: "14px",
                                background: "#f7f9ff",
                                marginBottom: "10px",
                              }}
                            >
                              <strong>{item.name}</strong>
                              <p style={{ margin: "6px 0 0", color: "#555" }}>
                                {item.desc}
                              </p>
                            </div>
                          ))}
                        </div>
                      ))}

                    {/* CASE 2: normal section */}
                    {section.items &&
                      section.items.map((item, j) => (
                        <div
                          key={j}
                          style={{
                            padding: "14px 16px",
                            borderRadius: "14px",
                            background: "#f7f9ff",
                            marginBottom: "10px",
                          }}
                        >
                          <strong>{item.name}</strong>
                          <p style={{ margin: "6px 0 0", color: "#555" }}>
                            {item.desc}
                          </p>
                        </div>
                      ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Activities;