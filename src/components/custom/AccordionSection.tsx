import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

export function AccordionSection() {
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

      <Accordion type="single" collapsible defaultValue="item-0" className="flex w-full max-w-[640px] flex-col gap-4">
        {faqItems.map((item, i) => (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className="rounded-lg border border-[#D9D9D9] bg-[#F5F5F5] data-[state=open]:bg-white"
          >
            <AccordionTrigger className="p-4 text-base font-semibold leading-[1.4] text-[#1E1E1E] hover:no-underline">
              {item.title}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-base leading-[1.4] text-[#1E1E1E]">
              {item.content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
