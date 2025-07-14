"use client"

import { AlertCircle, Heart, Activity } from 'lucide-react';
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function StrokeRiskAssessment() {
  const [showAssessment, setShowAssessment] = useState(false);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<boolean[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      question: "Are you over 55 years old?",
      explanation: "Age is a significant risk factor for stroke. As people age, the risk of stroke increases, especially after 55 years old."
    },
    {
      question: "Have you been diagnosed with high blood pressure?",
      explanation: "High blood pressure (hypertension) is defined as a consistent reading of 140/90 mmHg or higher. Uncontrolled high blood pressure can damage blood vessels, increasing the likelihood of a stroke."
    },
    {
      question: "Do you have diabetes?",
      explanation: "Diabetes is a condition where blood sugar levels are persistently above 126 mg/dL (fasting) or above 200 mg/dL (random). Poorly managed diabetes can lead to blood vessel damage and stroke risk."
    },
    {
      question: "Do you currently smoke?",
      explanation: "Smoking is defined as smoking at least one cigarette daily. Smoking narrows blood vessels and thickens blood, increasing the risk of clots and stroke."
    },
    {
      question: "Have you been told your cholesterol is high?",
      explanation: "High cholesterol is typically defined as total cholesterol levels above 200 mg/dL or LDL (bad cholesterol) above 100 mg/dL. High cholesterol can lead to fatty deposits in blood vessels, which can restrict blood flow and trigger strokes."
    },
    {
      question: "Do you exercise regularly?",
      explanation: "Regular physical activity is defined as at least 150 minutes of moderate-intensity exercise per week (e.g., brisk walking) or 75 minutes of vigorous activity (e.g., running)."
    },
  ];

  const handleStartAssessment = () => {
    setShowAssessment(true);
    setCurrentQuestionIndex(0);
    setAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answer: boolean) => {
    const newAnswers = [...answers, answer];
    setAnswers(newAnswers);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    // Count "Yes" answers (true), except for exercise which is a protective factor
    // For exercise, count "No" as a risk point
    return answers.reduce((score, answer, index) => {
      if (index === 5) { // Exercise question
        return score + (answer ? 0 : 1); // No exercise (false) = +1 risk
      }
      return score + (answer ? 1 : 0); // Yes for other questions = +1 risk
    }, 0);
  };

  const getRiskLevel = (score: number) => {
    if (score <= 2) return { level: "Low Risk", description: "Maintain a healthy lifestyle." };
    if (score <= 4) return { level: "Moderate Risk", description: "Consider regular health check-ups and lifestyle adjustments." };
    return { level: "High Risk", description: "Consult a healthcare professional for a detailed stroke risk assessment and possible lifestyle changes." };
  };

  const resetAssessment = () => {
    setShowAssessment(false);
    setShowResults(false);
    setAnswers([]);
    setCurrentQuestionIndex(0);
  };

  const score = calculateScore();
  const riskLevel = getRiskLevel(score);

  return (
    <section className="mb-12">
      {!showAssessment && (
        <>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <motion.div 
          className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ 
            scale: 1.03, 
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(239, 68, 68, 0.5)" 
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div 
              className="bg-red-100 p-2 rounded-full"
              whileHover={{ rotate: 5 }}
            >
              <AlertCircle className="h-6 w-6 text-red-600" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-800">High Blood Pressure</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <motion.p 
              className="text-2xl font-bold text-red-600"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              +150%
            </motion.p>
          </div>
          <p className="text-sm text-gray-600 mt-2">Individuals with hypertension have 2.5x higher risk of stroke</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ 
            scale: 1.03, 
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(249, 115, 22, 0.5)" 
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div 
              className="bg-orange-100 p-2 rounded-full"
              whileHover={{ rotate: 5 }}
            >
              <Activity className="h-6 w-6 text-orange-600" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-800">Atrial Fibrillation</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <motion.p 
              className="text-2xl font-bold text-orange-600"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              +500%
            </motion.p>
          </div>
          <p className="text-sm text-gray-600 mt-2">AFib increases stroke risk by 5x compared to those without</p>
        </motion.div>
        
        <motion.div 
          className="bg-white p-5 rounded-lg shadow-sm border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            scale: 1.03, 
            boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
            borderColor: "rgba(234, 179, 8, 0.5)" 
          }}
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.div 
              className="bg-yellow-100 p-2 rounded-full"
              whileHover={{ rotate: 5 }}
            >
              <Heart className="h-6 w-6 text-yellow-600" />
            </motion.div>
            <h3 className="text-lg font-medium text-gray-800">Diabetes</h3>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-gray-700">Risk Increase</p>
            <motion.p 
              className="text-2xl font-bold text-yellow-600"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              +200%
            </motion.p>
          </div>
          <p className="text-sm text-gray-600 mt-2">People with diabetes have 2-3x higher stroke risk</p>
        </motion.div>
      </div>
      
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-sm border border-indigo-100 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ boxShadow: "0 10px 15px rgba(0, 0, 0, 0.05)" }}
      >
        <h3 className="text-xl font-medium mb-4 text-indigo-700">Risk by Age Group in Malaysia</h3>
        <div className="space-y-4">
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">Under 40 years</span>
              <span className="text-indigo-700 font-medium">5%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: '5%' }}
                transition={{ duration: 1, delay: 0.5 }}
              ></motion.div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">40-60 years</span>
              <span className="text-indigo-700 font-medium">37%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: '37%' }}
                transition={{ duration: 1, delay: 0.6 }}
              ></motion.div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">60-80 years</span>
              <span className="text-indigo-700 font-medium">48%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: '48%' }}
                transition={{ duration: 1, delay: 0.7 }}
              ></motion.div>
            </div>
          </div>
          
          <div>
            <div className="flex justify-between mb-1">
              <span className="text-gray-700">Above 80 years</span>
              <span className="text-indigo-700 font-medium">10%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2.5">
              <motion.div 
                className="bg-indigo-600 h-2.5 rounded-full" 
                initial={{ width: 0 }}
                animate={{ width: '10%' }}
                transition={{ duration: 1, delay: 0.8 }}
              ></motion.div>
            </div>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-4">Source: Malaysian Stroke Registry data analysis 2020-2023</p>
      </motion.div>
      
      <motion.div 
        className="bg-slate-800 rounded-lg p-6 text-white shadow-lg border border-slate-600"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        whileHover={{ scale: 1.01 }}
      >
        <h3 className="text-xl font-bold mb-3 text-white">Take Our Stroke Risk Assessment</h3>
        <p className="mb-2 text-slate-300 text-sm">
          This stroke risk assessment tool is adapted from the validated Framingham Stroke Risk Profile (FSRP) and provides a simplified approach for public use.
        </p>
        <p className="mb-2 text-slate-200 font-medium">Answer the following questions to assess your risk of stroke</p>
        <motion.button 
          onClick={handleStartAssessment}
          className="inline-block bg-blue-600 text-white font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start Assessment
        </motion.button>
      </motion.div>
        </>
      )}

      {showAssessment && !showResults && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-indigo-100 mb-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-2xl font-bold text-indigo-700">Stroke Risk Assessment</h3>
            <span className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium">
              Question {currentQuestionIndex + 1} of {questions.length}
            </span>
          </div>
          <div className="mb-8">
            <h4 className="text-xl font-medium text-gray-800 mb-2">{questions[currentQuestionIndex].question}</h4>
            <p className="text-gray-600 mb-4 text-sm">{questions[currentQuestionIndex].explanation}</p>
            <div className="flex gap-4">
              <button
                onClick={() => handleAnswer(true)}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-lg font-medium transition-colors"
              >
                Yes
              </button>
              <button
                onClick={() => handleAnswer(false)}
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-4 rounded-lg font-medium transition-colors"
              >
                No
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center">
            <button
              onClick={resetAssessment}
              className="text-gray-600 hover:text-gray-900 underline text-sm"
            >
              Cancel
            </button>
            <div className="flex items-center gap-1">
              {Array.from({ length: questions.length }).map((_, index) => (
                <div 
                  key={index} 
                  className={`h-2 w-2 rounded-full ${index < currentQuestionIndex ? 'bg-indigo-600' : 'bg-gray-300'}`}
                ></div>
              ))}
            </div>
          </div>
        </div>
      )}

      {showResults && (
        <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200 mb-6 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1 ${
            score <= 2 ? 'bg-emerald-500' : score <= 4 ? 'bg-amber-500' : 'bg-red-500'
          }`}></div>
          <h3 className="text-2xl font-bold text-slate-800 mb-6">Your Stroke Risk Assessment Results</h3>
          <div className="flex items-center gap-3 mb-6">
            <div className={`p-4 rounded-full ${
              score <= 2 ? 'bg-emerald-100 text-emerald-600' : 
              score <= 4 ? 'bg-amber-100 text-amber-600' : 
              'bg-red-100 text-red-600'
            }`}>
              {score <= 2 ? (
                <Heart className="h-8 w-8" />
              ) : score <= 4 ? (
                <AlertCircle className="h-8 w-8" />
              ) : (
                <Activity className="h-8 w-8" />
              )}
            </div>
            <div>
              <h4 className={`text-xl font-bold ${
                score <= 2 ? 'text-emerald-600' : 
                score <= 4 ? 'text-amber-600' : 
                'text-red-600'
              }`}>
                {score <= 2 ? 'Low Risk' : score <= 4 ? 'Moderate Risk' : 'High Risk'}
              </h4>
              <p className="text-gray-600">Score: {score} out of 6</p>
            </div>
          </div>
          {/* User's selected risk factors */}
          <div className="mb-6">
            <h5 className="font-medium text-gray-800 mb-2">Your Risk Factors:</h5>
            <ul className="space-y-2">
              {answers.map((answer, index) => {
                // For all questions except exercise, "Yes" is a risk
                // For exercise question, "No" is a risk
                const isRiskFactor = (index === 5) ? !answer : answer;
                if (isRiskFactor) {
                  return (
                    <li key={index} className="flex items-center gap-2">
                      <span className="text-red-500">•</span>
                      <span className="text-gray-700">
                        {index === 0 && "Age over 55"}
                        {index === 1 && "High blood pressure"}
                        {index === 2 && "Diabetes"}
                        {index === 3 && "Smoking"}
                        {index === 4 && "High cholesterol"}
                        {index === 5 && "Lack of regular exercise"}
                      </span>
                    </li>
                  );
                }
                return null;
              }).filter(Boolean)}
            </ul>
          </div>
          <div className="mb-6">
            <h5 className="font-medium text-gray-800 mb-2">Scoring:</h5>
            <p className="text-gray-700 mb-2">- For each "Yes" answer, give yourself 1 point</p>
            <h5 className="font-medium text-gray-800 mb-2">Risk Levels:</h5>
            <ul className="text-gray-700 mb-2 list-disc list-inside">
              <li>0-2 points: Low Risk</li>
              <li>3-4 points: Moderate Risk</li>
              <li>5-6 points: High Risk</li>
            </ul>
            <h5 className="font-medium text-gray-800 mb-2">Recommendations:</h5>
            <ul className="text-gray-700 mb-2 list-disc list-inside">
              <li>Low Risk: Maintain a healthy lifestyle.</li>
              <li>Moderate Risk: Consider regular health check-ups and lifestyle adjustments.</li>
              <li>High Risk: Consult a healthcare professional for a more detailed stroke risk assessment and possible lifestyle changes.</li>
            </ul>
          </div>
          <div className="mb-2">
            <h5 className="font-medium text-gray-800 mb-2">Note:</h5>
            <p className="text-gray-600 text-sm">This tool is adapted from the validated Framingham Stroke Risk Profile (FSRP) and provides a general stroke risk estimate. It should not replace professional medical advice.</p>
          </div>
        </div>
      )}
    </section>
  );
}