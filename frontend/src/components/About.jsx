function About() {
  return (
    <section id="about" className="pt-20 p-8 my-8 rounded-lg bg-blue-900 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="bg-blue-900 text-white">
          Hi, I'm a passionate software developer with experience in building full-stack applications using modern
          technologies. I enjoy solving real-world problems and continuously learning.
        </p>
        <ul className="mt-4 list-disc pl-5">
          <li>React / Django / Firebase</li>
          <li>RESTful APIs & database design</li>
          <li>Problem solving and clean architecture</li>
        </ul>
      </div>
    </section>
  );
}

export default About;
