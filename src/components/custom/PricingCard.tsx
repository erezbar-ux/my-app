import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { cn } from '@/lib/utils'

interface PricingCardProps {
  title: string
  price: string
  currency?: string
  period?: string
  features: string[]
  variant?: 'stroke' | 'brand'
  buttonLabel?: string
}

export function PricingCard({
  title,
  price,
  currency = '$',
  period = '/ mo',
  features,
  variant = 'stroke',
  buttonLabel = 'Button',
}: PricingCardProps) {
  const isBrand = variant === 'brand'

  return (
    <Card
      className={cn(
        'flex-1 items-center gap-6 rounded-lg p-8',
        isBrand
          ? 'border-[#2C2C2C] bg-[#2C2C2C]'
          : 'border-[#D9D9D9] bg-white'
      )}
    >
      <CardHeader className="items-center gap-4 p-0">
        <CardTitle
          className={cn(
            'text-center text-2xl font-semibold leading-[1.2] tracking-[-0.02em]',
            isBrand ? 'text-[#F5F5F5]' : 'text-[#1E1E1E]'
          )}
        >
          {title}
        </CardTitle>

        <div className="flex items-end justify-center">
          <div className="flex items-baseline">
            <span
              className={cn(
                'text-2xl font-bold leading-none tracking-[-0.02em]',
                isBrand ? 'text-[#F5F5F5]' : 'text-[#1E1E1E]'
              )}
            >
              {currency}
            </span>
            <span
              className={cn(
                'text-5xl font-bold leading-none tracking-[-0.02em]',
                isBrand ? 'text-[#F5F5F5]' : 'text-[#1E1E1E]'
              )}
            >
              {price}
            </span>
          </div>
          <span
            className={cn(
              'text-sm leading-[1.8]',
              isBrand ? 'text-[#F5F5F5]' : 'text-[#1E1E1E]'
            )}
          >
            {period}
          </span>
        </div>
      </CardHeader>

      <CardContent className="w-full p-0">
        <ul className="flex w-full flex-col gap-3">
          {features.map((feature, i) => (
            <li
              key={i}
              className={cn(
                'text-base leading-[1.4]',
                isBrand ? 'text-[#F5F5F5]' : 'text-[#757575]'
              )}
            >
              {feature}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="p-0">
        <Button
          className={cn(
            'w-full rounded-lg py-3 text-base leading-none transition-colors',
            isBrand
              ? 'border border-[#767676] bg-[#E3E3E3] text-[#1E1E1E] hover:bg-[#D9D9D9]'
              : 'border border-[#2C2C2C] bg-[#2C2C2C] text-[#F5F5F5] hover:bg-[#1E1E1E]'
          )}
        >
          {buttonLabel}
        </Button>
      </CardFooter>
    </Card>
  )
}
