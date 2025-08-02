import IdeaForm from "@/components/IdeaForm";

export default function IdeaFormPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Website Idea Generator
          </h1>
          <p className="text-lg text-gray-600">
            Enter your website idea and we&apos;ll generate the perfect sections
            for you.
          </p>
        </div>

        <IdeaForm />
      </div>
    </div>
  );
}
