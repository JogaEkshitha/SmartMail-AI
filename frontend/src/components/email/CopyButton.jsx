import { Copy, Check } from "lucide-react";
import { useState } from "react";

function CopyButton({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-300 ${
        copied
          ? "bg-emerald-500 text-white"
          : "bg-cyan-500 text-slate-900 hover:bg-cyan-400"
      }`}
    >
      {copied ? (
        <>
          <Check size={16} />
          Copied
        </>
      ) : (
        <>
          <Copy size={16} />
          Copy
        </>
      )}
    </button>
  );
}

export default CopyButton;