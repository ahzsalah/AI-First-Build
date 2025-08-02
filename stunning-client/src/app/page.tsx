import IdeaForm from "@/components/IdeaForm";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            AI-First Build
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform your website ideas into reality with AI-powered section
            generation. Describe your vision and we&apos;ll create the perfect
            structure for your website.
          </p>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          <IdeaForm />
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-500">
          <p className="text-sm">Built with Next.js, NestJS, and MongoDB</p>
        </div>
      </div>
    </div>
  );
}
