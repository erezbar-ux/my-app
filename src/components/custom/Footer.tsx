import footerLogoSvg from '@/assets/footer-logo.svg'

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
      <div className="flex items-start">
        <img src={footerLogoSvg} alt="Logo" className="h-auto w-[180px] md:h-[85px] md:w-[264px]" />
      </div>
      {footerColumns.map((column) => (
        <LinkList key={column.title} title={column.title} links={column.links} />
      ))}
    </footer>
  )
}
