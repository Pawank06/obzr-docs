import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function DocsPage() {
    return (
        <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
            <div className="mx-auto w-full max-w-4xl">
                <div className="space-y-8">
                    <div className="space-y-2">
                        <h1 className="text-4xl font-bold tracking-tight">Welcome to Clerk</h1>
                        <p className="text-lg text-muted-foreground">
                            Add authentication, users, and accounts to your application in minutes.
                        </p>
                    </div>

                    <div className="space-y-6">
                        <h2 className="text-2xl font-semibold">Quick Start</h2>
                        <div className="space-y-4">
                            <Link href="/docs/hello-world" className="block">
                                <div className="border rounded-lg p-6 hover:border-primary/50 transition-colors">
                                    <div className="flex items-start gap-4">
                                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                                                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-medium">Hello World</h3>
                                            <p className="text-sm text-muted-foreground mt-1">
                                                Get started with your first Clerk integration
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