"use client";

import { useState } from "react";
import { Sidebar } from "./sidebar";
import { ChatArea } from "./chat-area";
import { chatHistory } from "@/lib/data";

export function ChatInterface() {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [isSidebarExpanded, setIsSidebarExpanded] = useState(true);

  return (
    <div className="grid flex-1 md:grid-cols-[auto_1fr]">
      <Sidebar
        chats={chatHistory}
        selectedChat={selectedChat}
        onSelectChat={setSelectedChat}
        isExpanded={isSidebarExpanded}
        onToggle={() => setIsSidebarExpanded(!isSidebarExpanded)}
      />
      <ChatArea selectedChat={selectedChat} setSelectedChat={setSelectedChat} />
    </div>
  );
}
