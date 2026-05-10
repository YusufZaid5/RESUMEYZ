export default function Portfolio() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-x-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-red-600/20 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500/10 blur-3xl rounded-full"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-red-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wider text-red-500">
            Yusuf Zaid
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#about" className="hover:text-red-500 transition">
              About
            </a>
            <a href="#skills" className="hover:text-red-500 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-red-500 transition">
              Projects
            </a>
            <a href="#achievements" className="hover:text-red-500 transition">
              Achievements
            </a>
            <a href="#contact" className="hover:text-red-500 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 pt-28 max-w-7xl mx-auto gap-16">
        <div className="flex-1 z-10">
          <p className="text-red-500 uppercase tracking-[0.3em] mb-4 text-sm">
            Welcome To My Portfolio
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight mb-6">
            Yusuf <span className="text-red-500">Zaid</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
            AI Student • Developer • Problem Solver
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            AI-focused B.Tech student passionate about software development,
            intelligent systems, and modern web technologies. Skilled in Java,
            Python, React.js, and Machine Learning with experience building
            impactful projects and hackathon solutions.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/YusufZaid5"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-500/30 font-semibold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yusuf-zaid/"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-red-500 hover:bg-red-500/10 transition-all duration-300 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex-1 flex justify-center z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-red-600 blur-3xl opacity-30 scale-110"></div>

            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-4 border-red-500 bg-zinc-900 flex items-center justify-center text-4xl font-bold shadow-2xl shadow-red-500/30">
             YZ
           </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-red-500/10"
      >
        <h2 className="text-4xl font-bold mb-10 text-red-500">About Me</h2>

        <div className="bg-zinc-900/60 border border-red-500/10 rounded-3xl p-8 text-gray-300 leading-relaxed text-lg shadow-xl">
          I am currently pursuing B.Tech in Artificial Intelligence at SRM
          Institute of Science and Technology, Chennai. I enjoy building modern
          web applications, AI-powered solutions, and solving coding problems.
          My interests include Machine Learning, Full Stack Development, and
          Software Engineering.
        </div>
      </section>

      {/* Skills */}
      <section
        id="skills"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-red-500/10"
      >
        <h2 className="text-4xl font-bold mb-12 text-red-500">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Java",
            "Python",
            "C++",
            "React.js",
            "Node.js",
            "Machine Learning",
            "SQL",
            "GitHub",
            "HTML",
            "CSS",
            "Pandas",
            "scikit-learn",
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-red-500/10 rounded-2xl p-6 text-center hover:border-red-500 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <p className="font-semibold text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section
        id="projects"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-red-500/10"
      >
        <h2 className="text-4xl font-bold mb-12 text-red-500">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-zinc-900 border border-red-500/10 rounded-3xl p-8 hover:border-red-500 transition-all duration-300 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">PingBot</h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              AI-powered chatbot capable of answering queries from uploaded
              documents with interactive real-time responses.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                React.js
              </span>
              <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                Node.js
              </span>
              <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                AI
              </span>
            </div>
          </div>

          <div className="bg-zinc-900 border border-red-500/10 rounded-3xl p-8 hover:border-red-500 transition-all duration-300 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">RouteWise</h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Smart traffic prediction and route analysis platform using machine
              learning techniques and route visualization.
            </p>

            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                React.js
              </span>
              <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                Machine Learning
              </span>
              <span className="px-4 py-2 rounded-full bg-red-500/10 text-red-400 text-sm">
                Dashboard
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section
        id="achievements"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-red-500/10"
      >
        <h2 className="text-4xl font-bold mb-12 text-red-500">
          Achievements
        </h2>

        <div className="space-y-6">
          {[
            "Awarded Special Mention at HackNova 3.0 Hackathon at SRMIST Chennai.",
            "Solved 100+ coding problems on LeetCode using Java and C++.",
            "Secured 2nd Position in a university-level hackathon.",
          ].map((achievement, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-red-500/10 rounded-2xl p-6 hover:border-red-500 transition-all duration-300"
            >
              <p className="text-lg text-gray-300">{achievement}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="max-w-6xl mx-auto px-6 py-24 border-t border-red-500/10"
      >
        <h2 className="text-4xl font-bold mb-12 text-red-500">Contact</h2>

        <div className="bg-zinc-900 border border-red-500/10 rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Let’s Build Something Amazing
          </h3>

          <p className="text-gray-400 mb-10 text-lg">
            Open for internships, collaborations, and exciting opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:zaid.yusuf226@gmail.com"
              className="px-8 py-4 rounded-2xl bg-red-600 hover:bg-red-700 transition-all duration-300 font-semibold shadow-lg shadow-red-500/20"
            >
              Email Me
            </a>

            <a
              href="https://github.com/YusufZaid5"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-red-500 hover:bg-red-500/10 transition-all duration-300 font-semibold"
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-red-500/10 py-10 text-center text-gray-500 text-sm">
        © 2026 Yusuf Zaid. Built with React & Tailwind CSS.
      </footer>
    </div>
  );
}
