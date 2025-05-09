import { AlertCircle, Heart, Activity } from 'lucide-react';

export default function StrokeRiskAssessment() {
  return (
    <section className="mb-12">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">Stroke Risk Assessment</h2>
      <p className="text-gray-700 mb-6">
        Understanding your personal risk factors is key to preventing stroke. Below are common risk factors and their associated risk percentages:
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-red-100 p-2 rounded-full">
              <AlertCircle className="h-6 w-6 text-red-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">High Blood Pressure</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <p className="text-2xl font-bold text-red-600">+150%</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Individuals with hypertension have 2.5x higher risk of stroke</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-orange-100 p-2 rounded-full">
              <Activity className="h-6 w-6 text-orange-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Atrial Fibrillation</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <p className="text-2xl font-bold text-orange-600">+500%</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">AFib increases stroke risk by 5x compared to those without</p>
        </div>
        
        <div className="bg-white p-5 rounded-lg shadow-sm border border-gray-100">
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-yellow-100 p-2 rounded-full">
              <Heart className="h-6 w-6 text-yellow-600" />
            </div>
            <h3 className="text-lg font-medium text-gray-800">Diabetes</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <p className="text-2xl font-bold text-yellow-600">+200%</p>
          </div>
          <p className="text-sm text-gray-600 mt-2">People with diabetes have 2-3x higher stroke risk</p>
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100 mb-6">
        <h3 className="text-xl font-medium mb-4 text-indigo-700">Risk by Age Group in Malaysia</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">Under 40 years</span>
              <span className="text-indigo-700 font-medium">5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '5%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">40-60 years</span>
              <span className="text-indigo-700 font-medium">37%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '37%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">60-80 years</span>
              <span className="text-indigo-700 font-medium">48%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '48%' }}></div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">Above 80 years</span>
              <span className="text-indigo-700 font-medium">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <div className="bg-indigo-600 h-2.5 rounded-full" style={{ width: '10%' }}></div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">Source: Malaysian Stroke Registry data analysis 2020-2023</p>
      </div>
      
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg p-6 text-white">
        <h3 className="text-xl font-bold mb-3">Take Our Stroke Risk Assessment</h3>
        <p className="mb-4">Answer a few questions to get a personalized stroke risk profile and recommendations.</p>
        <a 
          href="#"
          className="inline-block bg-white text-indigo-600 font-medium px-6 py-3 rounded-full hover:bg-indigo-50 transition duration-300"
        >
          Start Assessment
        </a>
      </div>
    </section>
  );
}