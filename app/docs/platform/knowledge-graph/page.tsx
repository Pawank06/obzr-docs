import KnowledgeGraph from '@/content/docs/platform/knowledge-graph.mdx';
import { DocsFeedback } from '@/components/docs-footer';

export default function KnowledgeGraphPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <KnowledgeGraph />
        </article>
        <DocsFeedback />
      </div>
    </div>
  );
}
