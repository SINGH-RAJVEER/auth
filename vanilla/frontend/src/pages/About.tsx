function About() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>About This Project</h1>
      <p>This is a vanilla React app with:</p>
      <ul style={{ textAlign: "left", maxWidth: "400px", margin: "1rem auto" }}>
        <li>Vite for fast development</li>
        <li>React Router for navigation</li>
        <li>React Compiler (babel-plugin-react-compiler)</li>
        <li>Hono backend running on port 3000</li>
        <li>TypeScript for type safety</li>
      </ul>
    </div>
  );
}

export default About;
