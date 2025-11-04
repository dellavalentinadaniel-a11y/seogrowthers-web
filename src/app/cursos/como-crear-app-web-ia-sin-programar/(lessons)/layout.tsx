import { CourseProgressSidebar } from '@/components/CourseProgressSidebar';

export default function CourseLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-dark-bg text-text-light">
      <div className="container mx-auto px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-10 lg:flex-row">
          <main className="w-full lg:w-2/3">
            <article className="prose prose-invert max-w-none rounded-2xl border border-card-bg bg-card-bg/80 p-6 shadow-lg shadow-black/20 md:p-10">
              {children}
            </article>
          </main>
          <aside className="w-full lg:w-1/3">
            <CourseProgressSidebar />
          </aside>
        </div>
      </div>
    </div>
  );
}
