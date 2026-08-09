import { Search } from "lucide-react"

import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"

export function SearchInput() {
  return (
    <InputGroup className="max-w-xs min-w-sm ">
      <InputGroupInput placeholder="Search..." />
      <InputGroupAddon>
        <Search />
      </InputGroupAddon>
      {/* <InputGroupAddon align="inline-end">results</InputGroupAddon> */}
    </InputGroup>
  )
}
