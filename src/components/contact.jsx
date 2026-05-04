import React from "react";

const NAVY = "#1e3a5f";

const EmailIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", flexShrink: 0 }}>
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const PhoneIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ marginRight: "8px", flexShrink: 0 }}>
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.06 1.18 2 2 0 012.03 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const LinkedInIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={color} style={{ marginRight: "8px", flexShrink: 0 }}>
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
);

const GitHubIcon = ({ color }) => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill={color} style={{ marginRight: "8px", flexShrink: 0 }}>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="sect-pt4 route" style={{ paddingBottom: "4rem" }}>
        <div className="container">

          {/* Section header */}
          <div className="title-box text-center">
            <div style={{ display: "inline-block", background: "linear-gradient(135deg, #1e3a5f, #2d6a9f)", borderRadius: "999px", padding: "10px 36px", marginBottom: "16px" }}>
              <h3 style={{ color: "#fff", margin: 0, fontSize: "1.6rem", fontWeight: 700 }}>Get in Touch💌</h3>
            </div>
            <p className="subtitle-a">
              I'm currently a data science student exploring opportunities to learn and grow. Feel free to reach out!
            </p>
            <div className="line-mf" style={{ backgroundColor: NAVY }}></div>
          </div>

          <div className="row justify-content-center" style={{ maxWidth: "960px", margin: "0 auto" }}>

            {/* Personal card */}
            <div className="col-md-4">
              <div style={{ background: "#eef4ff", borderRadius: "20px", padding: "28px", marginBottom: "24px", boxShadow: "0 8px 20px #4c8bf518", border: "1px solid #4c8bf544" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "linear-gradient(135deg, #4c8bf5, #4c8bf599)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginRight: "14px", flexShrink: 0 }}>👩‍🎓</span>
                  <h5 style={{ margin: 0, fontWeight: 700, color: "#1e1e1e" }}>Personal</h5>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 700, color: "#4c8bf5", textTransform: "uppercase", letterSpacing: "0.5px" }}>Email</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon color="#4c8bf5" />
                    <a href="mailto:raynecheong@gmail.com" style={{ fontSize: "14px", color: "#333" }}>raynecheong@gmail.com</a>
                  </div>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 700, color: "#4c8bf5", textTransform: "uppercase", letterSpacing: "0.5px" }}>School Email</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon color="#4c8bf5" />
                    <a href="mailto:s10267916@connect.np.edu.sg" style={{ fontSize: "14px", color: "#333", wordBreak: "break-all" }}>s10267916@connect.np.edu.sg</a>
                  </div>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 700, color: "#4c8bf5", textTransform: "uppercase", letterSpacing: "0.5px" }}>Phone</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon color="#4c8bf5" />
                    <a href="tel:+65XXXXXXXX" style={{ fontSize: "14px", color: "#333" }}>+65 XXXX XXXX</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Online card */}
            <div className="col-md-4">
              <div style={{ background: "#f0eeff", borderRadius: "20px", padding: "28px", marginBottom: "24px", boxShadow: "0 8px 20px #7b61ff18", border: "1px solid #7b61ff44" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "linear-gradient(135deg, #7b61ff, #7b61ff99)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginRight: "14px", flexShrink: 0 }}>🌐</span>
                  <h5 style={{ margin: 0, fontWeight: 700, color: "#1e1e1e" }}>Online</h5>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 700, color: "#7b61ff", textTransform: "uppercase", letterSpacing: "0.5px" }}>LinkedIn</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <LinkedInIcon color="#7b61ff" />
                    <a href="https://linkedin.com/in/rayne-cheong-55b509304" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#333" }}>linkedin.com/in/rayne-cheong</a>
                  </div>
                </div>

                <div style={{ marginBottom: "12px" }}>
                  <p style={{ margin: "0 0 3px", fontSize: "11px", fontWeight: 700, color: "#7b61ff", textTransform: "uppercase", letterSpacing: "0.5px" }}>GitHub</p>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <GitHubIcon color="#7b61ff" />
                    <a href="https://github.com/raynecheong" target="_blank" rel="noopener noreferrer" style={{ fontSize: "14px", color: "#333" }}>github.com/raynecheong</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Teacher Referral card */}
            <div className="col-md-4">
              <div style={{ background: "#e6faf5", borderRadius: "20px", padding: "28px", marginBottom: "24px", boxShadow: "0 8px 20px #00916e18", border: "1px solid #00916e44" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "20px" }}>
                  <span style={{ width: "46px", height: "46px", borderRadius: "14px", background: "linear-gradient(135deg, #00916e, #00916e99)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "22px", marginRight: "14px", flexShrink: 0 }}>🏫</span>
                  <h5 style={{ margin: 0, fontWeight: 700, color: "#1e1e1e" }}>Referral</h5>
                </div>

                {/* Referral profile row */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", background: "#fff", borderRadius: "14px", padding: "14px 16px", marginBottom: "14px", border: "1px solid #00916e22" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ width: "40px", height: "40px", borderRadius: "50%", background: "linear-gradient(135deg, #00916e, #00916e66)", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", fontWeight: 700, fontSize: "16px", flexShrink: 0 }}>
                      T
                    </div>
                    <div>
                      <p style={{ margin: 0, fontWeight: 700, fontSize: "14px", color: "#1e1e1e" }}></p>
                      <p style={{ margin: 0, fontSize: "12px", color: "#666" }}>Senior Manager · Ngee Ann Polytechnic</p>
                    </div>
                  </div>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "#00916e", background: "#e6faf5", borderRadius: "999px", padding: "3px 10px", border: "1px solid #00916e44" }}>Referral</span>
                </div>

                <div style={{ marginBottom: "10px" }}>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <PhoneIcon color="#00916e" />
                    <a href="tel:+6564606844" style={{ fontSize: "14px", color: "#333" }}>+65 6460 6844</a>
                  </div>
                </div>

                <div>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <EmailIcon color="#00916e" />
                    <a href="mailto:TOH_Ser_Chye@np.edu.sg" style={{ fontSize: "14px", color: "#333" }}>TOH_Ser_Chye@np.edu.sg</a>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Contact;