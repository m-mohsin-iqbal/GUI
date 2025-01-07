"use client";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatHistory, stockTickers } from "@/lib/data";
import { SendHorizontal, User } from "lucide-react";
import Image from "next/image";
import { useRef, useState } from "react";
import MarkdownRenderer from "./markdown-renderer";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { MultiSelect } from "./ui/multi-select";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";

interface ChatAreaProps {
  selectedChat: any;
  setSelectedChat: any;
}

export function ChatArea({ selectedChat, setSelectedChat }: ChatAreaProps) {
  console.log("selected chat : ", selectedChat);
  const [selectedFrameworks, setSelectedFrameworks] = useState<string[]>([]);

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSelectedChat(chatHistory.find((item) => item.id === "1"));
    // Handle submit logic here
  };

  return (
    <div className="flex h-full flex-col relative w-full">
      {selectedChat ? (
        <ScrollArea className={cn("flex-1")} style={{ maxHeight: "90vh" }}>
          <div className="space-y-4 pt-2 md:w-[831px] m-auto">
            {selectedChat?.messages.map((message: any) => (
              <div
                key={message.id}
                className={`flex gap-3 ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                {message.role === "assistant" && (
                  <Avatar>
                    <AvatarImage src="  /brand-chat-logo.svg" />
                    <AvatarFallback>AI</AvatarFallback>
                  </Avatar>
                )}
                <div
                  className={` px-4 py-2 max-w-[85%] rounded-[16px] ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground "
                      : "bg-white border border-[#E2E8F0]"
                  }`}
                >
                  <div
                    className="h-full w-[99.6%]"
                    // style={{ maxHeight: "calc(100vh - 200px)" }}
                  >
                    <div className="whitespace-pre-wrap break-words">
                      <MarkdownRenderer content={message.content} />
                    </div>
                  </div>
                </div>
                {message.role === "user" && (
                  <Avatar>
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback>
                      <User className="w-6 h-6" />
                    </AvatarFallback>
                  </Avatar>
                )}
              </div>
            ))}
          </div>
        </ScrollArea>
      ) : (
        <div className="flex flex-1 relative">
          <div className="flex  flex-col items-center gap-4 border-[1px] rounded-[16px] border-custom-border p-8 m-auto md:w-[831px] md:h-[338px] absolute left-1/2  -translate-x-1/2 top-1/3 transform -translate-y-1/3 ">
            <div className="rounded-full p-2">
              <Image
                width={73}
                height={73}
                alt="settings icon"
                src="/icons/settings.svg"
                className="h-[73px] w-[73px]"
              />
            </div>
            <h1 className="text-xl font-bold text-blue-gray">
              What can I help you with?
            </h1>
            <p className="text-center text-blue-gray font-normal text-[16px] ">
              Please note that you can request stock price predictions for a
              maximum of 30 days, as the models are trained exclusively for the
              following stocks:
            </p>
            <div className="w-full max-w-md px-4">
              <MultiSelect
                options={stockTickers}
                onValueChange={setSelectedFrameworks}
                defaultValue={selectedFrameworks}
                placeholder="Select Stocks (Multiple)"
                variant="inverted"
                animation={2}
                maxCount={3}
              />
            </div>
          </div>
        </div>
      )}
      {!selectedChat && (
        <div className="p-4 absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50">
          <form onSubmit={handleSubmit}>
            <div className="relative md:w-[831px] m-auto bg-white">
              <Image
                src="/icons/paperclip.svg"
                alt="paperclip"
                width={24}
                height={24}
                className="w-6 h-6 absolute left-2 top-4"
              />
              <Textarea
                ref={textareaRef}
                placeholder="Message Stock AI..."
                className="min-h-[117px] p-4 pl-8 resize-none rounded-sm"
                rows={1}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    handleSubmit(e);
                  }
                }}
              />
              <div className="absolute right-4 bottom-4 flex gap-2">
                <Button type="submit" size="lg" className="p-4">
                  <div>Send </div>
                  <SendHorizontal className="h-4 w-4" />
                  <span className="sr-only">Send message</span>
                </Button>
              </div>
            </div>
          </form>
          <div className="flex items-center justify-start gap-2 mt-2 md:w-[831px] m-auto">
            <div>
              <Image
                src="/icons/message.svg"
                width={20}
                height={28}
                alt="message icon"
              />
            </div>
            <div className="text-blue-gray text-[16px] leading-[23px]">
              Hint: Could you provide a 15-day stock price prediction for TSLA
            </div>
            and NVSA?
          </div>
        </div>
      )}
    </div>
  );
}
