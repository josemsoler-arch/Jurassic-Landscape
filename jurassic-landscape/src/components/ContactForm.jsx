export default function ContactForm() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <h2 className="font-display text-5xl text-center mb-16">
          Get In <span style={{ color: "var(--gold)" }}>Touch</span>
        </h2>
        <form className="space-y-6">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-4 bg-transparent border border-leaf/20 focus:border-gold outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-4 bg-transparent border border-leaf/20 focus:border-gold outline-none"
          />
          <textarea
            placeholder="Message"
            rows="6"
            className="w-full p-4 bg-transparent border border-leaf/20 focus:border-gold outline-none"
          ></textarea>
          <button type="submit" className="btn-primary w-full">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
