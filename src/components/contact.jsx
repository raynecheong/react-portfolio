import React from "react";

const NAVY = "#1e3a5f";

class Contact extends React.Component {
  render() {
    const contactCards = [
      {
        icon: "👩‍🎓",
        title: "Personal",
        color: "#4c8bf5",
        cardBg: "#eef4ff",
        items: [
          { label: "Email", value: "raynecheong@gmail.com", href: "mailto:raynecheong@gmail.com" },
          { label: "School Email", value: "s10267916@connect.np.edu.sg", href: "mailto:s10267916@connect.np.edu.sg" },
          { label: "Phone", value: "+65 9652 6378", href: "tel:+6596526378" },
        ],
      },
      {
        icon: "🌐",
        title: "Online",
        color: "#7b61ff",
        cardBg: "#f0eeff",
        items: [
          { label: "LinkedIn", value: "linkedin.com/in/rayne-cheong", href: "https://linkedin.com/in/rayne-cheong-55b509304", external: true },
          { label: "GitHub", value: "github.com/raynecheong", href: "https://github.com/raynecheong", external: true },
        ],
      },
      {
        icon: "🏫",
        title: "Referral",
        color: "#00916e",
        cardBg: "#e6faf5",
        items: [
          { label: "Name", value: "Mr Toh Ser Chye" },
          { label: "Email", value: "TOH_Ser_Chye@np.edu.sg", href: "mailto:TOH_Ser_Chye@np.edu.sg" },
          { label: "Phone", value: "+65 6460 6844", href: "tel:+6564606844" },
        ],
      },
    ];

    return (
      <section id="contact" className="sect-pt4 route" style={{ paddingBottom: "4rem" }}>
        <div className="container">

          {/* Section header - navy */}
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Let's Connect</h3>
            </div>
            <p className="subtitle-a">
              I'm currently a data science student exploring opportunities to learn and grow. Feel free to reach out!
            </p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          {/* Contact cards */}
          <div className="row justify-content-center" style={{ maxWidth: "960px", margin: "0 auto" }}>
            {contactCards.map((card, index) => (
              <div className="col-md-4" key={index}>
                <div style={{
                  background: card.cardBg,
                  borderRadius: "20px",
                  padding: "28px",
                  marginBottom: "24px",
                  boxShadow: `0 8px 20px ${card.color}18`,
                  border: `1px solid ${card.color}44`,
                }}>
                  {/* Card header */}
                  <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                    <span style={{
                      width: "46px",
                      height: "46px",
                      borderRadius: "14px",
                      background: `linear-gradient(135deg, ${card.color}, ${card.color}99)`,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "22px",
                      marginRight: "14px",
                      flexShrink: 0,
                    }}>
                      {card.icon}
                    </span>
                    <h5 style={{ margin: 0, fontWeight: 700, color: "#1e1e1e" }}>{card.title}</h5>
                  </div>

                  {/* Contact items */}
                  {card.items.map((item, i) => (
                    <div key={i} style={{ marginBottom: "14px" }}>
                      <p style={{ margin: 0, fontSize: "11px", fontWeight: 700, color: card.color, textTransform: "uppercase", letterSpacing: "0.5px" }}>
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          target={item.external ? "_blank" : undefined}
                          rel={item.external ? "noopener noreferrer" : undefined}
                          style={{ fontSize: "14px", color: "#333", wordBreak: "break-all" }}
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>{item.value}</p>
                      )}
                    </div>
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

export default Contact;