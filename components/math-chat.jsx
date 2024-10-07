'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function MathChat() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (input.trim()) {
      setIsLoading(true)
      setMessages([...messages, { type: 'user', content: input }])
      
      try {
        const response = await fetch('/api/math-solve', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ question: input })
        })
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json()
        setMessages(prev => [...prev, { type: 'ai', content: data.answer }])
      } catch (error) {
        console.error('Error:', error)
        setMessages(prev => [...prev, { type: 'ai', content: `Sorry, I couldn't solve that problem. Error: ${error.message}` }])
      }

      setInput('')
      setIsLoading(false)
    }
  }

  return (
    <div className="flex flex-col h-screen bg-[#FFFAE6]">
      <main className="flex-1 overflow-auto p-4">
        {messages.map((message, index) => (
          <div key={index} className={`mb-4 p-2 rounded shadow ${message.type === 'user' ? 'bg-white' : 'bg-[#B3E5FC]'}`}>
            {message.content}
          </div>
        ))}
      </main>
      <footer className="bg-[#B3E5FC] p-4">
        <form onSubmit={handleSubmit} className="flex gap-2">
          <Input
            type="text"
            placeholder="Ask me about Math..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 bg-white"
            disabled={isLoading}
          />
          <Button type="submit" className="bg-[#FFA000] hover:bg-[#FF8F00] text-white" disabled={isLoading}>
            <Send className="h-4 w-4 mr-2" />
            <span className="sr-only">Send</span>
            {isLoading ? 'Thinking...' : 'Send'}
          </Button>
        </form>
      </footer>
    </div>
  );
}