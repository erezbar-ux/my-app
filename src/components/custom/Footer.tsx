import figmaLogoSvg from '@/assets/figma-logo.svg'
import iconX from '@/assets/icon-x.svg'
import iconInstagram from '@/assets/icon-instagram.svg'
import iconYoutube from '@/assets/icon-youtube.svg'
import iconLinkedin from '@/assets/icon-linkedin.svg'

interface LinkListProps {
  title: string
  links: string[]
}

function LinkList({ title, links }: LinkListProps) {
  return (
    <div className="flex min-w-0 flex-1 flex-col gap-3">
      <div className="border-b border-transparent pb-4">
        <h4 className="text-base font-semibold leading-[1.4] text-[#1E1E1E]">{title}</h4>
      </div>
      {links.map((link) => (
        <a
          key={link}
          href="#"
          className="text-base leading-[1.4] text-[#1E1E1E] transition-colors hover:text-[#757575]"
        >
          {link}
        </a>
      ))}
    </div>
  )
}

const footerColumns: LinkListProps[] = [
  {
    title: 'Use cases',
    links: [
      'UI design',
      'UX design',
      'Wireframing',
      'Diagramming',
      'Brainstorming',
      'Online whiteboard',
      'Team collaboration',
    ],
  },
  {
    title: 'Explore',
    links: [
      'Design',
      'Prototyping',
      'Development features',
      'Design systems',
      'Collaboration features',
      'Design process',
      'FigJam',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Blog',
      'Best practices',
      'Colors',
      'Color wheel',
      'Support',
      'Developers',
      'Resource library',
    ],
  },
]

export function Footer() {
  return (
    <footer className="grid grid-cols-1 gap-8 border-t border-[#D9D9D9] bg-white px-6 py-10 sm:grid-cols-4 md:px-16 md:py-16">
      <div className="flex flex-col gap-6">
        <a href="/" aria-label="Figma home" title="Figma home" className="inline-flex rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2">
          <img src={figmaLogoSvg} alt="Figma logo" className="h-[35px] w-[23px]" role="img" />
        </a>
        <nav aria-label="Social media links">
          <ul className="flex items-center gap-4" role="list">
            <li>
              <a href="#" aria-label="Follow us on X (Twitter)" title="X (Twitter)" rel="noopener noreferrer" target="_blank" className="inline-flex rounded transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2">
                <img src={iconX} alt="" className="h-6 w-6" role="presentation" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Follow us on Instagram" title="Instagram" rel="noopener noreferrer" target="_blank" className="inline-flex rounded transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2">
                <img src={iconInstagram} alt="" className="h-6 w-6" role="presentation" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Follow us on YouTube" title="YouTube" rel="noopener noreferrer" target="_blank" className="inline-flex rounded transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2">
                <img src={iconYoutube} alt="" className="h-6 w-6" role="presentation" />
              </a>
            </li>
            <li>
              <a href="#" aria-label="Follow us on LinkedIn" title="LinkedIn" rel="noopener noreferrer" target="_blank" className="inline-flex rounded transition-opacity hover:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1E1E1E] focus-visible:ring-offset-2">
                <img src={iconLinkedin} alt="" className="h-6 w-6" role="presentation" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
      {footerColumns.map((column) => (
        <LinkList key={column.title} title={column.title} links={column.links} />
      ))}
    </footer>
  )
}
