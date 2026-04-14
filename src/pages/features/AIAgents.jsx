


import { Helmet } from "react-helmet-async";

import PageHero from "../../components/PageHero";

// You can replace this with your actual image
import AgentAssign from "../../assets/Agent-Assign.webp";

export default function AIAgents() {



  return (
    <>
      <Helmet>
        <title>Super Agents | Karyaup</title>
        <meta name="description" content="Meet Super Agents -Maximize human productivity with custom AI teammates." />
      </Helmet>

      <div style={{ width: "100%", height: "100vh", overflow: "hidden", margin: 0, padding: 0 }}>
        <iframe
          src="/New folder/New folder/Agent.html"
          title="Demo Page"
          style={{
            width: "100%",
            height: "100%",
            border: "none"
          }}
        />
      </div>
    </>
  );
}
