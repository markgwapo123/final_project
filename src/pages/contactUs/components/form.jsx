import * as React from "react";

// preview-start

const Contacts = React.forwardRef((props, ref) => (
  <div
    ref={ref}
    id="home"
    style={{
      height: "100vh",
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#f4f4f4",
      marginBottom: "10px",
    }}
  >
    <h2>Contact Page</h2>
    <p>Get in touch with us here.asdsdsd</p>
  </div>
));

export default Contacts;
