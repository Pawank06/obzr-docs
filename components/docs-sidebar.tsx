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
          title: "Quickstart",
          url: "/docs/quickstart",
        },
        {
          title: "Installation",
          url: "/docs/installation",
        },
        {
          title: "Core Concepts",
          url: "/docs/core-concepts",
        },
      ],
    },
    {
      title: "SDK Core",
      items: [
        {
          title: "Creating Agents",
          url: "/docs/sdk/creating-agents",
        },
        {
          title: "Memory System",
          url: "/docs/sdk/memory-system",
        },
        {
          title: "STM & LTM",
          url: "/docs/sdk/stm-ltm",
        },
        {
          title: "Task Capabilities",
          url: "/docs/sdk/task-capabilities",
        },
        {
          title: "Persistence Layer",
          url: "/docs/sdk/persistence",
        },
        {
          title: "API Integration",
          url: "/docs/sdk/api-integration",
        },
      ],
    },
    {
      title: "Orchestration",
      items: [
        {
          title: "Multi-Agent Systems",
          url: "/docs/orchestration/multi-agent",
        },
        {
          title: "Workflow Graphs",
          url: "/docs/orchestration/workflow-graphs",
        },
        {
          title: "Runtime Manager",
          url: "/docs/orchestration/runtime-manager",
        },
        {
          title: "Agent Collaboration",
          url: "/docs/orchestration/collaboration",
        },
      ],
    },
    {
      title: "Observability",
      items: [
        {
          title: "Dashboard Overview",
          url: "/docs/observability/dashboard",
        },
        {
          title: "Telemetry SDK",
          url: "/docs/observability/telemetry",
        },
        {
          title: "Monitoring Workflows",
          url: "/docs/observability/monitoring",
        },
        {
          title: "Cost & Token Tracking",
          url: "/docs/observability/cost-tracking",
        },
      ],
    },
    {
      title: "Platform Intelligence",
      items: [
        {
          title: "Context Intelligence",
          url: "/docs/platform/context-intelligence",
        },
        {
          title: "Cognitive Routing",
          url: "/docs/platform/cognitive-routing",
        },
        {
          title: "Knowledge Graph",
          url: "/docs/platform/knowledge-graph",
        },
        {
          title: "Memory Engine",
          url: "/docs/platform/memory-engine",
        },
      ],
    },
    {
      title: "API Reference",
      items: [
        {
          title: "Agent API",
          url: "/docs/api/agent",
        },
        {
          title: "Memory API",
          url: "/docs/api/memory",
        },
        {
          title: "Orchestrator API",
          url: "/docs/api/orchestrator",
        },
        {
          title: "Telemetry API",
          url: "/docs/api/telemetry",
        },
      ],
    },
    {
      title: "Examples & Use Cases",
      items: [
        {
          title: "AI Customer Support",
          url: "/docs/examples/customer-support",
        },
        {
          title: "Developer Assistant",
          url: "/docs/examples/developer-assistant",
        },
        {
          title: "Knowledge Systems",
          url: "/docs/examples/knowledge-systems",
        },
        {
          title: "SaaS Integration",
          url: "/docs/examples/saas-integration",
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
                <h3 className="text-xs font-semibold text-muted-foreground tracking-wider px-3 py-2">
                  {item.title}
                </h3>
                <SidebarMenuSub className="mt-1">
                  {item.items.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton
                        asChild
                        className="text-sm px-3 py-1.5 hover:bg-accent rounded-md transition-colors"
                      >
                        <a href={subItem.url} className="block w-full">
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
