import { useState } from 'react'
import { ChevronUp, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface AccordionItemData {
  title: string
  content: string
}

const faqItems: AccordionItemData[] = [
  {
    title: 'Title',
    content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    title: 'Title',
    content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    title: 'Title',
    content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    title: 'Title',
    content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
  {
    title: 'Title',
    content: 'Answer the frequently asked question in a simple sentence, a longish paragraph, or even in a list.',
  },
]

function AccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: AccordionItemData
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div
      className={cn(
        'rounded-lg border border-[#D9D9D9] transition-colors',
        isOpen ? 'bg-white' : 'bg-[#F5F5F5]'
      )}
    >
      <button
        onClick={onToggle}
        className={cn(
          'flex w-full items-center gap-2 p-4 text-left',
          isOpen ? '' : ''
        )}
        aria-expanded={isOpen}
      >
        <span className="flex-1 text-base font-semibold leading-[1.4] text-[#1E1E1E]">
          {item.title}
        </span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 shrink-0 text-[#1E1E1E]" />
        ) : (
          <ChevronDown className="h-5 w-5 shrink-0 text-[#1E1E1E]" />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4">
          <p className="text-base leading-[1.4] text-[#1E1E1E]">{item.content}</p>
        </div>
      )}
    </div>
  )
}

export function AccordionSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="flex flex-col items-center gap-12 bg-white px-16 py-16">
      <div className="flex flex-col items-center gap-2">
        <h2 className="text-center text-2xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E1E1E]">
          Heading
        </h2>
        <p className="text-center text-xl leading-[1.2] text-[#757575]">
          Subheading
        </p>
      </div>

      <div className="flex w-full max-w-[640px] flex-col gap-4">
        {faqItems.map((item, i) => (
          <AccordionItem
            key={i}
            item={item}
            isOpen={i === openIndex}
            onToggle={() => setOpenIndex(i === openIndex ? -1 : i)}
          />
        ))}
      </div>
    </section>
  )
}
