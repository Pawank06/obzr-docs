"use client"

import * as React from "react"
import { ChevronDown, Check, Code, Terminal, FileCode, FileJson, FileText, FileCode2 } from "lucide-react"

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
  { name: "Next.js", icon: Code },
  { name: "React", icon: Code },
  { name: "Vue.js", icon: Code },
  { name: "Angular", icon: Code },
  { name: "Svelte", icon: Code },
  { name: "Node.js", icon: Terminal },
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
          title: "Hello World",
          url: "/docs/hello-world",
        },
        {
          title: "Setup",
          url: "/docs/setup",
        },
      ],
    },
    {
      title: "Authentication",
      items: [
        {
          title: "Sign in",
          url: "/docs/authentication/sign-in",
        },
        {
          title: "Sign up",
          url: "/docs/authentication/sign-up",
        },
        {
          title: "Sign out",
          url: "/docs/authentication/sign-out",
        },
        {
          title: "Multi-factor authentication",
          url: "/docs/authentication/mfa",
        },
        {
          title: "Social providers",
          url: "/docs/authentication/social-providers",
        },
        {
          title: "SAML & SSO",
          url: "/docs/authentication/saml-sso",
        },
      ],
    },
    {
      title: "Users & Organizations",
      items: [
        {
          title: "User management",
          url: "/docs/users/user-management",
        },
        {
          title: "Organizations",
          url: "/docs/users/organizations",
        },
        {
          title: "User profiles",
          url: "/docs/users/user-profiles",
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "<SignIn />",
          url: "/docs/components/sign-in",
        },
        {
          title: "<SignUp />",
          url: "/docs/components/sign-up",
        },
        {
          title: "<UserButton />",
          url: "/docs/components/user-button",
        },
        {
          title: "<OrganizationSwitcher />",
          url: "/docs/components/organization-switcher",
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
            <span className="text-lg font-semibold">Obzr</span>
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
                  <div className="flex h-6 w-6 items-center justify-center rounded-full bg-foreground text-background">
                    {React.createElement(selectedSdk.icon, { className: "h-3 w-3" })}
                  </div>
                  <span className="flex-1 text-left font-medium">
                    {selectedSdk.name}
                  </span>
                  <ChevronDown className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-[calc(16rem-1.5rem)] mx-1.5 max-h-[200px] overflow-y-auto" align="start" sideOffset={8}>
                {sdks.map((sdk) => {
                  const Icon = sdk.icon;
                  return (
                    <DropdownMenuItem
                      key={sdk.name}
                      onClick={() => setSelectedSdk(sdk)}
                      className={`flex items-center gap-2 px-3 py-1.5 text-sm rounded-md hover:bg-accent ${
                        selectedSdk.name === sdk.name ? 'bg-accent' : ''
                      }`}
                    >
                      <div className="flex h-4 w-4 items-center justify-center rounded-full bg-foreground text-background">

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
                <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider px-3 py-2">
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
