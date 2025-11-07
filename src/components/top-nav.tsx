"use client"

import {PanelLeftIcon} from "lucide-react"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "./mode-toogle"


interface TopNavProps {
  onToggleSidebar?: () => void
}

export default function TopNav({ onToggleSidebar }: TopNavProps) {

  return (
    <div className="border-b border-border bg-background">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Left side - Menu icon */}
        <div className="flex items-center gap-4">

          <button onClick={onToggleSidebar} className="p-2 hover:bg-muted rounded-lg transition-colors">
            <PanelLeftIcon className="w-5 h-5" />
          </button>
        </div>

        {/* Right side - Icons */}
        <div className="flex items-center gap-2">
          <ModeToggle/>
          <Button variant="ghost" size="sm" className="w-9 h-9 rounded-full bg-foreground text-background font-semibold">
          SN
        </Button>
        </div>
      </div>
    </div>
  )
}
