import CustomerSupport from '@/content/docs/examples/customer-support.mdx';
import { DocsFeedback } from '@/components/docs-footer';

export default function CustomerSupportPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-8 pt-12">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <CustomerSupport />
        </article>
        <DocsFeedback />
      </div>
    </div>
  );
}
