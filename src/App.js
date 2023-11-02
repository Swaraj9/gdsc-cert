import "./App.css";
import gcjsLogo from "./media/logo-gcjs.svg";

const TeamName = ({ name, link }) => {
  return (
    <div style={{ marginRight: "1rem", marginBottom: "0.5rem" }}>
      <a href={link}>{name}</a>
    </div>
  );
};

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img src={gcjsLogo} alt="GCJS Logo" style={{ height: "150px" }} />
      <div
        style={{
          fontSize: "1.75rem",
          marginBottom: "2rem",
          paddingTop: "2rem",
          color: "#4285F4",
        }}
      >
        Google Cloud Study Jam 2023
      </div>
      <div
        style={{ fontSize: "1.75rem", color: "#4285F4", marginBottom: "2rem" }}
      >
        GDSC K. J. Somaiya Institute of Technology
      </div>
      <div style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
        Enter Your Registered Email
      </div>
      <input
        style={{
          padding: "0.75rem",
          borderRadius: "10px",
          border: "2px solid #999999",
          fontSize: "1rem",
          minWidth: "300px",
          marginBottom: "1rem",
          outline: "none",
          paddingBottom: "0.75rem",
        }}
        placeholder="Ex: abc.def@gmail.com"
      />
      <button
        style={{
          minWidth: "300px",
          padding: "0.75rem",
          fontSize: "1.25rem",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#4285F4",
          color: "white",
        }}
      >
        Download Certificate
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2rem",
          width: "80%",
        }}
      >
        <div style={{ fontSize: "1.75rem" }}>Our Team</div>
        <div
          style={{
            height: "125px",
            width: "5px",
            backgroundColor: "#4285F4",
            marginLeft: "2rem",
            marginRight: "2rem",
          }}
        ></div>
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          <TeamName name="Husain Mamuwala" link="https://www.linkedin.com/in/husain-mamuwala-6b3978198/" />
          <TeamName name="Piyush Dahiwadkar" link="https://www.linkedin.com/in/piyush-dahiwadkar-0741a1263/" />
          <TeamName name="Trushil Dhokiya" link="https://www.linkedin.com/in/trushil-dhokiya/" />
          <TeamName name="Swaraj Dusane" link="https://www.linkedin.com/in/swaraj-dusane-35941722b/" />
          <TeamName name="Bhavya Desai" link="https://www.linkedin.com/in/bhavya-desai-105089260/" />
          <TeamName name="Ayesha Loladia" link="https://www.linkedin.com/in/ayesha-loladia13?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
          <TeamName name="Saad Ansari" link="https://www.linkedin.com/in/muhammad-saad-ansari-562322231" />
          <TeamName name="Harsheet Trambadia" link="https://www.linkedin.com/in/harsheet-trambadia-01a18925b/" />
          <TeamName name="Eshaan Mittal" link="https://www.linkedin.com/in/eshaan-mital-910a37214/" />
          <TeamName name="Atharva Sawant" link="https://www.linkedin.com/in/atharva-sawant-431708259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" />
          <TeamName name="Sarthak Tadwalkar" link="https://www.linkedin.com/in/sarthak-tadwalkar-638483241?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" />
          <TeamName name="Gaurang Jadhav" link="https://www.linkedin.com/in/gaurang-jadhav-674580235/" />
          <TeamName name="Abdur Rehman Shaikh" link="https://www.linkedin.com/in/abdurrahmanshkh/" />
          <TeamName name="Varun Kanbhat" link="https://www.linkedin.com/in/varunkanbhat/" />
        </div>
      </div>
      <button
        style={{
          minWidth: "300px",
          padding: "0.75rem",
          fontSize: "1.25rem",
          borderRadius: "10px",
          border: "none",
          backgroundColor: "#4285F4",
          color: "white",
          marginTop: "2rem",
        }}
      >
        Sign Up as an Innovator and get Perks
      </button>
    </div>
  );
}

export default App;
