import Persistence from '@/content/docs/sdk/persistence.mdx';
import { DocsFeedback } from '@/components/docs-footer';

export default function PersistencePage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <Persistence />
        </article>
        <DocsFeedback />
      </div>
    </div>
  );
}
