import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, AlertCircle, Heart, Activity, Brain } from 'lucide-react';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'What is Stroke | FamCare24/7',
  description: 'Learn about stroke, its types, symptoms, and burden in Malaysia.',
};

export default function StrokeInfoPage() {
  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
        What is Stroke?
      </h1>
      
      <section className="mb-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Understanding Stroke</h2>
            <p className="text-gray-700 mb-4">
              A stroke occurs when blood supply to part of the brain is interrupted or reduced, preventing brain tissue from 
              getting oxygen and nutrients. Brain cells begin to die within minutes. A stroke is a medical emergency that requires 
              immediate attention.
            </p>
          </div>
          
          <div className="md:w-1/3 bg-indigo-50 p-5 rounded-lg shadow-md flex justify-center items-center">
            <div className="relative w-full h-64">
              <Image 
                src="/brain-stroke-illustration.svg" 
                alt="Brain with stroke illustration" 
                width={300}
                height={240}
                className="p-4 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex flex-col md:flex-row-reverse gap-6 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Types of Stroke</h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-indigo-700">Ischemic Stroke</h3>
              <p className="text-gray-700">
                This is the most common type of stroke, accounting for about 87% of all cases. An ischemic stroke happens 
                when blood flow through an artery that supplies oxygen-rich blood to the brain becomes blocked.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-indigo-700">Hemorrhagic Stroke</h3>
              <p className="text-gray-700">
                A hemorrhagic stroke occurs when an artery in the brain leaks blood or ruptures. The leaked blood puts pressure 
                on brain cells and damages them. High blood pressure and aneurysms are examples of conditions that can cause a 
                hemorrhagic stroke.
              </p>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-medium mb-2 text-indigo-700">Transient Ischemic Attack (TIA)</h3>
              <p className="text-gray-700">
                Also known as a mini-stroke, a TIA is like a warning. It's caused by a temporary clot and doesn't cause permanent 
                damage. However, about 1 in 3 people who have a TIA will eventually have a stroke, with about half occurring within 
                a year after the TIA.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/3 bg-purple-50 p-5 rounded-lg shadow-md flex justify-center items-center">
            <div className="relative w-full h-64">
              <Image 
                src="/stroke-types-illustration.svg" 
                alt="Different types of stroke illustrated" 
                width={300}
                height={240}
                className="p-4 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10">
        <div className="flex flex-col md:flex-row gap-6 items-center">
          <div className="flex-1">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">Symptoms of Stroke</h2>
            <p className="text-gray-700 mb-4">
              The FAST acronym is an easy way to remember the sudden signs of stroke:
            </p>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li className="mb-2"><span className="font-medium text-indigo-700">F</span>ace drooping: Does one side of the face droop or is it numb?</li>
              <li className="mb-2"><span className="font-medium text-indigo-700">A</span>rm weakness: Is one arm weak or numb?</li>
              <li className="mb-2"><span className="font-medium text-indigo-700">S</span>peech difficulty: Is speech slurred or strange?</li>
              <li className="mb-2"><span className="font-medium text-indigo-700">T</span>ime to call emergency services if you see any of these signs.</li>
            </ul>
            <p className="text-gray-700">
              Other symptoms include sudden numbness or weakness, especially on one side of the body; sudden confusion or trouble 
              understanding speech; sudden trouble seeing in one or both eyes; sudden trouble walking, dizziness, or loss of balance; 
              and sudden severe headache with no known cause.
            </p>
          </div>
          
          <div className="md:w-1/3 bg-red-50 p-5 rounded-lg shadow-md flex justify-center items-center">
            <div className="relative w-full h-64">
              <Image 
                src="/stroke-symptoms-fast.svg" 
                alt="FAST symptoms of stroke illustrated" 
                width={300}
                height={240}
                className="p-4 object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="mb-10 bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-lg">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Burden of Stroke in Malaysia</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-indigo-700">Daily Stroke Admissions</h3>
            <p className="text-3xl font-bold text-gray-800 mb-1">110-120<span className="text-lg text-gray-600">/day</span></p>
            <p className="text-sm text-gray-600">Stroke admissions (2022-2023)</p>
            <p className="text-xs text-gray-500 mt-2">Reference: National Stroke Registry of Malaysia Annual Report 2023; Ministry of Health Malaysia Health Facts 2023</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-indigo-700">Age Distribution</h3>
            <p className="text-3xl font-bold text-gray-800 mb-1">42%<span className="text-lg text-gray-600"> Below 60 years old</span></p>
            <p className="text-xs text-gray-500 mt-2">Reference: Aziz ZA, et al. (2022). "Changing demographics of stroke in Malaysia: Analysis from the Malaysian Stroke Registry." International Journal of Stroke, 17(5):556-563</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-indigo-700">Daily Mortality</h3>
            <p className="text-3xl font-bold text-gray-800 mb-1">35-38<span className="text-lg text-gray-600"> Deaths per day</span></p>
            <p className="text-xs text-gray-500 mt-2">Reference: Department of Statistics Malaysia (DOSM) Mortality Statistics 2023; World Stroke Organization Malaysia Country Report 2023</p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-medium mb-2 text-indigo-700">Economic Burden</h3>
            <p className="text-3xl font-bold text-gray-800 mb-1">RM 290-320 Million</p>
            <p className="text-sm text-gray-600">Annual cost of stroke management for approximately 40,000-43,000 admissions per year</p>
            <p className="text-xs text-gray-500 mt-2">Reference: Abdul Aziz AF, et al. (2023). "Economic burden of stroke care in Malaysia: A cost-of-illness study." Neuroepidemiology, 41(3):174-182; Malaysian Society of Neurosciences Economic Impact Report 2022</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">Prevention and Treatment</h2>
        <p className="text-gray-700 mb-4">
          Many strokes can be prevented through healthy lifestyle changes and medication to control conditions like high 
          blood pressure and cholesterol. For those who do experience a stroke, prompt treatment is crucial to minimize 
          brain damage and potential complications.
        </p>
        <p className="text-gray-700 mb-6">
          Remember, time is brain—the faster you get treatment, the better your chances of recovery.
        </p>
        <div className="bg-red-50 p-4 border-l-4 border-red-500 rounded">
          <p className="text-lg font-medium text-red-700">Stroke is an emergency. Every minute counts.</p>
        </div>
      </section>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-6 text-gray-800">Locate Stroke-Ready Hospitals</h2>
        <p className="text-gray-700 mb-6">
          When a stroke occurs, quick access to medical care is crucial. Find the nearest stroke-ready hospital to ensure rapid treatment.
        </p>
        <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg p-6 text-white">
          <h3 className="text-xl font-bold mb-3">Hospital Locator</h3>
          <p className="mb-4">Find the nearest stroke-ready hospital in your area for emergency care.</p>
          <a 
            href="https://patient.boehringer-ingelheim.com/my/my-stroke-hospital/locate"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-white text-blue-600 font-medium px-6 py-3 rounded-full hover:bg-blue-50 transition duration-300"
          >
            Find Now
          </a>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-gray-800 text-center">NASAM Rehabilitation Centres</h2>
        <p className="text-gray-700 mb-8 text-center">
          The National Stroke Association of Malaysia (NASAM) provides rehabilitation services at these centres:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
          {/* Petaling Jaya */}
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-medium text-purple-800">Petaling Jaya</h3>
              <p className="text-sm text-gray-600">Since August 1996</p>
              <p className="text-purple-700 font-medium">Chris Low</p>
              <p className="text-sm text-gray-600">Sub-Committee Chairperson</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">No. 12, Jalan Bkt Menteri Selatan (7/2)</p>
              <p className="text-gray-700">Seksyen 7</p>
              <p className="text-gray-700">46050 Petaling Jaya</p>
              <p className="text-gray-700">Selangor Darul Ehsan</p>
              <p className="text-gray-700">Malaysia</p>
              <div className="flex items-center gap-2 mt-2 text-indigo-600">
                <Phone className="h-4 w-4" />
                <p>+603 7932 4840</p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <p className="text-gray-700 font-medium">Operating Hours:</p>
              </div>
              <p className="text-gray-700">Monday – Friday:</p>
              <p className="text-gray-700">9.00am – 1.00pm;</p>
              <p className="text-gray-700">2.00pm – 5.00pm</p>
              <p className="text-gray-700 mt-2">Saturday, Sunday & Public Holiday: Closed</p>
            </div>
          </div>

          {/* Ampang */}
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-medium text-purple-800">Ampang</h3>
              <p className="text-sm text-gray-600">Since March 2003</p>
              <p className="text-purple-700 font-medium">Tunku Rafidah</p>
              <p className="text-sm text-gray-600">Sub-Committee Chairperson</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">No. 9, Lorong Awan 1</p>
              <p className="text-gray-700">Kuala Ampang</p>
              <p className="text-gray-700">68000 Ampang</p>
              <p className="text-gray-700">Selangor Darul Ehsan</p>
              <p className="text-gray-700">Malaysia</p>
              <div className="flex items-center gap-2 mt-2 text-indigo-600">
                <Phone className="h-4 w-4" />
                <p>+603 4256 1234</p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <p className="text-gray-700 font-medium">Operating Hours:</p>
              </div>
              <p className="text-gray-700">Monday – Friday:</p>
              <p className="text-gray-700">9.00am – 1.00pm;</p>
              <p className="text-gray-700">2.00pm – 5.00pm</p>
              <p className="text-gray-700 mt-2">Saturday, Sunday & Public Holiday: Closed</p>
            </div>
          </div>

          {/* Sabah */}
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-medium text-purple-800">Sabah</h3>
              <p className="text-sm text-gray-600">Since November 2001</p>
              <p className="text-purple-700 font-medium">Jasminah Ali</p>
              <p className="text-sm text-gray-600">Sub-Committee Chairperson</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">Kompleks Badan-Badan Sukarela</p>
              <p className="text-gray-700">Wisma Pandu Puteri</p>
              <p className="text-gray-700">KM4, Jalan Tuaran</p>
              <p className="text-gray-700">88400 Kota Kinabalu</p>
              <p className="text-gray-700">Sabah, Malaysia</p>
              <div className="flex items-center gap-2 mt-2 text-indigo-600">
                <Phone className="h-4 w-4" />
                <p>+6088 261 568</p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <p className="text-gray-700 font-medium">Operating Hours:</p>
              </div>
              <p className="text-gray-700">Monday – Friday:</p>
              <p className="text-gray-700">9.00am – 1.00pm;</p>
              <p className="text-gray-700">2.00pm – 5.00pm</p>
              <p className="text-gray-700 mt-2">Saturday, Sunday & Public Holiday: Closed</p>
            </div>
          </div>

          {/* Perak */}
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-medium text-purple-800">Perak</h3>
              <p className="text-sm text-gray-600">Since September 2004</p>
              <p className="text-purple-700 font-medium">Vacancy</p>
              <p className="text-sm text-gray-600">Sub-Committee Chairperson</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">No. 12I8, Jalan King</p>
              <p className="text-gray-700">Taman Hoover</p>
              <p className="text-gray-700">31650 Ipoh</p>
              <p className="text-gray-700">Perak Darul Ridzuan</p>
              <p className="text-gray-700">Malaysia</p>
              <div className="flex items-center gap-2 mt-2 text-indigo-600">
                <Phone className="h-4 w-4" />
                <p>+605 246 0896</p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <p className="text-gray-700 font-medium">Operating Hours:</p>
              </div>
              <p className="text-gray-700">Monday – Friday:</p>
              <p className="text-gray-700">9.00am – 1.00pm;</p>
              <p className="text-gray-700">2.00pm – 5.00pm</p>
              <p className="text-gray-700 mt-2">Saturday, Sunday & Public Holiday: Closed</p>
            </div>
          </div>

          {/* Johor */}
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-medium text-purple-800">Johor</h3>
              <p className="text-sm text-gray-600">Since June 2007</p>
              <p className="text-purple-700 font-medium">Vacancy</p>
              <p className="text-sm text-gray-600">Sub-Committee Chairperson</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">No. 12, Jalan Layak</p>
              <p className="text-gray-700">Serene Park</p>
              <p className="text-gray-700">80300 Johor Bahru</p>
              <p className="text-gray-700">Johor Darul Takzim</p>
              <p className="text-gray-700">Malaysia</p>
              <div className="flex items-center gap-2 mt-2 text-indigo-600">
                <Phone className="h-4 w-4" />
                <p>+607 207 0120</p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <p className="text-gray-700 font-medium">Operating Hours:</p>
              </div>
              <p className="text-gray-700">Monday – Friday:</p>
              <p className="text-gray-700">9.00am – 1.00pm;</p>
              <p className="text-gray-700">2.00pm – 5.00pm</p>
              <p className="text-gray-700 mt-2">Saturday, Sunday & Public Holiday: Closed</p>
            </div>
          </div>

          {/* Kuantan */}
          <div className="border rounded-lg overflow-hidden bg-white shadow-sm">
            <div className="bg-purple-100 p-4">
              <h3 className="text-xl font-medium text-purple-800">Kuantan</h3>
              <p className="text-sm text-gray-600">Since May 2009</p>
              <p className="text-purple-700 font-medium">Chua Say Hand</p>
              <p className="text-sm text-gray-600">Sub-Committee Chairperson</p>
            </div>
            <div className="p-4">
              <p className="text-gray-700">No. A2134, Lorong Kubang Buaya 2</p>
              <p className="text-gray-700">Taman Happy</p>
              <p className="text-gray-700">25250 Kuantan</p>
              <p className="text-gray-700">Pahang Darul Makmur</p>
              <p className="text-gray-700">Malaysia</p>
              <div className="flex items-center gap-2 mt-2 text-indigo-600">
                <Phone className="h-4 w-4" />
                <p>+609 566 8195</p>
              </div>
            </div>
            <div className="border-t p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="h-4 w-4 text-gray-600" />
                <p className="text-gray-700 font-medium">Operating Hours:</p>
              </div>
              <p className="text-gray-700">Monday – Friday:</p>
              <p className="text-gray-700">9.00am – 1.00pm;</p>
              <p className="text-gray-700">2.00pm – 5.00pm</p>
              <p className="text-gray-700 mt-2">Saturday, Sunday & Public Holiday: Closed</p>
            </div>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">For more information, visit:</p>
          <a 
            href="https://www.nasam.org/about-us/"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium px-6 py-3 rounded-full hover:from-indigo-700 hover:to-purple-700 transition duration-300"
          >
            NASAM Official Website
          </a>
        </div>
      </section>
    </div>
  );
} 