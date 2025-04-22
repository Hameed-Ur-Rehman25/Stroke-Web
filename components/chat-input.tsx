import { Paperclip, Mic, ArrowUp } from "lucide-react"

export default function ChatInput() {
  return (
    <div className="fixed bottom-12 left-0 right-0 px-6 z-10">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-full border border-gray-300 flex items-center p-2 pl-4">
          <input type="text" placeholder="Type or share photo" className="flex-1 bg-transparent outline-none" />
          <div className="flex items-center gap-2">
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Paperclip className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Attach</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <Mic className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Voice input</span>
            </button>
            <button className="p-2 rounded-full hover:bg-gray-100">
              <ArrowUp className="h-5 w-5 text-gray-500" />
              <span className="sr-only">Send</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
