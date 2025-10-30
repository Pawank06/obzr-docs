"use client"

import * as React from "react"
import { ChevronDown, Check } from "lucide-react"
import { siNodedotjs, siTypescript, siJavascript, siPython, siOpenapiinitiative } from "simple-icons"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

const sdks = [
  { name: "Node.js", icon: siNodedotjs },
  { name: "TypeScript", icon: siTypescript },
  { name: "JavaScript", icon: siJavascript },
  { name: "Python", icon: siPython },
  { name: "REST API", icon: siOpenapiinitiative },
]

const data = {
  navMain: [
    {
      title: "Getting Started",
      url: "/docs",
      items: [
        {
          title: "Introduction",
          url: "/docs/introduction",
        },
        {
          title: "Quickstart Guide",
          url: "/docs/quickstart",
        },
        {
          title: "Architecture",
          url: "/docs/architecture",
        },
        {
          title: "Sample Workflow",
          url: "/docs/sample-workflow",
        },
      ],
    },
    {
      title: "Core Concepts",
      items: [
        {
          title: "Temporal Memory",
          url: "/docs/concepts/temporal-memory",
        },
        {
          title: "Agent Runtime & Isolation",
          url: "/docs/concepts/agent-runtime",
        },
        {
          title: "Multi-Agent Orchestration",
          url: "/docs/concepts/orchestration",
        },
        {
          title: "Observability & Monitoring",
          url: "/docs/concepts/observability",
        },
        {
          title: "Developer SDK & CLI",
          url: "/docs/concepts/sdk-cli",
        },
      ],
    },
    {
      title: "Tutorials",
      items: [
        {
          title: "Build a Basic Agent",
          url: "/docs/tutorials/basic-agent",
        },
        {
          title: "Create a Workflow",
          url: "/docs/tutorials/workflow",
        },
        {
          title: "Temporal Memory Queries",
          url: "/docs/tutorials/memory-queries",
        },
        {
          title: "Add Audit Logging",
          url: "/docs/tutorials/audit-logging",
        },
        {
          title: "Deploy to Cloud",
          url: "/docs/tutorials/cloud-deployment",
        },
      ],
    },
    {
      title: "Use Cases",
      items: [
        {
          title: "RAG Pipeline",
          url: "/docs/use-cases/rag-pipeline",
        },
        {
          title: "Document Summarizer",
          url: "/docs/use-cases/document-summarizer",
        },
        {
          title: "Customer Support Bot",
          url: "/docs/use-cases/customer-support",
        },
        {
          title: "Compliance & Audit",
          url: "/docs/use-cases/compliance-audit",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "REST API",
          url: "/docs/api/rest",
        },
        {
          title: "TypeScript SDK",
          url: "/docs/api/typescript-sdk",
        },
        {
          title: "CLI Reference",
          url: "/docs/api/cli",
        },
        {
          title: "Agent API",
          url: "/docs/api/agent",
        },
        {
          title: "Memory API",
          url: "/docs/api/memory",
        },
      ],
    },
    {
      title: "Advanced Guides",
      items: [
        {
          title: "Memory & Knowledge Graph",
          url: "/docs/advanced/knowledge-graph",
        },
        {
          title: "Security & Compliance",
          url: "/docs/advanced/security",
        },
        {
          title: "Production Deployment",
          url: "/docs/advanced/production",
        },
        {
          title: "Performance Tuning",
          url: "/docs/advanced/performance",
        },
      ],
    },
    {
      title: "Marketplace",
      items: [
        {
          title: "Skill Marketplace",
          url: "/docs/marketplace/skills",
        },
        {
          title: "Community Agents",
          url: "/docs/marketplace/community-agents",
        },
        {
          title: "Submit an Agent",
          url: "/docs/marketplace/submit",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "FAQ",
          url: "/docs/resources/faq",
        },
        {
          title: "Troubleshooting",
          url: "/docs/resources/troubleshooting",
        },
        {
          title: "Release Notes",
          url: "/docs/resources/release-notes",
        },
        {
          title: "Contributing",
          url: "/docs/resources/contributing",
        },
      ],
    },
  ],
}

export function DocsSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const [selectedSdk, setSelectedSdk] = React.useState(sdks[0])

  return (
    <Sidebar variant="floating" className="border-r backdrop-blur h-screen flex flex-col" {...props}>
      {/* Fixed Header */}
      <div className="sticky top-0 z-10 backdrop-blur-sm">
        <SidebarHeader className="h-10 flex items-center px-6 ">
          <a href="/docs" className="flex items-center gap-2">
            <span className="text-lg font-semibold">AgentOS</span>
            <span className="px-2 py-0.5 text-[10px] border bg-white rounded-md font-medium">
              Docs
            </span>
          </a>
        </SidebarHeader>
      </div>
      {/* Scrollable Content */}
      <SidebarContent className="flex-1 overflow-y-auto px-3 py-4">
        <div className="space-y-2">
          <div className="p-1 rounded-xl bg-stone-100">
            <h3 className="text-xs font-semibold tracking-tight my-2 ml-2">
              Select your SDK
            </h3>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="w-full flex items-center gap-3 px-3 py-2 bg-background border rounded-md hover:bg-accent transition-colors text-sm">
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background p-1">
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-3 w-3 fill-current"
                      dangerouslySetInnerHTML={{ __html: selectedSdk.icon.path }}
                    />
                  </div>
                  <span className="flex-1 text-left font-medium">
                    {selectedSdk.name}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(16rem-1.5rem)] mx-1.5 max-h-[200px] overflow-y-auto" align="start" sideOffset={8}>
                {sdks.map((sdk) => {
                  return (
                    <DropdownMenuItem
                      key={sdk.name}
                      onClick={() => setSelectedSdk(sdk)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md hover:bg-accent ${selectedSdk.name === sdk.name ? 'bg-accent' : ''
                        }`}
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground text-background p-1">
                        <svg
                          role="img"
                          viewBox="0 0 24 24"
                          className="h-3 w-3 fill-current"
                          dangerouslySetInnerHTML={{ __html: sdk.icon.path }}
                        />
                      </div>
                      <span className="flex-1 text-xs">{sdk.name}</span>
                      {selectedSdk.name === sdk.name && (
                        <Check className="h-3.5 w-3.5 text-foreground" />
                      )}
                    </DropdownMenuItem>
                  );
                })}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
        <SidebarGroup>
          <SidebarMenu className="gap-1">
            {data.navMain.map((item) => (
              <SidebarMenuItem key={item.title} className="mt-4 first:mt-0">
                <h3 className="text-sm font-semibold text-muted-foreground tracking-wider px-3 py-2">
                  {item.title}
                </h3>
                <SidebarMenuSub className="mt-1">
                  {item.items.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        className="text-[13px] px-3 py-2 hover:bg-accent rounded-md transition-colors whitespace-normal min-h-[2rem]"
                      >
                        <a href={subItem.url} className="block w-full leading-relaxed">
                          {subItem.title}
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
