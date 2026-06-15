import SocialWidgets from "@/components/SocialWidgets";
import Reveal from "@/components/Reveal";
import {
  ArrowIcon,
  ExternalIcon,
  PinIcon,
  MailIcon,
  LinkedInIcon,
  GitHubIcon,
} from "@/components/Icons";
import { profile, skills, projects, education, languages } from "@/data/content";

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <main className="page">
      {/* ===== Widgets de contato no topo ===== */}
      <header className="topbar container">
        <span className="brand">
          <span className="brand-mark">AP</span>
          <span className="brand-name">Alexandre Pastore</span>
        </span>
        <SocialWidgets />
      </header>

      {/* ===== Hero ===== */}
      <section className="hero container">
        <Reveal>
          <p className="kicker">// Portfólio</p>
          <h1 className="hero-name">
            Alexandre <span className="accent-grad">Pastore</span>
          </h1>
          <p className="hero-role">{profile.role}</p>
          <p className="hero-tagline">{profile.tagline}</p>
          <p className="hero-location">
            <PinIcon width={16} height={16} /> {profile.location}
          </p>
          <div className="hero-cta">
            <a href="#projetos" className="btn btn--primary">
              Ver projetos <ArrowIcon width={18} height={18} />
            </a>
            <a href="#contato" className="btn btn--ghost">
              Entrar em contato
            </a>
          </div>
        </Reveal>
      </section>

      {/* ===== Sobre ===== */}
      <section id="sobre" className="section container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">// Sobre mim</span>
            <h2 className="section-title">Quem é o Alexandre</h2>
          </div>
        </Reveal>
        <div className="about-text">
          {profile.bio.map((p, i) => (
            <Reveal key={i} delay={i * 60}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Competências ===== */}
      <section id="skills" className="section container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">// Competências</span>
            <h2 className="section-title">O que eu trago</h2>
          </div>
        </Reveal>
        <div className="skills-wrap">
          <Reveal className="skill-group">
            <h3 className="skill-group-title">
              <span className="dot dot--blue" /> Técnicas
            </h3>
            <div className="chips">
              {skills.tech.map((s) => (
                <span key={s} className="chip chip--blue">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal className="skill-group" delay={100}>
            <h3 className="skill-group-title">
              <span className="dot dot--yellow" /> Comportamentais
            </h3>
            <div className="chips">
              {skills.soft.map((s) => (
                <span key={s} className="chip chip--yellow">
                  {s}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Projetos ===== */}
      <section id="projetos" className="section container">
        <Reveal>
          <div className="section-head">
            <span className="kicker">// Sistemas</span>
            <h2 className="section-title">Projetos & Sistemas</h2>
          </div>
        </Reveal>
        <div className="projects-grid">
          {projects.map((proj, i) => (
            <Reveal key={proj.name} delay={i * 90} className="project-card-wrap">
              <a
                href={proj.url}
                target="_blank"
                rel="noopener noreferrer"
                className="project-card"
              >
                <div className="project-top">
                  <h3 className="project-name">{proj.name}</h3>
                  <ExternalIcon width={20} height={20} className="project-ext" />
                </div>
                <p className="project-desc">{proj.description}</p>
                <div className="project-tags">
                  {proj.tech.map((t) => (
                    <span key={t} className="tag">
                      {t}
                    </span>
                  ))}
                </div>
                <span className="project-link">
                  Acessar projeto <ArrowIcon width={16} height={16} />
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ===== Formação & Idiomas ===== */}
      <section id="formacao" className="section container">
        <div className="info-grid">
          <Reveal className="info-col">
            <div className="section-head">
              <span className="kicker">// Formação</span>
              <h2 className="section-title">Estudos</h2>
            </div>
            {education.map((edu) => (
              <div key={edu.course} className="edu-card">
                <div className="edu-period">{edu.period}</div>
                <h3 className="edu-course">{edu.course}</h3>
                <p className="edu-meta">
                  {edu.level}
                  {edu.institution ? ` · ${edu.institution}` : ""}
                </p>
              </div>
            ))}
          </Reveal>

          <Reveal className="info-col" delay={100}>
            <div className="section-head">
              <span className="kicker">// Idiomas</span>
              <h2 className="section-title">Idiomas</h2>
            </div>
            <div className="lang-list">
              {languages.map((lang) => (
                <div key={lang.name} className="lang">
                  <span className="lang-name">{lang.name}</span>
                  {lang.level ? (
                    <span className="lang-level">{lang.level}</span>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== Contato ===== */}
      <footer id="contato" className="contact">
        <div className="container">
          <Reveal>
            <span className="kicker">// Contato</span>
            <h2 className="contact-title">
              Vamos <span className="accent-grad">conversar?</span>
            </h2>
            <p className="contact-sub">
              Aberto a novos projetos, parcerias e oportunidades.
            </p>
            <a href={`mailto:${profile.email}`} className="btn btn--primary btn--lg">
              <MailIcon width={20} height={20} /> {profile.email}
            </a>
            <div className="contact-links">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <LinkedInIcon width={20} height={20} /> LinkedIn
              </a>
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
              >
                <GitHubIcon width={20} height={20} /> GitHub
              </a>
            </div>
          </Reveal>

          <div className="footer-bottom">
            <span className="brand-mark small">AP</span>
            <p>© {year} Alexandre Pastore. Feito com precisão e ritmo.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
