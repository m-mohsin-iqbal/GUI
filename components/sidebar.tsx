import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import {
  MessagesSquareIcon,
  PanelLeftOpen,
  PanelRightOpen,
} from "lucide-react";
import Image from "next/image";
import * as React from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

interface SidebarProps {
  chats: Array<{
    id: string;
    title: string;
    timestamp: string;
  }>;
  selectedChat: any | null;
  onSelectChat: (item: any) => void;
  isExpanded: boolean;
  onToggle: () => void;
}

export function Sidebar({
  chats,
  selectedChat,
  onSelectChat,
  isExpanded,
  onToggle,
}: SidebarProps) {
  const [width, setWidth] = React.useState(isExpanded ? 256 : 50);

  React.useEffect(() => {
    setWidth(isExpanded ? 300 : 50);
  }, [isExpanded]);

  return (
    <TooltipProvider>
      <div
        className={cn(
          "flex h-full flex-col border-r bg-muted/10 transition-all duration-300 relative"
        )}
        style={{ width }}
      >
        {!isExpanded && (
          <div className="p-2 flex flex-row justify-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full p-2 flex self-center"
                  onClick={onToggle}
                >
                  <PanelLeftOpen stroke="#475569" className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Expand sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}

        {isExpanded && (
          <div className="p-2 px-4 flex flex-row justify-end">
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={onToggle}
                >
                  <PanelRightOpen stroke="#475569" className="h-6 w-6" />
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>Collapse sidebar</p>
              </TooltipContent>
            </Tooltip>
          </div>
        )}

        <Tooltip>
          <TooltipTrigger asChild>
            {isExpanded ? (
              <div className="p-2 px-6  flex flex-row justify-end">
                <Button
                  className={cn(
                    "w-full justify-center gap-2 text-sm font-bold text-[#475569] cursor-pointer  ",
                    !isExpanded && " flex justify-center border-none px-0"
                  )}
                  variant="chat"
                  onClick={() => {
                    onSelectChat(null);
                  }}
                >
                  <MessagesSquareIcon
                    className="h-6 w-6"
                    fill="#475569"
                    stroke="#475569"
                  />
                  {isExpanded && <span>New Chat</span>}
                </Button>
              </div>
            ) : (
              <Button
                className={cn(
                  "w-full justify-center gap-2 text-sm font-bold text-[#475569] cursor-pointer  ",
                  !isExpanded && " flex justify-center border-none px-0"
                )}
                variant="chat"
                onClick={() => {}}
              >
                <MessagesSquareIcon
                  className="h-6 w-6"
                  fill="#475569"
                  stroke="#475569"
                />
              </Button>
            )}
          </TooltipTrigger>
          <TooltipContent side="right">
            <p>{isExpanded ? "Start a new chat" : "New Chat"}</p>
          </TooltipContent>
        </Tooltip>
        <div className="space-y-2 p-2">
          {isExpanded && (
            <div className="px-4 py-1 text-2xl font-medium text-black leading-7">
              History
            </div>
          )}
        </div>
        {isExpanded && (
          <ScrollArea
            className="flex-1"
            style={{ maxHeight: "calc(100vh - 220px)" }}
          >
            <div className="space-y-2 p-2">
              {/* {isExpanded && (
                <div className="px-4 py-1 text-2xl font-medium text-black leading-7">
                  History
                </div>
              )} */}
              {chats.map((chat: any) => (
                <Button
                  key={chat.id}
                  variant="ghost"
                  className={cn(
                    "w-full justify-start text-[16px] font-medium leading-[20px]",
                    !isExpanded && "px-0 justify-center",
                    selectedChat?.id === chat.id && "bg-purple"
                  )}
                  onClick={() => onSelectChat(chat)}
                >
                  <Image
                    width={24}
                    height={24}
                    alt="check"
                    src="/icons/checkbox.svg"
                  />
                  {/* <Tooltip content={chat.title} className="max-w-xs"> */}
                  {/* 
                  <Tooltip>
                    <TooltipTrigger asChild> */}
                  <span className="ml-2 truncate w-[200px]" title={chat.title}>
                    {chat.title}
                  </span>
                  {/* </TooltipTrigger>
                    <TooltipContent side="right">{chat.title}</TooltipContent>
                  </Tooltip> */}
                  {/* </Tooltip> */}
                </Button>
              ))}
            </div>
          </ScrollArea>
        )}
      </div>
    </TooltipProvider>
  );
}
