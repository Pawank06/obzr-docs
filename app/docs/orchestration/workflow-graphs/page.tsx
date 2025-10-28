import WorkflowGraphs from '@/content/docs/orchestration/workflow-graphs.mdx';
import { DocsFeedback } from '@/components/docs-footer';

export default function WorkflowGraphsPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <WorkflowGraphs />
        </article>
        <DocsFeedback />
      </div>
    </div>
  );
}
