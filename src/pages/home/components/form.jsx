import * as React from "react";
import URL from "../components/bsme.png"; // Image URL
import FacebookIcon from "../../../assets/facebook.png";
import GmailIcon from "../../../assets/gmail.png";
import InstagramIcon from "../../../assets/insta.png";
import southlandlogo from "../../../assets/sclogo.png";
import secsa from "../../../assets/secsaa.png";
import sc from "../components/SOUTHLAND COLLEGE.png";

const Home = React.forwardRef((props, ref) => (
<div
    ref={ref}
    id="home"
    style={{
      height: "100vh",
      overflowY: "scroll",
      margin: 0,
      padding: 0,
    }}
  >
    {/* First Section */}
    <div
      style={{
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={sc}
        alt="sc"
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "100vh",
          objectFit: "cover",
        }}
      />
    </div>
    {/* Second Section */}
    <div>
  <div
    style={{
      maxWidth: "1200px",
      margin: "20px auto",
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
    }}
  >
    <h2
      style={{
        textAlign: "center",
        color: "#444",
        marginBottom: "15px",
        fontSize: "1.8em",
      }}
    >
      Bachelor of Science in Mechanical Engineering
    </h2>
    <div style={{ marginBottom: "30px" }}>
      <p>
        Mechanical engineering concerns itself with mechanical design, energy
        conversion, fuel, combustion technologies, heat transfer, materials,
        noise control, acoustics, manufacturing processes, rail transportation,
        automatic control, product safety, reliability, and solar energy and
        technological impacts on society.
      </p>
      <p>
        The Bachelor of Science in Mechanical Engineering requires a solid
        understanding of fundamental concepts such as mechanics, dynamics,
        thermodynamics, materials science, structural analysis, and
        electricity. Mechanical engineers design and analyze manufacturing
        plants, industrial equipment and machinery, heating and cooling
        systems, transportation systems, aircraft, watercraft, robotics, and
        more.
      </p>
    </div>

    {/* Program Outcomes and Work Opportunities Section */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "15px",
          background: "#dddddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            backgroundColor: "#efefef",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Program Outcomes
        </h3>
        <ul style={{ listStyle: "square", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>
            Apply knowledge of mathematics and science to solve complex
            problems.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Design and conduct experiments, analyze and interpret data.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Design systems and processes to meet desired needs.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Work effectively in multidisciplinary and multicultural teams.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Understand professional and ethical responsibilities.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Communicate effectively in professional settings.
          </li>
          <li style={{ marginBottom: "8px" }}>
            Engage in lifelong learning and understand contemporary issues.
          </li>
        </ul>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "15px",
          background: "#dddddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            backgroundColor: "#efefef",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Work Opportunities
        </h3>
        <ul style={{ listStyle: "square", paddingLeft: "20px" }}>
          <li style={{ marginBottom: "8px" }}>Project Management</li>
          <li style={{ marginBottom: "8px" }}>Building Engineer</li>
          <li style={{ marginBottom: "8px" }}>HVAC Engineer</li>
          <li style={{ marginBottom: "8px" }}>
            Refrigeration Maintenance Engineer
          </li>
          <li style={{ marginBottom: "8px" }}>Automotive Engineer</li>
          <li style={{ marginBottom: "8px" }}>Drafting and Design</li>
          <li style={{ marginBottom: "8px" }}>Production Engineer</li>
          <li style={{ marginBottom: "8px" }}>Power Plant Design</li>
        </ul>
      </div>
    </div>

    {/* Mission and Vision Section */}
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      <div
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "15px",
          background: "#dddddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            backgroundColor: "#efefef",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Mission
        </h3>
        <p>
          Southland College School of Engineering, Computer Studies and
          Architecture (SECSA) aims to provide services to the students by
          conducting quality research and activities and disseminating and
          preserving technical knowledge relative to engineering, computer
          studies and architecture.
        </p>
      </div>

      <div
        style={{
          flex: 1,
          minWidth: "300px",
          padding: "15px",
          background: "#dddddd",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h3
          style={{
            backgroundColor: "#efefef",
            padding: "10px",
            borderRadius: "4px",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Vision
        </h3>
        <p>
          To be recognized inside the college as an active department assisting
          students towards greater achievement in their chosen field.
        </p>
      </div>
    </div>
  </div>
</div>

    {/* Section 4 */}
    <div
      style={{
        height: "45vh",
        padding: "20px",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        backgroundColor: "#dddddd",
        color: "#383333",
      }}
    >
      <div
        style={{
          width: "30%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <a href="SouthlandCollege" target="_blank" rel="noopener noreferrer">
          <img
            src={southlandlogo}
            alt="Facebook"
            style={{
              width: "150px", // Icon size
              height: "150px",
              margin: "5px",
              cursor: "pointer",
            }}
          />
        </a>
        <h2>SOUTHLAND COLLEGE</h2>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          {/* Social Media Icons */}
          <a
            href="https://www.facebook.com/SouthlandCollege"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FacebookIcon}
              alt="Facebook"
              style={{
                width: "30px", // Icon size
                height: "30px",
                margin: "5px",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="mailto:southlandcollege@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GmailIcon}
              alt="Gmail"
              style={{
                width: "30px", // Icon size
                height: "30px",
                margin: "5px",
                cursor: "pointer",
              }}
            />
          </a>
          <a
            href="https://www.instagram.com/SouthlandCollege"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={InstagramIcon}
              alt="Instagram"
              style={{
                width: "30px", // Icon size
                height: "30px",
                margin: "5px",
                cursor: "pointer",
              }}
            />
          </a>
        </div>
      </div>

      {/* Middle: Contact Information */}
      <div
        style={{
          textAlign: "center",
          width: "40%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h2>CONTACT US</h2>
        <p>Registrar's Office: (042) 710 2886</p>
        <p>Office of Student Affairs and Services: (042) 710 3027</p>
        <p>Admission Office: (042) 710 2541</p>
      </div>

      {/* Right Side: Map and Location */}
      <div
        style={{
          width: "30%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
        }}
      >
        <h2>LOCATION</h2>
        {/* Google Maps Embed */}
        <div style={{ width: "100%", height: "200px", marginTop: "10px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2650.26185412388!2d122.82033784796026!3d9.98336579176549!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33ac113abdc74dc7%3A0xfd31dde515e4c24!2sSouthland%20College%20of%20Kabankalan%20City%2C%20Inc.!5e1!3m2!1sen!2sph!4v1733124889265!5m2!1sen!2sph"
            width="400"
            height="200"
            style={{ border: "0", borderRadius: "10px" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </div>
));

export default Home;
