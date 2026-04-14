"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DropdownMenuCheckboxes() {
  const [showStatusBar, setShowStatusBar] = React.useState(true)

  const [showPanel, setShowPanel] = React.useState(false)

  return (
    <DropdownMenu>
      <DropdownMenuTrigger render={<Button variant="outline">Sort by Category</Button>} />
      <DropdownMenuContent className="w-40">
        <DropdownMenuGroup>
      
          <DropdownMenuCheckboxItem
            checked={showStatusBar ?? false}
            onCheckedChange={setShowStatusBar}
          >
            Status Bar
          </DropdownMenuCheckboxItem>
          
          <DropdownMenuCheckboxItem
            checked={showPanel}
            onCheckedChange={setShowPanel}
          >
            Panel
          </DropdownMenuCheckboxItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
