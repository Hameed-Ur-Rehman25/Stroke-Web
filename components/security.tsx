import { Lock, Shield } from "lucide-react"

export default function Security() {
  return (
    <section className="px-6 max-w-6xl mx-auto">
      <div className="bg-gray-800 rounded-lg p-12 text-center">
        <div className="flex justify-center mb-6">
          <div className="bg-gray-700 p-4 rounded-full">
            <Lock className="h-12 w-12 text-white" />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-white mb-2">Your health data is</h2>
        <h3 className="text-4xl font-bold text-purple-500 mb-8">Safe</h3>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-white flex-shrink-0 mt-1" />
            <p className="text-white text-left">
              No personally identifiable information is required to utilize the roboclinc AI Assistant and its
              associated features.
            </p>
          </div>

          <div className="flex items-start gap-4">
            <Shield className="h-6 w-6 text-white flex-shrink-0 mt-1" />
            <p className="text-white text-left">
              Any data shared while using our services is safeguarded by advanced security protocols, ensuring
              compliance with HIPPA and GDPR.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
