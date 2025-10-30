import { DocsSidebar } from "@/components/docs-sidebar"
import { DocsFooter } from "@/components/docs-footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Search } from "lucide-react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "20rem",
        } as React.CSSProperties
      }
    >
      <DocsSidebar />
      <SidebarInset className="flex flex-col">
        <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center justify-between gap-4 px-6 border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
          <div className="flex items-center gap-2">
            <SidebarTrigger className="md:hidden" />
            <div className="relative w-64 hidden sm:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search documentation"
                className="pl-9 pr-16 h-9 w-full"
              />
              <kbd className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                ⌘K
              </kbd>
            </div>
            <Button variant="secondary" size="sm" className="hidden sm:flex">
              Ask AI
            </Button>
          </div>
          <Button size="sm">
            Sign Up
          </Button>
        </header>
        <main className="flex flex-1 flex-col overflow-y-auto">
          {children}
          {/* <DocsFooter /> */}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
