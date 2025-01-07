/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import remarkGfm from "remark-gfm";

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        code({ inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <SyntaxHighlighter
              style={atomDark}
              language={match[1]}
              PreTag="div"
              {...props}
            >
              {String(children).replace(/\n$/, "")}
            </SyntaxHighlighter>
          ) : (
            <code className={className} {...props}>
              {children}
            </code>
          );
        },
        // Add custom styling for other Markdown elements
        h1: ({ ...props }) => (
          <h1 className="text-3xl font-bold mb-4" {...props} />
        ),
        h2: ({ ...props }) => (
          <h2 className="text-2xl font-bold mb-3" {...props} />
        ),
        h3: ({ ...props }) => (
          <h3 className="text-xl font-bold mb-2" {...props} />
        ),
        p: ({ ...props }) => <p className="mb-4" {...props} />,
        ul: ({ ...props }) => <ul className="list-disc pl-5 mb-4" {...props} />,
        ol: ({ ...props }) => (
          <ol className="list-decimal pl-5 mb-4" {...props} />
        ),
        li: ({ ...props }) => <li className="mb-1" {...props} />,
        a: ({ ...props }) => (
          <a className="text-blue-500 hover:underline" {...props} />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 border-gray-300 pl-4 italic my-4"
            {...props}
          />
        ),
        // Enhanced table styling
        table: ({ ...props }) => (
          <div className="overflow-x-auto my-4">
            <table
              className="min-w-full table-auto border-collapse border border-gray-200"
              {...props}
            />
          </div>
        ),
        thead: ({ ...props }) => <thead className="bg-gray-100" {...props} />,
        tbody: ({ ...props }) => (
          <tbody className="bg-white divide-y divide-gray-200" {...props} />
        ),
        tr: ({ ...props }) => (
          <tr className="transition-colors hover:bg-gray-50" {...props} />
        ),
        th: ({ ...props }) => (
          <th
            className="text-left p-4 font-semibold text-sm text-gray-900 border border-gray-200"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td
            className="p-4 text-sm text-gray-700 border border-gray-200"
            {...props}
          />
        ),
      }}
    >
      {content}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
