import { ReactNode } from "react";

interface MobileFrameProps {
  children: ReactNode;
}

const MobileFrame = ({ children }: MobileFrameProps) => {
  return (
    <div className="min-h-screen bg-gray-200 flex items-center justify-center p-4">
      <div className="w-[360px] h-[640px] bg-background rounded-3xl shadow-2xl overflow-hidden relative">
        {children}
      </div>
    </div>
  );
};

export default MobileFrame;
