import HelloWorld from '@/content/docs/hello-world.mdx';

export default function HelloWorldPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 pt-6">
      <div className="mx-auto w-full max-w-4xl">
        <article className="prose prose-slate dark:prose-invert lg:prose-lg">
          <HelloWorld />
        </article>
      </div>
    </div>
  );
}
