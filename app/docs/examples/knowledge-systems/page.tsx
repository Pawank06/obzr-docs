import KnowledgeSystems from '@/content/docs/examples/knowledge-systems.mdx';
import { DocsFeedback } from '@/components/docs-footer';

export default function KnowledgeSystemsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <KnowledgeSystems />
        </article>
        <DocsFeedback />
      </div>
    </div>
  );
}
