"use client"

import Link from 'next/link'
import { ThumbsUp, ThumbsDown, MessageSquare } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useState } from 'react'

export function DocsFeedback() {
  const [feedback, setFeedback] = useState<string | null>(null)

  return (
    <div className="border-t pt-8 mt-12">
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">What did you think of this content?</h3>
        <div className="flex gap-3">
          <Button
            variant={feedback === 'helpful' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFeedback('helpful')}
            className="gap-2"
          >
            <ThumbsUp className="w-4 h-4" />
            It was helpful
          </Button>
          <Button
            variant={feedback === 'not-helpful' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFeedback('not-helpful')}
            className="gap-2"
          >
            <ThumbsDown className="w-4 h-4" />
            It was not helpful
          </Button>
          <Button
            variant={feedback === 'feedback' ? 'default' : 'outline'}
            size="sm"
            onClick={() => setFeedback('feedback')}
            className="gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            I have feedback
          </Button>
        </div>
        {feedback && (
          <p className="text-sm text-muted-foreground">
            Thank you for your feedback!
          </p>
        )}
      </div>
      <div className="mt-8 text-sm text-muted-foreground">
        Last updated on {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
      </div>
    </div>
  )
}

export function DocsFooter() {
  return (
    <footer className="border-t mt-16">
      <div className="mx-auto max-w-6xl px-8 py-12">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-xl font-bold">AgentOS</span>
            </Link>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Product</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/docs/sdk/creating-agents" className="text-muted-foreground hover:text-foreground transition-colors">
                  SDK
                </Link>
              </li>
              <li>
                <Link href="/docs/observability/dashboard" className="text-muted-foreground hover:text-foreground transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/docs/platform/memory-engine" className="text-muted-foreground hover:text-foreground transition-colors">
                  Memory Engine
                </Link>
              </li>
              <li>
                <Link href="/docs/orchestration/multi-agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  Orchestration
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                  Pricing
                </Link>
              </li>
            </ul>
          </div>

          {/* Developers */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Developers</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/docs" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/docs/api/agent" className="text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="/docs/examples/customer-support" className="text-muted-foreground hover:text-foreground transition-colors">
                  Examples
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-muted-foreground hover:text-foreground transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Company</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-foreground transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-sm">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <Link href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/dpa" className="text-muted-foreground hover:text-foreground transition-colors">
                  Data Processing Agreement
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t flex items-center justify-between text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} AgentOS, Inc.</p>
          <div className="flex gap-4">
            <Link href="https://twitter.com" className="hover:text-foreground transition-colors">
              Twitter
            </Link>
            <Link href="https://github.com" className="hover:text-foreground transition-colors">
              GitHub
            </Link>
            <Link href="https://discord.com" className="hover:text-foreground transition-colors">
              Discord
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
