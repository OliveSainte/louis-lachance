import { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const LandingPage = () => {
  const control1 = useAnimation();
  const control2 = useAnimation();
  const control3 = useAnimation();
  const [hasAnimated1, setHasAnimated1] = useState(false);
  const [hasAnimated2, setHasAnimated2] = useState(false);
  const [hasAnimated3, setHasAnimated3] = useState(false);

  const handleScroll = () => {
    const ref1 = document.getElementById("project1");
    const ref2 = document.getElementById("project2");
    const ref3 = document.getElementById("project3");
    const scrollPosition = window.scrollY + window.innerHeight;

    if (ref1 && ref1.offsetTop < scrollPosition && !hasAnimated1) {
      control1.start("visible");
      setHasAnimated1(true);
    }
    if (ref2 && ref2.offsetTop < scrollPosition && !hasAnimated2) {
      control2.start("visible");
      setHasAnimated2(true);
    }
    if (ref3 && ref3.offsetTop < scrollPosition && !hasAnimated3) {
      control3.start("visible");
      setHasAnimated3(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAnimated1, hasAnimated2, hasAnimated3]);

  const fadeInVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div>
      {/* App Bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          backgroundColor: "#111",
          color: "#fff",
          padding: "1rem",
          textAlign: "center",
          zIndex: 1000,
        }}
      >
        Louis Lachance
      </motion.div>

      {/* Intro Section */}
      <motion.div
        className="intro-section"
        initial="hidden"
        animate="visible"
        variants={fadeInVariants}
        style={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "64px",
          backgroundColor: "#000",
          color: "#fff",
        }}
      >
        <h1 style={{ marginBottom: "16px" }}>Editor | Director | Writer</h1>
        <p>
          Known for: The Man Who Had Cheese Sticks Powder On His Fingers, My Mom
          Was a Junkie Too, Yellow
        </p>
      </motion.div>

      {/* Projects Section */}
      <div
        className="projects-section"
        style={{ padding: "2rem", backgroundColor: "#111" }}
      >
        <motion.div
          id="project1"
          initial="hidden"
          animate={control1}
          variants={fadeInVariants}
          className="project"
          style={{
            margin: "2rem 0",
            padding: "1rem",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          <h2>The Man Who Had Cheese Sticks Powder On His Fingers (2017)</h2>
        </motion.div>

        <motion.div
          id="project2"
          initial="hidden"
          animate={control2}
          variants={fadeInVariants}
          className="project"
          style={{
            margin: "2rem 0",
            padding: "1rem",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          <h2>My Mom Was a Junkie Too (2017)</h2>
        </motion.div>

        <motion.div
          id="project3"
          initial="hidden"
          animate={control3}
          variants={fadeInVariants}
          className="project"
          style={{
            margin: "2rem 0",
            padding: "1rem",
            backgroundColor: "#333",
            color: "#fff",
            borderRadius: "8px",
          }}
        >
          <h2>Yellow (2017)</h2>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
