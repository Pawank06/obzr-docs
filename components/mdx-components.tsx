"use client"

import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Snippet, SnippetHeader, SnippetCopyButton, SnippetTabsContent } from '@/components/kibo-ui/snippet';
import { InfoIcon, AlertTriangleIcon, CheckCircle2Icon, LightbulbIcon } from 'lucide-react';

// Code block with copy functionality
export function CodeBlock({ children, language, filename }: { children: string | React.ReactNode; language?: string; filename?: string }) {
  // Handle both string and React node children
  const code = typeof children === 'string'
    ? children.trim()
    : React.isValidElement(children)
      ? String((children.props as any)?.children || '').trim()
      : String(children || '').trim();

  const [isDark, setIsDark] = React.useState(false);

  React.useEffect(() => {
    setIsDark(document.documentElement.classList.contains('dark'));

    const observer = new MutationObserver(() => {
      setIsDark(document.documentElement.classList.contains('dark'));
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="not-prose my-8 w-full">
      <Snippet defaultValue="code" className="w-full shadow-sm rounded-lg overflow-hidden">
        <SnippetHeader className="bg-muted/50 flex items-center justify-between px-4 py-2.5">
          {filename ? (
            <div className="text-xs font-mono text-muted-foreground font-medium">
              {filename}
            </div>
          ) : (
            <div />
          )}
          <SnippetCopyButton value={code} />
        </SnippetHeader>
        <SnippetTabsContent value="code" className="p-0 bg-muted/20 w-full overflow-x-auto">
          <SyntaxHighlighter
            language={language || 'typescript'}
            style={isDark ? oneDark : oneLight}
            customStyle={{
              margin: 0,
              padding: '1rem',
              background: 'transparent',
              fontSize: '0.875rem',
              lineHeight: '1.7',
            }}
            codeTagProps={{
              style: {
                fontFamily: 'var(--font-mono)',
              }
            }}
          >
            {code}
          </SyntaxHighlighter>
        </SnippetTabsContent>
      </Snippet>
    </div>
  );
}

// Feature card
export function FeatureCard({ title, description, icon }: { title: string; description: string; icon?: React.ReactNode }) {
  return (
    <Card className="h-full border-border/50 shadow-sm hover:shadow-md transition-shadow">
      <CardHeader className="pb-3">
        {icon && <div className="mb-3 text-primary">{icon}</div>}
        <CardTitle className="text-base font-semibold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed">{description}</CardDescription>
      </CardContent>
    </Card>
  );
}

// Info callout
export function InfoCallout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Alert className="not-prose my-8 border-stone-200 bg-stone-50/50 dark:border-stone-800 dark:bg-stone-900/30">
      <InfoIcon className="h-5 w-5 text-stone-600 dark:text-stone-400" />
      {title && <AlertTitle className="text-base font-semibold mb-2 text-stone-900 dark:text-stone-100">{title}</AlertTitle>}
      <AlertDescription className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{children}</AlertDescription>
    </Alert>
  );
}

// Warning callout
export function WarningCallout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Alert variant="destructive" className="not-prose my-8 border-red-200 bg-red-50/50 dark:border-red-900 dark:bg-red-950/30">
      <AlertTriangleIcon className="h-5 w-5" />
      {title && <AlertTitle className="text-base font-semibold mb-2">{title}</AlertTitle>}
      <AlertDescription className="text-sm leading-relaxed">{children}</AlertDescription>
    </Alert>
  );
}

// Success callout
export function SuccessCallout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Alert className="not-prose my-8 border-green-200 bg-green-50/50 dark:border-green-900 dark:bg-green-950/30">
      <CheckCircle2Icon className="h-5 w-5 text-green-600 dark:text-green-400" />
      {title && <AlertTitle className="text-base font-semibold mb-2 text-green-900 dark:text-green-100">{title}</AlertTitle>}
      <AlertDescription className="text-sm leading-relaxed text-green-800 dark:text-green-200">{children}</AlertDescription>
    </Alert>
  );
}

// Tip callout
export function TipCallout({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <Alert className="not-prose my-8 border-stone-200 bg-stone-50/50 dark:border-stone-800 dark:bg-stone-900/30">
      <LightbulbIcon className="h-5 w-5 text-stone-600 dark:text-stone-400" />
      {title && <AlertTitle className="text-base font-semibold mb-2 text-stone-900 dark:text-stone-100">{title}</AlertTitle>}
      <AlertDescription className="text-sm leading-relaxed text-stone-700 dark:text-stone-300">{children}</AlertDescription>
    </Alert>
  );
}

// API method card
export function ApiMethod({ method, endpoint, description }: { method: string; endpoint: string; description: string }) {
  const methodColors: Record<string, string> = {
    GET: 'bg-blue-500 hover:bg-blue-600',
    POST: 'bg-green-500 hover:bg-green-600',
    PUT: 'bg-yellow-500 hover:bg-yellow-600',
    DELETE: 'bg-red-500 hover:bg-red-600',
    PATCH: 'bg-purple-500 hover:bg-purple-600',
  };

  return (
    <Card className="not-prose my-6 border-border/50 shadow-sm">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3 flex-wrap">
          <Badge className={`${methodColors[method]} text-white font-semibold px-3 py-1`}>{method}</Badge>
          <code className="text-sm font-mono bg-muted px-3 py-1 rounded">{endpoint}</code>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
      </CardContent>
    </Card>
  );
}

// Step card for tutorials
export function Step({ number, title, children }: { number: number; title: string; children: React.ReactNode }) {
  return (
    <div className="not-prose my-8">
      <div className="mb-3">
        <h3 className="text-xl font-semibold text-foreground">{title}</h3>
      </div>
      <div className="text-muted-foreground leading-relaxed space-y-4">{children}</div>
    </div>
  );
}

// Property table for API docs
export function PropertyTable({ properties }: { properties: Array<{ name: string; type: string; required?: boolean; description: string }> }) {
  return (
    <div className="not-prose my-8 overflow-x-auto rounded-lg border border-border/50 shadow-sm">
      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b bg-muted/50">
            <th className="text-left p-4 font-semibold text-sm">Property</th>
            <th className="text-left p-4 font-semibold text-sm">Type</th>
            <th className="text-left p-4 font-semibold text-sm">Description</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop, index) => (
            <tr key={index} className="border-b last:border-b-0 hover:bg-muted/30 transition-colors">
              <td className="p-4">
                <code className="text-sm font-mono bg-muted px-2 py-1 rounded">{prop.name}</code>
                {prop.required && <Badge variant="outline" className="ml-2 text-xs border-primary text-primary">required</Badge>}
              </td>
              <td className="p-4">
                <code className="text-sm font-mono text-muted-foreground">{prop.type}</code>
              </td>
              <td className="p-4 text-sm text-muted-foreground leading-relaxed">{prop.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// Feature grid
export function FeatureGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="not-prose grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {children}
    </div>
  );
}

// Section divider
export function SectionDivider() {
  return <Separator className="not-prose my-12" />;
}

// Code tabs for multiple language examples
export function CodeTabs({ children }: { children: React.ReactNode }) {
  return (
    <Tabs defaultValue="typescript" className="my-6">
      {children}
    </Tabs>
  );
}

export { Tabs, TabsContent, TabsList, TabsTrigger, Card, CardContent, CardDescription, CardHeader, CardTitle };
