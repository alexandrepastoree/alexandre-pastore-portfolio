import { profile } from "@/data/content";
import { LinkedInIcon, GitHubIcon, MailIcon, ArrowIcon } from "@/components/Icons";

const widgets = [
  {
    key: "linkedin",
    label: "LinkedIn",
    handle: "in/alexandreepastore",
    href: profile.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    key: "email",
    label: "Email",
    handle: profile.email,
    href: `mailto:${profile.email}`,
    Icon: MailIcon,
    external: false,
  },
  {
    key: "github",
    label: "GitHub",
    handle: "@alexandrepastoree",
    href: profile.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export default function SocialWidgets() {
  return (
    <div className="top-widgets" aria-label="Links de contato">
      {widgets.map(({ key, label, handle, href, Icon, external }) => (
        <a
          key={key}
          href={href}
          className={`widget widget--${key}`}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
        >
          <span className="widget-icon">
            <Icon width={22} height={22} />
          </span>
          <span className="widget-text">
            <span className="widget-label">{label}</span>
            <span className="widget-handle">{handle}</span>
          </span>
          <span className="widget-arrow">
            <ArrowIcon width={18} height={18} />
          </span>
        </a>
      ))}
    </div>
  );
}
