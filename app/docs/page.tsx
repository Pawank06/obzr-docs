import Link from 'next/link'
import { PlayCircle, Box, FileCode, Shield, Brain, Network, Eye, Zap, SquareTerminal, Terminal } from 'lucide-react'

export default function DocsPage() {
    return (
        <div className="flex flex-1 flex-col p-8 pt-12">
            <div className="mx-auto w-full max-w-5xl">
                <div className="space-y-12 mt-10">
                    {/* Hero Section */}
                    <div className="space-y-3">
                        <h1 className="text-3xl font-semibold tracking-tight">Welcome to AgentOS Docs</h1>
                        <p className="text-muted-foreground max-w-xl tracking-tight">
                            Find all the guides and resources you need to build autonomous, memory-aware AI agents with AgentOS.
                        </p>
                    </div>

                    {/* Feature Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Link href="/docs/quickstart" className="block group">
                            <div className="border rounded-xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all h-full">
                                <div className="w-12 h-12">
                                    <PlayCircle className="w-6 h-6" />
                                </div>
                                <h3 className="font-medium text-sm mb-1 mt-4">Quickstarts & Tutorials</h3>
                                <p className="text-[13px] text-muted-foreground leading-relaxed">
                                    Explore our end-to-end tutorials and getting started guides for building AI agents with memory and orchestration.
                                </p>
                            </div>
                        </Link>

                        <Link href="/docs/sdk/creating-agents" className="block group">
                            <div className="border rounded-xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all h-full">
                                <div className="w-12 h-12">
                                    <Box className="w-6 h-6" />
                                </div>
                                <h3 className="font-medium text-sm mb-1 mt-4">SDK Core</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    AgentOS SDK gives you memory-aware agents with STM, LTM, and episodic memory built-in.
                                </p>
                            </div>
                        </Link>

                        <Link href="/docs/api/agent" className="block group">
                            <div className="border rounded-xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all h-full">
                                <div className="w-12 h-12">
                                    <Terminal className="w-6 h-6" />
                                </div>
                                <h3 className="font-medium text-sm mb-1 mt-4">API Reference</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Dig into our API reference documentation and SDKs. Everything you need to integrate AgentOS.
                                </p>
                            </div>
                        </Link>

                        <Link href="/docs/platform/memory-engine" className="block group">
                            <div className="border rounded-xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all h-full">
                                <div className="w-12 h-12">
                                    <Brain className="w-6 h-6" />
                                </div>
                                <h3 className="font-medium text-sm mb-1 mt-4">Memory Engine</h3>
                                <p className="text-xs text-muted-foreground leading-relaxed">
                                    Context intelligence is the core of AgentOS. Learn how agents remember and retrieve knowledge.
                                </p>
                            </div>
                        </Link>
                    </div>

                    {/* Explore by SDK */}
                    <div className="space-y-6 pt-6">
                        <h2 className="text-2xl font-semibold tracking-tight">Explore by SDK</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            <Link href="/docs/sdk/creating-agents?sdk=nodejs" className="block group">
                                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                                        N
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold mb-1">Node.js</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Build memory-aware agents with our native Node.js SDK.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/sdk/creating-agents?sdk=typescript" className="block group">
                                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                                        TS
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold mb-1">TypeScript</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Get started with type-safe agent development in TypeScript.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/sdk/creating-agents?sdk=python" className="block group">
                                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-foreground text-background flex items-center justify-center shrink-0 font-bold">
                                        Py
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold mb-1">Python</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Use AgentOS with Python for AI/ML workflows and data science.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/orchestration/multi-agent" className="block group">
                                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                        <Network className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold mb-1">Orchestration</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Coordinate multiple agents to collaborate on complex tasks.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/observability/dashboard" className="block group">
                                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                        <Eye className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold mb-1">Observability</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Monitor, debug, and optimize your agent workflows in real-time.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/api/agent" className="block group">
                                <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors">
                                    <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center shrink-0">
                                        <Zap className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold mb-1">REST API</h3>
                                        <p className="text-sm text-muted-foreground">
                                            Integrate AgentOS into any application via our REST API.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Explore by Feature */}
                    <div className="space-y-6 pt-8">
                        <h2 className="text-3xl font-bold tracking-tight">Explore by feature</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                            <Link href="/docs/sdk/memory-system" className="block group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/5 transition-colors">
                                        <Brain className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2">Memory System</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            AgentOS provides STM, LTM, and episodic memory so your agents can remember past interactions and build knowledge over time.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/orchestration/multi-agent" className="block group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/5 transition-colors">
                                        <Network className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2">Agent Orchestration</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Coordinate multiple specialized agents to collaborate on complex tasks with workflow graphs and runtime management.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/sdk/persistence" className="block group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/5 transition-colors">
                                        <Box className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2">Vector Storage</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Store and retrieve agent memory in vector databases like Pinecone, Weaviate, or PostgreSQL with pgvector integration.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/platform/cognitive-routing" className="block group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/5 transition-colors">
                                        <Zap className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2">Cognitive Routing</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Dynamically select the right agent or tool based on intent and context for intelligent task distribution.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/observability/dashboard" className="block group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/5 transition-colors">
                                        <Eye className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2">Observability Dashboard</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            Monitor workflows, track token usage and costs, visualize agent DAGs, and debug failures in real-time.
                                        </p>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/api/agent" className="block group">
                                <div className="flex items-start gap-4">
                                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center shrink-0 group-hover:bg-foreground/5 transition-colors">
                                        <FileCode className="w-6 h-6" />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-semibold text-lg mb-2">SDK & APIs</h3>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            AgentOS SDKs allow you to integrate agent intelligence into any application without managing infrastructure yourself.
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>

                    {/* Learn the Concepts */}
                    <div className="space-y-6 pt-8">
                        <h2 className="text-3xl font-bold tracking-tight">Learn the concepts</h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Link href="/docs/core-concepts#memory-types" className="block group">
                                <div className="border rounded-xl p-8 hover:border-foreground/20 hover:shadow-sm transition-all h-full bg-gradient-to-br from-background to-muted/20">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center">
                                            <Brain className="w-10 h-10 text-blue-600 dark:text-blue-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Memory Types</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Understand STM, LTM, episodic, and semantic memory — how agents store and recall information.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/core-concepts#agent-collaboration" className="block group">
                                <div className="border rounded-xl p-8 hover:border-foreground/20 hover:shadow-sm transition-all h-full bg-gradient-to-br from-background to-muted/20">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex items-center justify-center">
                                            <Network className="w-10 h-10 text-green-600 dark:text-green-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Agent Collaboration</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Learn how multiple agents work together, communicate, and coordinate to solve complex problems.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>

                            <Link href="/docs/core-concepts#context-intelligence" className="block group">
                                <div className="border rounded-xl p-8 hover:border-foreground/20 hover:shadow-sm transition-all h-full bg-gradient-to-br from-background to-muted/20">
                                    <div className="flex flex-col items-center text-center space-y-4">
                                        <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-500/10 to-amber-500/10 flex items-center justify-center">
                                            <Zap className="w-10 h-10 text-orange-600 dark:text-orange-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2">Context Intelligence</h3>
                                            <p className="text-sm text-muted-foreground leading-relaxed">
                                                Discover how AgentOS retrieves relevant context and routes tasks to the right agents dynamically.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}