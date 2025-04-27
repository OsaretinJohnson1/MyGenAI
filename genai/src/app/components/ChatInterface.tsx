"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
  timestamp: Date;
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage: Message = {
      role: "user",
      content: input,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();

      if (!response.ok) {
        const errorText =
          data?.error || data?.details || "Unknown error occurred";
        throw new Error(errorText);
      }

      // Simulate a short delay for better UX
      setTimeout(() => {
        const assistantMessage: Message = {
          role: "assistant",
          content: data.response,
          timestamp: new Date(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 600);
    } catch (error) {
      console.error("Error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: `Sorry, I encountered an error: ${
          error instanceof Error ? error.message : "Unknown error"
        }. Please try again.`,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, errorMessage]);
      setIsLoading(false);
    }
  };

  // Format timestamp
  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  };

  return (
    <div className="flex flex-col h-[80vh] max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-xl bg-gradient-to-br from-white to-pink-50 dark:from-gray-900 dark:to-purple-900 w-full">
      {/* Header */}
      <div className="flex-shrink-0 bg-gradient-to-r from-purple-400 via-pink-300 to-rose-300 dark:from-purple-600 dark:via-pink-500 dark:to-rose-500 p-3 shadow-md">
        <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2">
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="rounded-full p-1 bg-white/20 backdrop-blur-sm shadow-inner"
          >
            <Image
              src="/assets/Osaretin - Cartoon 4.png"
              alt="AI Avatar"
              width={40}
              height={40}
              className="rounded-full object-cover"
              priority
            />
          </motion.div>

          <div>
            <h1 className="text-xl font-bold text-white drop-shadow-sm">
              Osaretin's Assistant
            </h1>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <p className="text-sm text-white/80">Online</p>
            </div>
          </div>
        </div>
      </div>

      {/* Messages Container */}
      <div className="flex-1 overflow-y-auto p-3 space-y-4 bg-gradient-to-br from-white to-pink-50 dark:from-gray-900 dark:to-purple-900">
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center px-6 py-20 space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-300 to-purple-400 dark:from-pink-500 dark:to-purple-600 flex items-center justify-center shadow-lg"
            >
              <span className="text-4xl">❤</span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-semibold text-purple-700 dark:text-purple-400"
            >
              Welcome to Osaretin's Digital Assistant!
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-gray-500 dark:text-gray-400 max-w-sm"
            >
              Ask me anything and I&apos;ll respond with professional flair and
              a touch of magic
            </motion.p>
          </div>
        )}

        {messages.map((message, index) => (
          <AnimatePresence key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 500 }}
              className={`flex ${
                message.role === "user" ? "justify-end" : "justify-start"
              } items-start gap-3`}
            >
              {message.role === "assistant" && (
                <motion.div
                  animate={
                    isLoading
                      ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] }
                      : { scale: 1, rotate: 0 }
                  }
                  transition={{
                    repeat: isLoading ? Infinity : 0,
                    repeatType: "loop",
                    duration: 1.5,
                    ease: "easeInOut",
                  }}
                  className="rounded-full p-1 bg-white/20 backdrop-blur-sm shadow-inner"
                >
                  <Image
                    src="/assets/Osaretin - Cartoon 4.png"
                    alt="AI Avatar"
                    width={48}
                    height={48}
                    className="rounded-full object-cover"
                    priority
                  />
                </motion.div>
              )}

              <div className="flex flex-col max-w-[85%] sm:max-w-[80%]">
                <div
                  className={`rounded-2xl sm:rounded-3xl p-3 sm:p-4 shadow-md ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-600 dark:to-purple-600 text-white ml-auto"
                      : "bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 text-gray-800 dark:text-gray-200 border border-purple-100 dark:border-purple-800"
                  }`}
                >
                  <div className="prose prose-sm dark:prose-invert max-w-none">
                    {message.content}
                  </div>
                </div>
                <span
                  className={`text-xs text-gray-400 dark:text-gray-500 mt-1 ${
                    message.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {formatTime(message.timestamp)}
                </span>
              </div>

              {message.role === "user" && (
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-pink-400 to-rose-300 dark:from-pink-500 dark:to-rose-400 flex items-center justify-center shadow-md text-white">
                    <User size={14} strokeWidth={2.5} />
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        ))}

        {isLoading && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-start items-start gap-3"
          >
            <div className="flex-shrink-0 mt-1">
              <Image
                src="/assets/Osaretin - Cartoon 4.png"
                alt="AI Avatar"
                width={40}
                height={40}
                className="rounded-full object-cover shadow-md"
                priority
              />
            </div>
            <div className="bg-gradient-to-r from-violet-100 to-pink-100 dark:from-violet-900 dark:to-pink-900 text-purple-800 dark:text-purple-300 rounded-3xl p-4 shadow-md flex items-center space-x-2">
              <div className="flex space-x-1">
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    delay: 0,
                  }}
                  className="w-2 h-2 rounded-full bg-purple-400 dark:bg-purple-500"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    delay: 0.3,
                  }}
                  className="w-2 h-2 rounded-full bg-pink-400 dark:bg-pink-500"
                />
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    delay: 0.6,
                  }}
                  className="w-2 h-2 rounded-full bg-rose-400 dark:bg-rose-500"
                />
              </div>
              <span className="text-sm font-medium">Thinking...</span>
            </div>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="flex-shrink-0 p-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-lg border-t border-pink-100 dark:border-purple-900 shadow-inner">
        <form
          onSubmit={handleSubmit}
          className="flex gap-2 sm:gap-3 items-center"
        >
          <motion.div className="flex-1 relative" whileHover={{ scale: 1.01 }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me anything... "
              className="w-full pl-3 sm:pl-4 md:pl-5 pr-8 sm:pr-10 md:pr-12 py-2 sm:py-3 md:py-4 border-2 border-pink-200 dark:border-purple-700 rounded-full focus:outline-none focus:ring-3 focus:ring-pink-200 dark:focus:ring-purple-700 focus:border-pink-300 dark:focus:border-purple-600 bg-white/90 dark:bg-gray-900/90 text-gray-700 dark:text-gray-200 placeholder-gray-400 dark:placeholder-gray-500 shadow-inner transition-all duration-300 text-sm sm:text-base"
            />
            <AnimatePresence>
              {input.length > 0 && (
                <motion.button
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  type="button"
                  onClick={() => setInput("")}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                >
                  ✕
                </motion.button>
              )}
            </AnimatePresence>
          </motion.div>

          <motion.button
            type="submit"
            disabled={isLoading || input.trim() === ""}
            className="bg-gradient-to-r from-pink-400 to-purple-500 dark:from-pink-500 dark:to-purple-600 text-white px-3 sm:px-4 md:px-6 py-2 sm:py-3 md:py-4 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-purple-500 disabled:opacity-70 disabled:cursor-not-allowed shadow-md transition-all duration-300 flex items-center gap-2 font-medium text-sm sm:text-base"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Send
            <motion.span
              animate={{
                rotate: isLoading ? 360 : 0,
              }}
              transition={{
                duration: 2,
                repeat: isLoading ? Infinity : 0,
                ease: "linear",
              }}
            ></motion.span>
          </motion.button>
        </form>
      </div>
    </div>
  );
}
