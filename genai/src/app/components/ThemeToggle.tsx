"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900 dark:to-pink-900 hover:from-purple-200 hover:to-pink-200 dark:hover:from-purple-800 dark:hover:to-pink-800 border-purple-200 dark:border-purple-800"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-purple-600 dark:text-purple-400" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-purple-600 dark:text-purple-400" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white dark:bg-gray-900 border border-purple-100 dark:border-purple-800"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/50 focus:bg-purple-50 dark:focus:bg-purple-900/50"
        >
          <Sun className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/50 focus:bg-purple-50 dark:focus:bg-purple-900/50"
        >
          <Moon className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400" />
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="text-gray-700 dark:text-gray-300 hover:bg-purple-50 dark:hover:bg-purple-900/50 focus:bg-purple-50 dark:focus:bg-purple-900/50"
        >
          <svg
            className="h-4 w-4 mr-2 text-purple-600 dark:text-purple-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
            />
          </svg>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
