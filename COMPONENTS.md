# MDX Components Reference

This document lists all available custom components for use in MDX documentation files.

## Code Components

### CodeBlock

Display code with syntax highlighting and copy functionality.

```mdx
<CodeBlock language="typescript" filename="example.ts">
{`const agent = new Agent({
  name: 'MyAgent',
  model: 'gpt-4',
});`}
</CodeBlock>
```

**Props:**
- `language`: Programming language for syntax highlighting
- `filename`: Optional filename to display above code

### CodeTabs

Display code examples in multiple languages.

```mdx
<Tabs defaultValue="typescript">
  <TabsList>
    <TabsTrigger value="typescript">TypeScript</TabsTrigger>
    <TabsTrigger value="python">Python</TabsTrigger>
  </TabsList>
  <TabsContent value="typescript">
    <CodeBlock language="typescript">
      {`// TypeScript code`}
    </CodeBlock>
  </TabsContent>
  <TabsContent value="python">
    <CodeBlock language="python">
      {`# Python code`}
    </CodeBlock>
  </TabsContent>
</Tabs>
```

## Layout Components

### FeatureGrid

Display features in a responsive grid.

```mdx
<FeatureGrid>
  <FeatureCard 
    title="Feature 1" 
    description="Description of feature 1"
  />
  <FeatureCard 
    title="Feature 2" 
    description="Description of feature 2"
  />
</FeatureGrid>
```

### Card Components

Standard card for content sections.

```mdx
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
    <CardDescription>Description</CardDescription>
  </CardHeader>
  <CardContent>
    Content goes here
  </CardContent>
</Card>
```

### SectionDivider

Add visual separation between sections.

```mdx
<SectionDivider />
```

## Callout Components

### InfoCallout

Display informational messages.

```mdx
<InfoCallout title="Note">
  This is important information.
</InfoCallout>
```

### WarningCallout

Display warnings.

```mdx
<WarningCallout title="Warning">
  Be careful with this operation.
</WarningCallout>
```

### SuccessCallout

Display success messages.

```mdx
<SuccessCallout title="Success!">
  Operation completed successfully.
</SuccessCallout>
```

### TipCallout

Display helpful tips.

```mdx
<TipCallout title="Pro Tip">
  Here's a helpful tip for better results.
</TipCallout>
```

## Tutorial Components

### Step

Display numbered steps in tutorials.

```mdx
<Step number={1} title="Install the SDK">
  Run the installation command:
  <CodeBlock language="bash">npm install @agentos/sdk</CodeBlock>
</Step>
```

## API Documentation Components

### PropertyTable

Display API properties in a table.

```mdx
<PropertyTable properties={[
  { name: 'name', type: 'string', required: true, description: 'Agent name' },
  { name: 'model', type: 'string', required: true, description: 'LLM model' },
  { name: 'temperature', type: 'number', description: 'Temperature setting' },
]} />
```

### ApiMethod

Display API method information.

```mdx
<ApiMethod 
  method="POST" 
  endpoint="/api/agents" 
  description="Create a new agent"
/>
```

## Best Practices

1. **Use CodeBlock for all code examples** - Provides copy functionality
2. **Add filenames to code blocks** - Helps users understand context
3. **Use appropriate callouts** - Guide users with visual cues
4. **Structure with cards** - Organize related content
5. **Use Steps for tutorials** - Make instructions clear and sequential
6. **Use PropertyTable for API docs** - Consistent API documentation
7. **Add proper spacing** - Use margins between components

## Example Page Structure

```mdx
# Page Title

<InfoCallout title="Overview">
  Brief introduction to the topic.
</InfoCallout>

## Section 1

<Card>
  <CardHeader>
    <CardTitle>Feature Name</CardTitle>
    <CardDescription>Brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <CodeBlock language="typescript" filename="example.ts">
      {`// Code example`}
    </CodeBlock>
  </CardContent>
</Card>

<TipCallout title="Pro Tip">
  Helpful advice for users.
</TipCallout>

<SectionDivider />

## Section 2

<Step number={1} title="First Step">
  Instructions for the first step.
</Step>

<Step number={2} title="Second Step">
  Instructions for the second step.
</Step>
```
