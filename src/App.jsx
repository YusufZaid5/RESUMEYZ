import { useEffect, useState } from "react";
export default function Portfolio() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);
  return (
    <div className="min-h-screen bg-black text-yellow-50 font-sans overflow-x-hidden cursor-none relative">
      {/* Batman Cursor */}
     <div
  className="fixed pointer-events-none z-[9999] transition-transform duration-75"
  style={{
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: "translate(-50%, -50%)",
  }}
>
  <div className="w-10 h-10 rounded-full border-2 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.9)] flex items-center justify-center text-yellow-400 text-sm bg-black/40 backdrop-blur-md">
    🦇
  </div>
</div>

      {/* Gotham Background */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center animate-[zoom_20s_linear_infinite]"></div>

      {/* Yellow Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/10 blur-3xl rounded-full"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/5 via-transparent to-black animate-pulse"></div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-black/40 border-b border-yellow-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-black tracking-[0.2em] text-yellow-400">
            BATMAN // YUSUF
          </h1>

          <div className="hidden md:flex gap-8 text-sm uppercase tracking-wide">
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-yellow-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-yellow-400 transition">
              Projects
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 pt-28 max-w-7xl mx-auto gap-16 animate-[fadeIn_1.5s_ease-in-out]">
        <div className="flex-1 z-10">
          <p className="text-yellow-400 uppercase tracking-[0.4em] mb-4 text-sm">
            THE DARK KNIGHT DEVELOPER
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-tight mb-6">
            Yusuf <span className="text-yellow-400">Zaid</span>
          </h1>

          <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-semibold">
            AI Engineer • Web Developer • Problem Solver
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed max-w-2xl mb-10">
            AI-focused B.Tech student passionate about futuristic web experiences,
            intelligent systems, and cinematic UI design. Skilled in React,
            Java, Python, and Machine Learning.
          </p>

          <div className="flex flex-wrap gap-5">
            <a
              href="https://github.com/YusufZaid5"
              target="_blank"
              className="px-8 py-4 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 shadow-lg shadow-yellow-500/20 font-bold"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/yusuf-zaid/"
              target="_blank"
              className="px-8 py-4 rounded-2xl border border-yellow-400 hover:bg-yellow-500/10 transition-all duration-300 font-semibold"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Hero Image */}
        <div className="flex-1 flex justify-center z-10">
          <div className="relative animate-[float_4s_ease-in-out_infinite]">
            <div className="absolute inset-0 rounded-full bg-yellow-500 blur-3xl opacity-20 scale-110"></div>

            <div className="w-[320px] h-[320px] md:w-[420px] md:h-[420px] rounded-full border-4 border-yellow-400 bg-neutral-950 flex items-center justify-center text-7xl shadow-2xl shadow-yellow-500/20 overflow-hidden">
              🦇
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-24 border-t border-yellow-500/10">
        <h2 className="text-4xl font-bold mb-10 text-yellow-400">About Me</h2>

        <div className="bg-neutral-950 border border-yellow-500/10 rounded-3xl p-8 text-gray-300 leading-relaxed text-lg shadow-xl">
          I am currently pursuing B.Tech in Artificial Intelligence at SRM
          Institute of Science and Technology, Chennai. I enjoy building modern
          cinematic web applications and AI-powered solutions.
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-t border-yellow-500/10">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            'Java',
            'Python',
            'C++',
            'React.js',
            'Node.js',
            'Machine Learning',
            'SQL',
            'GitHub',
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-neutral-950 border border-yellow-500/10 rounded-2xl p-6 text-center hover:border-yellow-400 hover:-translate-y-2 transition-all duration-300 shadow-lg"
            >
              <p className="font-semibold text-lg">{skill}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-24 border-t border-yellow-500/10">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-neutral-950 border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">PingBot</h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              AI-powered chatbot capable of answering uploaded document queries.
            </p>
          </div>

          <div className="bg-neutral-950 border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-400 transition-all duration-300 shadow-xl">
            <h3 className="text-3xl font-bold mb-4">RouteWise</h3>

            <p className="text-gray-400 leading-relaxed mb-6">
              Smart traffic prediction platform using machine learning.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-24 border-t border-yellow-500/10">
        <h2 className="text-4xl font-bold mb-12 text-yellow-400">Contact</h2>

        <div className="bg-neutral-950 border border-yellow-500/10 rounded-3xl p-10 text-center shadow-2xl">
          <h3 className="text-3xl font-bold mb-4">
            Welcome To Gotham.
          </h3>

          <p className="text-gray-400 mb-10 text-lg">
            Open for internships, collaborations, and futuristic projects.
          </p>

          <div className="flex flex-wrap justify-center gap-5">
            <a
              href="mailto:zaid.yusuf226@gmail.com"
              className="px-8 py-4 rounded-2xl bg-yellow-400 text-black hover:bg-yellow-300 transition-all duration-300 font-bold shadow-lg shadow-yellow-500/20"
            >
              Email Me
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-yellow-500/10 py-10 text-center text-gray-500 text-sm">
        © 2026 Yusuf Zaid • Gotham Portfolio
      </footer>
    </div>
  );
}


