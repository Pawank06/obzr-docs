import { DocsFeedback } from '@/components/docs-footer';

export function DocsPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-1 flex-col p-6 md:p-8 lg:p-12">
      <div className="mx-auto w-full max-w-5xl">
        <article className="prose prose-slate dark:prose-invert max-w-none 
          prose-headings:scroll-mt-20 prose-headings:font-semibold 
          prose-h1:text-4xl prose-h1:font-bold prose-h1:tracking-tight prose-h1:mb-4 prose-h1:leading-tight
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-b prose-h2:pb-3
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 
          prose-h4:text-lg prose-h4:mt-6 prose-h4:mb-3
          prose-p:text-base prose-p:leading-7 prose-p:mb-6 prose-p:text-muted-foreground
          prose-li:my-2 prose-li:text-muted-foreground
          prose-strong:text-foreground prose-strong:font-semibold
          prose-code:text-sm prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:before:content-none prose-code:after:content-none prose-code:font-mono prose-code:text-foreground
          prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg prose-pre:p-4
          prose-a:text-primary prose-a:no-underline prose-a:font-medium hover:prose-a:underline
          prose-blockquote:border-l-primary prose-blockquote:bg-muted/50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r
          prose-img:rounded-lg prose-img:border
          prose-hr:my-8 prose-hr:border-border
          prose-table:text-sm
          prose-thead:border-b-2
          prose-th:text-left prose-th:font-semibold prose-th:text-foreground
          prose-td:text-muted-foreground">
          {children}
        </article>
        <div className="mt-16 border-t pt-8">
          <DocsFeedback />
        </div>
      </div>
    </div>
  );
}
