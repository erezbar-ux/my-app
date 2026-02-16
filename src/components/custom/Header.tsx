import { Button } from '@/components/ui/button'
import { NavigationPill } from '@/components/custom/NavigationPill'
import logoSvg from '@/assets/logo.svg'

const navItems = ['Products', 'Solutions', 'Community', 'Resources', 'Pricing', 'Contact']

export function Header() {
  return (
    <header className="flex flex-wrap items-center gap-6 border-b border-[#D9D9D9] bg-white px-8 py-8">
      <a href="/" aria-label="Home">
        <img src={logoSvg} alt="Logo" className="h-10 w-10" />
      </a>

      <nav className="flex flex-1 flex-wrap justify-end gap-2" role="tablist" aria-label="Main navigation">
        {navItems.map((item) => (
          <NavigationPill
            key={item}
            label={item}
            active={item === 'Products'}
          />
        ))}
      </nav>

      <div className="flex gap-3">
        <Button
          variant="outline"
          size="sm"
          className="rounded-lg border-[#767676] bg-[#E3E3E3] px-2 py-2 text-base leading-none text-[#1E1E1E] hover:bg-[#D9D9D9]"
        >
          Sign in
        </Button>
        <Button
          size="sm"
          className="rounded-lg border-[#2C2C2C] bg-[#2C2C2C] px-2 py-2 text-base leading-none text-[#F5F5F5] hover:bg-[#1E1E1E]"
        >
          Register
        </Button>
      </div>
    </header>
  )
}
