import { Header } from "@/components/header";
import { ChatInterface } from "@/components/chat-interface";

export default function Home() {
  return (
    <div className="flex h-screen flex-col bg-background">
      <Header />
      <ChatInterface />
    </div>
  );
}
