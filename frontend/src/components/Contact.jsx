function Contact() {
  return (
    <section id="contact" className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <form className="max-w-lg mx-auto flex flex-col gap-4">
        <input type="text" placeholder="Your Name" className="border p-2 rounded" required />
        <input type="email" placeholder="Your Email" className="border p-2 rounded" required />
        <textarea placeholder="Your Message" className="border p-2 rounded" rows="4" required />
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition">
          Send Message
        </button>
      </form>
    </section>
  );
}

export default Contact;
