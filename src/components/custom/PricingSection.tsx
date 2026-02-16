import { useState } from 'react'
import { PricingCard } from '@/components/custom/PricingCard'
import { NavigationPill } from '@/components/custom/NavigationPill'

const features = ['List item', 'List item', 'List item', 'List item', 'List item']

export function PricingSection() {
  const [billing, setBilling] = useState<'monthly' | 'yearly'>('monthly')

  return (
    <section className="flex flex-col items-center gap-12 bg-white px-16 py-16">
      <nav className="flex flex-wrap gap-2" role="tablist" aria-label="Billing period">
        <NavigationPill
          label="Monthly"
          active={billing === 'monthly'}
          onClick={() => setBilling('monthly')}
        />
        <NavigationPill
          label="Yearly"
          active={billing === 'yearly'}
          onClick={() => setBilling('yearly')}
        />
      </nav>

      <div className="flex w-full flex-wrap justify-stretch gap-16">
        <PricingCard
          title="Title"
          price="50"
          features={features}
          variant="stroke"
        />
        <PricingCard
          title="Title"
          price="50"
          features={features}
          variant="brand"
        />
        <PricingCard
          title="Title"
          price="50"
          features={features}
          variant="stroke"
        />
      </div>
    </section>
  )
}
