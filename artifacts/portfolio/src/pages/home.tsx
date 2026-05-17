import { motion } from "framer-motion";
import { Terminal, Code2, Database, GitBranch, Mail, ArrowRight, Github, Linkedin, ExternalLink } from "lucide-react";
// @ts-ignore
import resumePdf from "@assets/Syed_Saqlain_Resume_(1)_1778265099878.pdf";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full relative selection:bg-primary selection:text-primary-foreground">
      <div className="bg-noise"></div>
      <div className="fixed inset-0 z-[-1] bg-background bg-grid"></div>
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full border-b border-border/40 bg-background/80 backdrop-blur-md z-40">
        <div className="container mx-auto px-6 h-16 flex items-center justify-between">
          <div className="font-mono font-bold text-primary text-xl tracking-tighter">
            {"<Saqlain />"}
          </div>
          <div className="hidden md:flex items-center gap-8 font-mono text-sm text-muted-foreground">
            <a href="#about" className="hover:text-primary transition-colors">About</a>
            <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
            <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            <a 
              href={resumePdf} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-primary text-primary px-4 py-2 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            >
              Resume
            </a>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="hero" className="min-h-[70vh] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="font-mono text-primary mb-4">Hi, my name is</div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 text-foreground">
              Syed Saqlain.
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground mb-8">
              I build robust backends & automate workflows.
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-12 leading-relaxed">
              Results-driven Python Backend Developer and Automation Specialist based in India. 
              I specialize in ERPNext, scalable APIs, and turning complex business logic into reliable, automated systems.
            </p>
            <div className="flex flex-wrap gap-4 font-mono">
              <a 
                href="#contact" 
                className="bg-primary text-primary-foreground px-6 py-3 flex items-center gap-2 hover:opacity-90 transition-opacity"
              >
                Get In Touch <ArrowRight className="w-4 h-4" />
              </a>
              <a 
                href={resumePdf}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border bg-card px-6 py-3 flex items-center gap-2 hover:border-primary hover:text-primary transition-all"
              >
                Download Resume <Terminal className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-mono font-bold text-foreground">
              <span className="text-primary">01.</span> About Me
            </h3>
            <div className="h-px bg-border flex-1 max-w-xs"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p>
                I am a problem solver at heart, with a deep focus on backend architecture, business systems, and automation. My journey involves not just writing code, but understanding the business needs that drive the code.
              </p>
              <p>
                Currently, I'm working as a Backend Developer & Automation Specialist, where I've built everything from ERPNext-based management systems to AI-powered marketing platforms. I excel in environments where I can take ownership of a system from database schema to deployment.
              </p>
              <div className="bg-card border border-border p-6 font-mono text-sm text-foreground">
                <div className="text-primary mb-2">// Core Strengths</div>
                <ul className="grid grid-cols-2 gap-2">
                  <li>&gt; Problem Solving</li>
                  <li>&gt; Backend Thinking</li>
                  <li>&gt; Rapid Learning</li>
                  <li>&gt; Business Logic</li>
                  <li>&gt; Independent Execution</li>
                  <li>&gt; Ownership</li>
                </ul>
              </div>
            </div>
            <div className="relative group">
              <div className="absolute inset-0 border-2 border-primary translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300 z-0"></div>
              <div className="relative z-10 bg-card border border-border p-8 h-full flex flex-col justify-center items-center text-center space-y-4">
                <Terminal className="w-16 h-16 text-primary" />
                <div className="font-mono">
                  <div className="text-xl text-foreground font-bold mb-2">Education</div>
                  <div className="text-muted-foreground mb-1">Master of Computer Applications (MCA)</div>
                  <div className="text-xs text-primary">IGNOU (Starting Sep 2026)</div>
                  <div className="text-muted-foreground mt-4 mb-1">Bachelor of Computer Applications (BCA)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-mono font-bold text-foreground">
              <span className="text-primary">02.</span> Technical Arsenal
            </h3>
            <div className="h-px bg-border flex-1 max-w-xs"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
              <Code2 className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-4">Languages & Backend</h4>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li>Python, SQL, JavaScript</li>
                <li>FastAPI, REST APIs</li>
                <li>CRUD Operations</li>
                <li>API Integrations</li>
              </ul>
            </div>
            
            <div className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
              <Database className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-4">Data & Systems</h4>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li>MySQL, MongoDB</li>
                <li>ERPNext</li>
                <li>Frappe Framework</li>
                <li>Business System Dev</li>
              </ul>
            </div>

            <div className="bg-card border border-border p-6 hover:border-primary/50 transition-colors">
              <GitBranch className="w-8 h-8 text-primary mb-4" />
              <h4 className="font-bold text-lg mb-4">Automation & Cloud</h4>
              <ul className="space-y-2 font-mono text-sm text-muted-foreground">
                <li>N8N, Power Automate</li>
                <li>Microsoft 365 Admin</li>
                <li>Google Workspace Migration</li>
                <li>SPF, DKIM, MFA, 2FA</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="scroll-mt-24">
          <div className="flex items-center gap-4 mb-12">
            <h3 className="text-2xl font-mono font-bold text-foreground">
              <span className="text-primary">03.</span> Experience & Projects
            </h3>
            <div className="h-px bg-border flex-1 max-w-xs"></div>
          </div>

          <div className="space-y-12">
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[8.5rem] top-0 bottom-0 w-px bg-border"></div>
              
              <div className="md:grid md:grid-cols-[8rem_1fr] gap-8 mb-12 relative">
                <div className="hidden md:block font-mono text-sm text-muted-foreground pt-1">
                  Current
                </div>
                <div className="hidden md:block absolute left-[8.5rem] top-2 w-2 h-2 -translate-x-[4.5px] rounded-full bg-primary border-4 border-background box-content"></div>
                
                <div className="bg-card border border-border p-6 hover:border-primary/30 transition-colors">
                  <h4 className="text-xl font-bold text-foreground mb-1">Backend Developer & Automation Specialist</h4>
                  <div className="text-primary font-mono text-sm mb-4">ASZ Technologies</div>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Built an ERPNext-based Church Management System for workflow automation and operations management.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Developed an AI Marketing Automation Platform using N8N, LinkedIn workflows, Expandi, and Apollo.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Created Python and Power Automate tools for automated email extraction and processing.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Independently migrated Google Workspace to Microsoft 365 including emails, drives, and user management.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Improved email domain reputation using SPF, DKIM, and email deliverability best practices.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Built an internal utility platform using FastAPI + React for PDF productivity tools.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Built a Python-based OBD Scanner prototype for vehicle diagnostics and issue detection.</li>
                    <li className="flex gap-2"><span className="text-primary font-mono">&gt;</span> Developed an eCommerce platform prototype using FastAPI, MySQL, and MongoDB.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="scroll-mt-24 max-w-2xl mx-auto text-center pb-32">
          <div className="font-mono text-primary mb-4">04. What's Next?</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Get In Touch</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed">
            I'm currently seeking remote-first backend development opportunities to grow into a Senior Python Backend Developer. Whether you have a question or just want to say hi, my inbox is always open.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href="mailto:syedsaqlainasz@gmail.com"
              className="bg-primary text-primary-foreground px-8 py-4 font-mono font-bold w-full sm:w-auto hover:opacity-90 transition-opacity"
            >
              Say Hello
            </a>
          </div>

          <div className="flex justify-center gap-6">
            <a href="https://github.com/syedsaqlainbhai" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Github className="w-6 h-6" />
              <span className="sr-only">GitHub</span>
            </a>
            <a href="https://www.linkedin.com/in/syed-saqlain-3105b92b9/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
              <Linkedin className="w-6 h-6" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a href="mailto:syedsaqlainasz@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
              <Mail className="w-6 h-6" />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </section>
      </main>

      <footer className="py-6 text-center text-sm font-mono text-muted-foreground border-t border-border/40">
        <p>Built by Syed Saqlain</p>
      </footer>
    </div>
  );
}