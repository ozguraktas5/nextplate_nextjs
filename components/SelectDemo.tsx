import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function SelectDemo() {
  return (
    <Select>
      <SelectTrigger className="w-[90px]">
        <SelectValue placeholder="Eng" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value="eng">Eng</SelectItem>
          <SelectItem value="fre">Fre</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
