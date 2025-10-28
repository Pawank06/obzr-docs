import DeveloperAssistant from '@/content/docs/examples/developer-assistant.mdx';
import { DocsFeedback } from '@/components/docs-footer';

export default function DeveloperAssistantPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <DeveloperAssistant />
        </article>
        <DocsFeedback />
      </div>
    </div>
  );
}
