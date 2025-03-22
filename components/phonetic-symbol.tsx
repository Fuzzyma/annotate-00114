"use client"

import { useState } from "react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { getPhoneticInfo } from "@/data/phonetic-dictionary"

interface PhoneticSymbolProps {
  symbol: string
  languageCode: string
}

export function PhoneticSymbol({ symbol, languageCode }: PhoneticSymbolProps) {
  const [isOpen, setIsOpen] = useState(false)
  const { explanation, examples } = getPhoneticInfo(symbol, languageCode)

  return (
    <TooltipProvider>
      <Tooltip open={isOpen} onOpenChange={setIsOpen}>
        <TooltipTrigger asChild>
          <span className="cursor-help text-primary hover:underline" onClick={() => setIsOpen(true)}>
            {symbol}
          </span>
        </TooltipTrigger>
        <TooltipContent className="max-w-xs p-4">
          <div className="space-y-2">
            <p className="font-bold">{symbol}</p>
            <p>{explanation}</p>
            {examples.length > 0 && (
              <div>
                <p className="font-medium">Examples:</p>
                <ul className="list-disc list-inside">
                  {examples.map((example, index) => (
                    <li key={index}>{example}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

