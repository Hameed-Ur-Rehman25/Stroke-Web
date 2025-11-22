export default function ChatExample() {
  return (
    <section className="px-6 py-16" style={{ backgroundColor: 'hsl(var(--chat-bg))' }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">Welcome to the FamCare247</h2>

      <div className="bg-white rounded-xl p-6 shadow-lg border border-indigo-100">
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/grid-pattern.svg')] opacity-10"></div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-bl from-indigo-600/20 to-transparent"></div>
          
          <div className="absolute top-6 left-6 bg-indigo-500/30 p-2 rounded-full backdrop-blur-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 2L11 13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path
                d="M22 2L15 22L11 13L2 9L22 2Z"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="absolute top-16 left-6 bg-purple-500/30 p-2 rounded-full backdrop-blur-sm">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.5 12.5C22.5 18.0228 18.0228 22.5 12.5 22.5C6.97715 22.5 2.5 18.0228 2.5 12.5C2.5 6.97715 6.97715 2.5 12.5 2.5C18.0228 2.5 22.5 6.97715 22.5 12.5Z"
                stroke="white"
                strokeWidth="2"
              />
              <path d="M12.5 7.5V12.5L15.5 15.5" stroke="white" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>

          <div className="flex flex-col gap-4 mt-14">
            <div className="bg-indigo-100 text-indigo-800 rounded-2xl rounded-tl-sm py-3 px-5 self-start ml-12 shadow-md">
              <p className="font-medium">Hello there!</p>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-2xl rounded-tr-sm py-3 px-5 self-end mr-4 shadow-md">
              <p className="font-medium">I have a migraine</p>
            </div>

            <div className="bg-indigo-100 text-indigo-800 rounded-3xl rounded-tl-sm py-4 px-6 self-start ml-12 max-w-[80%] shadow-md">
              <p className="font-medium">I&apos;m sorry to hear that you&apos;re experiencing a migraine. Let&apos;s see how we can help alleviate your symptoms. I&apos;d like to ask a few questions to better understand your situation.</p>
            </div>
            
            <div className="flex self-start ml-12 items-center mt-2">
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></span>
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse mx-1" style={{ animationDelay: "0.2s" }}></span>
              <span className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 flex justify-center">
          <p className="text-indigo-600 text-sm font-medium">Powered by advanced AI models trained to support family caregivers</p>
        </div>
      </div>
      </div>
    </section>
  )
}
