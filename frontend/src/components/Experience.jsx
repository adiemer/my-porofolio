import { useEffect, useState } from "react";
import axios from "axios";

function Experience() {
  const [experience, setExperience] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/api/experiences/")
      .then((res) => setExperience(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <section id="experience" className="p-6">
      <h2 className="text-2xl font-bold mb-4">Work Experience</h2>
      {experience.map((item) => (
        <div key={item.id} className="mb-4 border-b pb-2">
          <h3 className="text-xl font-semibold">
            {item.position} at {item.company}
          </h3>
          <p className="text-sm text-gray-600">
            {item.start_date} - {item.end_date || "Present"}
          </p>
          <p>{item.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
