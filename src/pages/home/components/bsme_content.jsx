import React from "react";

const styles = {
  body: {
    fontFamily: "Arial, sans-serif",
    lineHeight: 1.6,
    margin: 0,
    padding: 0,
    backgroundColor: "#f4f4f4",
    color: "#333",
  },
  container: {
    maxWidth: "1200px",
    margin: "20px auto",
    background: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    color: "#444",
    marginBottom: "15px",
    fontSize: "1.8em",
  },
  content: {
    marginBottom: "30px",
  },
  row: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
  },
  column: {
    flex: 1,
    minWidth: "300px",
    padding: "15px",
    background: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  columnHeading: {
    backgroundColor: "#efefef",
    padding: "10px",
    borderRadius: "4px",
    textAlign: "center",
    marginBottom: "10px",
  },
  ul: {
    listStyle: "square",
    paddingLeft: "20px",
  },
  li: {
    marginBottom: "8px",
  },
};

const MechanicalEngineering = () => {
  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <h2 style={styles.heading}>
          Bachelor of Science in Mechanical Engineering
        </h2>
        <div style={styles.content}>
          <p>
            Mechanical engineering concerns itself with mechanical design, energy
            conversion, fuel, combustion technologies, heat transfer, materials,
            noise control, acoustics, manufacturing processes, rail
            transportation, automatic control, product safety, reliability, and
            solar energy and technological impacts on society.
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

        <div style={styles.row}>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Program Outcomes</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>
                Apply knowledge of mathematics and science to solve complex
                problems.
              </li>
              <li style={styles.li}>
                Design and conduct experiments, analyze and interpret data.
              </li>
              <li style={styles.li}>
                Design systems and processes to meet desired needs.
              </li>
              <li style={styles.li}>
                Work effectively in multidisciplinary and multicultural teams.
              </li>
              <li style={styles.li}>
                Understand professional and ethical responsibilities.
              </li>
              <li style={styles.li}>
                Communicate effectively in professional settings.
              </li>
              <li style={styles.li}>
                Engage in lifelong learning and understand contemporary issues.
              </li>
            </ul>
          </div>
          <div style={styles.column}>
            <h3 style={styles.columnHeading}>Work Opportunities</h3>
            <ul style={styles.ul}>
              <li style={styles.li}>Project Management</li>
              <li style={styles.li}>Building Engineer</li>
              <li style={styles.li}>HVAC Engineer</li>
              <li style={styles.li}>Refrigeration Maintenance Engineer</li>
              <li style={styles.li}>Automotive Engineer</li>
              <li style={styles.li}>Drafting and Design</li>
              <li style={styles.li}>Production Engineer</li>
              <li style={styles.li}>Power Plant Design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MechanicalEngineering;
