import MobileFrame from "@/components/MobileFrame";
import { Camera } from "lucide-react";

const Account = () => {
  return (
    <MobileFrame>
      <div className="h-full">
        {/* Header */}
        <div className="bg-popx-light-gray border-b border-gray-200 p-4">
          <h1 className="text-lg font-semibold text-foreground">
            Account Settings
          </h1>
        </div>

        {/* Profile Section */}
        <div className="p-5 bg-popx-light-gray">
          <div className="flex items-start gap-4">
            {/* Avatar with camera icon */}
            <div className="relative flex-shrink-0">
              <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-300">
                <img
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-popx-purple rounded-full flex items-center justify-center">
                <Camera className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* User Info */}
            <div className="flex-1">
              <h2 className="text-base font-semibold text-foreground">
                Marry Doe
              </h2>
              <p className="text-sm text-muted-foreground">
                Marry@Gmail.Com
              </p>
            </div>
          </div>

          {/* Description */}
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
            Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam
            Erat, Sed Diam
          </p>
        </div>

        {/* Divider line */}
        <div className="border-t-4 border-dashed border-gray-200"></div>
      </div>
    </MobileFrame>
  );
};

export default Account;
