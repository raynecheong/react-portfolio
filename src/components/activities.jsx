import React from "react";

const NAVY = "#1e3a5f";

class Activities extends React.Component {
  render() {
    const groups = [
      {
        school: "Ngee Ann Polytechnic",
        icon: "🎓",
        color: "#0078ff",
        colorLight: "#e8f4ff",
        sections: [
          {
            title: "Orion Special Interest Group",
            items: [
              { name: "Open House 2026 – Volunteer", desc: "Engaged with secondary school students and shared more about ICT courses and student life." },
              { name: "Red Camp 2025 – AI Demonstrator", desc: "Demonstrated how AI can be used in everyday and real-world contexts." },
              { name: "Red Camp 2024 – MCEE Speaker", desc: "Gave secondary school students a brief introduction to the School of ICT and its programmes." },
            ],
          },
        ],
      },
      {
        school: "Beatty Secondary School",
        icon: "🏫",
        color: "#059669",
        colorLight: "#d1fae5",
        sections: [
          {
            title: "Co-curricular",
            subsections: [
              {
                subtitle: "Chinese Orchestra",
                items: [
                  { name: "Vice-President", desc: "Led debriefs, managed attendance, supported orderly practice sessions and assisted with administrative matters (Apr 2022 – Apr 2023)." },
                  { name: "Singapore Youth Festival Arts Presentation", desc: "Attained Certificate of Distinction (2021) and Certificate of Accomplishment (2023)." },
                  { name: "HUG Community Service Charity Gala Dinner", desc: "Performed as part of the Chinese Orchestra at a charity event (2022)." },
                ],
              },
            ],
          },
          {
            title: "Academic",
            items: [
              { name: "UNSW Science Competition", desc: "Represented the school in an international academic competition (2022)." },
            ],
          },
        ],
      },
    ];

    return (
      <section id="activities" className="sect-pt4 route">
        <div className="container">
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Activities</h3>
            </div>
            <p className="subtitle-a">Involvement in outreach, leadership and co-curricular activities.</p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            {groups.map((group, index) => (
              <div key={index} style={{ background: "#fff", padding: "30px", borderRadius: "20px", boxShadow: `0 10px 24px ${group.color}22`, marginBottom: "28px", borderLeft: `4px solid ${group.color}` }}>
                <h4 style={{ marginBottom: "22px", color: "#1e1e1e" }}>{group.icon} {group.school}</h4>

                {group.sections.map((section, i) => (
                  <div key={i} style={{ marginBottom: "22px" }}>
                    <h5 style={{ color: "#fff", background: `linear-gradient(135deg, ${group.color}, ${group.color}99)`, display: "inline-block", borderRadius: "999px", padding: "4px 18px", marginBottom: "14px", fontSize: "0.9rem" }}>
                      {section.title}
                    </h5>

                    {section.subsections && section.subsections.map((sub, k) => (
                      <div key={k} style={{ marginBottom: "16px" }}>
                        <h6 style={{ marginBottom: "10px", color: group.color, fontWeight: 600 }}>{sub.subtitle}</h6>
                        {sub.items.map((item, j) => (
                          <div key={j} style={{ padding: "14px 16px", borderRadius: "14px", background: group.colorLight, marginBottom: "10px" }}>
                            <strong style={{ color: "#1e1e1e" }}>{item.name}</strong>
                            <p style={{ margin: "6px 0 0", color: "#555" }}>{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    ))}

                    {section.items && section.items.map((item, j) => (
                      <div key={j} style={{ padding: "14px 16px", borderRadius: "14px", background: group.colorLight, marginBottom: "10px" }}>
                        <strong style={{ color: "#1e1e1e" }}>{item.name}</strong>
                        <p style={{ margin: "6px 0 0", color: "#555" }}>{item.desc}</p>
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