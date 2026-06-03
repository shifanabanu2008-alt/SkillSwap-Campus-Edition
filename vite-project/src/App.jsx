function App() {
  const stats = [
    { title: "Students", value: "2,500+" },
    { title: "Skills", value: "120+" },
    { title: "Workshops", value: "80+" },
    { title: "Mentors", value: "150+" },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navbar */}
      <nav className="flex justify-between items-center px-8 py-5 border-b border-slate-800">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
          SkillSwap
        </h1>

        <div className="hidden md:flex gap-8">
          <a href="/">Home</a>
          <a href="/">Skills</a>
          <a href="/">Mentors</a>
          <a href="/">Workshops</a>
        </div>

        <button className="bg-cyan-500 px-5 py-2 rounded-lg font-semibold">
          Join Now
        </button>
      </nav>

      {/* Hero */}
      <section className="text-center py-24 px-6">
        <h1 className="text-6xl font-bold mb-6">
          Learn Skills.
          <span className="text-cyan-400"> Share Knowledge.</span>
        </h1>

        <p className="text-slate-400 text-xl max-w-3xl mx-auto">
          Connect with talented students, exchange skills,
          attend workshops and build your future together.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <button className="bg-cyan-500 px-8 py-3 rounded-xl font-bold">
            Get Started
          </button>

          <button className="border border-slate-700 px-8 py-3 rounded-xl">
            Explore Skills
          </button>
        </div>
      </section>

      {/* Stats */}
      <section className="grid md:grid-cols-4 gap-6 px-8 max-w-6xl mx-auto">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-slate-900 border border-slate-800 p-6 rounded-2xl text-center"
          >
            <h2 className="text-4xl font-bold text-cyan-400">
              {item.value}
            </h2>
            <p className="text-slate-400 mt-2">
              {item.title}
            </p>
          </div>
        ))}
      </section>

      {/* Skills */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Trending Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {[
            "React",
            "Python",
            "UI/UX",
            "Java",
            "AI",
            "Public Speaking",
            "Video Editing",
            "Figma",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-slate-900 border border-slate-800 px-6 py-3 rounded-full"
            >
              {skill}
            </div>
          ))}
        </div>
      </section>

      {/* Mentors */}
      <section className="px-8 py-10">
        <h2 className="text-4xl font-bold text-center mb-10">
          Top Mentors
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-6"
            >
              <div className="w-20 h-20 rounded-full bg-cyan-500 mx-auto"></div>

              <h3 className="text-center text-xl font-bold mt-4">
                Mentor {item}
              </h3>

              <p className="text-center text-slate-400">
                Full Stack Developer
              </p>

              <button className="w-full mt-5 bg-cyan-500 py-2 rounded-lg">
                Connect
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Workshops */}
      <section className="py-20 px-8">
        <h2 className="text-4xl font-bold text-center mb-10">
          Upcoming Workshops
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold">
              React Bootcamp
            </h3>
            <p className="text-slate-400 mt-2">
              Master React from basics to advanced.
            </p>
          </div>

          <div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">
            <h3 className="text-2xl font-bold">
              UI/UX Workshop
            </h3>
            <p className="text-slate-400 mt-2">
              Learn modern product design.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-20 px-6">
        <h2 className="text-5xl font-bold">
          Ready to Start?
        </h2>

        <p className="text-slate-400 mt-4">
          Join thousands of students already learning.
        </p>

        <button className="mt-8 bg-cyan-500 px-10 py-4 rounded-xl font-bold">
          Join SkillSwap
        </button>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800 text-center py-6 text-slate-500">
        © 2026 SkillSwap Campus Edition
      </footer>
    </div>
  );
}

export default App;