"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "_/components/ui/button";
import { DropdownMenu } from "_/components/ui/dropdown-menu";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <Button variant="outline" size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Alterar tema</span>
        </Button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Content align="end">
        <DropdownMenu.Item onClick={() => setTheme("light")}>
          Claro
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("dark")}>
          Escuro
        </DropdownMenu.Item>
        <DropdownMenu.Item onClick={() => setTheme("system")}>
          Sistema
        </DropdownMenu.Item>
      </DropdownMenu.Content>
    </DropdownMenu.Root>
  );
}
