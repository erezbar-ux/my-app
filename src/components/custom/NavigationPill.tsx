import { cn } from '@/lib/utils'

interface NavigationPillProps {
  label: string
  active?: boolean
  onClick?: () => void
}

export function NavigationPill({ label, active = false, onClick }: NavigationPillProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'rounded-lg px-2 py-2 text-base leading-none transition-colors',
        active
          ? 'bg-[#F5F5F5] text-[#1E1E1E]'
          : 'text-[#1E1E1E] hover:bg-[#F5F5F5]/50'
      )}
      role="tab"
      aria-selected={active}
    >
      {label}
    </button>
  )
}
