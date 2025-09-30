import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="header">
        <h1>Chodipilli Sai Kumar</h1>
        <div className="contact-info">
          <p>📞 +91-6000875956</p>
          <p>📧 saikumarchodipilli@gmail.com</p>
          <p>🔗 <a href="https://linkedin.com/in/chodipil" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p>💻 <a href="https://github.com/saikumar0204" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </div>
      </header>

      <section className="summary">
        <h2>Summary</h2>
        <p>Software Engineer with 3 years of experience developing scalable distributed systems, real-time data pipelines, and high-performance APIs. Proficient in Java, Spring Boot, Python, and big data technologies such as Apache Kafka, Spark, Hadoop, and Druid.</p>
      </section>

      <section className="education">
        <h2>Education</h2>
        <div className="education-item">
          <h3>Indian Institute of Technology Guwahati</h3>
          <p className="duration">July 2018 - June 2022</p>
          <p>B.Tech in Mechanical Engineering, Minor in Electronics and Communication</p>
          <p><strong>CGPA:</strong> 8.08/10</p>
        </div>
      </section>

      <section className="experience">
        <h2>Experience</h2>
        <div className="experience-item">
          <h3>Software Engineer - PayPal</h3>
          <p className="duration">Aug 2022 - Present | Bangalore, India</p>
          <ul>
            <li>Built a Kafka-based data pipeline and Hadoop MapReduce job to capture and aggregate rules-hit events, compressing millions of 8KB events into 150MB per day, reducing storage footprint and code maintenance.</li>
            <li>Implemented a runtime jar management solution for a repository using Maven artifact resolution, enabling on-the-fly downloads and config-based version switching, saving 6 hours per release cycle in developer effort.</li>
            <li>Generated Python automation using pandas to streamline MerchantID migration, reducing dataset size from 60K to 15K rows, enhancing application performance.</li>
            <li>Migrated BinDataServ API calls to a new endpoint with updated structure and logic, ensuring seamless operation without issues for an API handling 20M daily requests.</li>
            <li>Optimized batch application queries, reducing execution time by 40% and improving throughput.</li>
            <li>Fixed latency discrepancies in downstream APIs by correcting inaccurate duration logging, reducing gap by 15ms at P95.</li>
            <li>Enhanced CI/CD pipelines by migrating 30 jobs to company-managed VMs, improving fault tolerance, scalability, and maintainability.</li>
            <li>Automated release process with Python cloning, merging, version bumping, CI triggers, reducing release workload by 0.5 days per cycle.</li>
          </ul>
        </div>
      </section>

      <section className="projects">
        <h2>Projects</h2>
        <div className="project-item">
          <h3>Monitoring System</h3>
          <p className="tech-stack">React, Node.js, Spark, Kafka, Apache Druid</p>
          <p className="duration">Apr 2025</p>
          <ul>
            <li>Designed and developed an MVP for real-time monitoring to track anomalies during feature ramps and deployments.</li>
            <li>Integrated Apache Druid as time-series DB for storing and querying high-volume metrics.</li>
            <li>Developed Spark aggregation jobs to compute variations over sliding windows (5min, 10min, etc.).</li>
            <li>Devised ranking algorithms to highlight significant anomalies, enabling faster root-cause analysis.</li>
            <li>Delivered interactive dashboards for anomaly detection, reducing issue identification time and improving system reliability.</li>
          </ul>
        </div>
        <div className="project-item">
          <h3>IITG Sports Board Website</h3>
          <p className="tech-stack">Node.js, Passport.js, MongoDB, Multer</p>
          <p className="duration">Jul 2021 - Sep 2021</p>
          <ul>
            <li>Led a full-stack sports management website to manage events, scores, teams, and facilities with Outlook-based authentication.</li>
            <li>Integrated MongoDB for persistence and Multer for secure file/image handling.</li>
          </ul>
        </div>
      </section>

      <section className="skills">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h4>Languages</h4>
            <p>C, Java 8, Python, JavaScript, SQL, HTML/CSS</p>
          </div>
          <div className="skill-category">
            <h4>Frameworks/Technologies</h4>
            <p>Spring Boot, Spring Batch, React, Node.js, Kafka, Spark, Hadoop, Apache Druid, AMQ, MongoDB, MySQL, Linux</p>
          </div>
          <div className="skill-category">
            <h4>Tools</h4>
            <p>Git, Jenkins, Harness, Docker, JUnit, AMQ, CI/CD Pipelines</p>
          </div>
        </div>
      </section>

      <section className="achievements">
        <h2>Achievements</h2>
        <ul>
          <li><strong>Spot Award 2024</strong> for successful migration of CI/CD VMs from Devcos to Testapps.</li>
          <li>Secured <strong>AIR 6687 in JEE Advanced 2018</strong> among 250K candidates.</li>
          <li>Recipient of <strong>Dakshana Scholarship 2016</strong> among 40,000 Navodaya students.</li>
          <li>Selected for <strong>Jawahar Navodaya Vidyalaya in 2011</strong>, among the top students district-wide.</li>
        </ul>
      </section>

      <footer className="footer">
        <p>© 2025 Sai Kumar Chodipilli. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
