import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MobileFrame from "@/components/MobileFrame";
import FloatingInput from "@/components/FloatingInput";

const CreateAccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
  });
  const [isAgency, setIsAgency] = useState<boolean | null>(null);

  const handleChange = (field: string) => (value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    navigate("/account");
  };

  return (
    <MobileFrame>
      <div className="p-6 pt-8 h-full overflow-y-auto">
        <h1 className="text-2xl font-bold text-foreground mb-6">
          Create your
          <br />
          PopX account
        </h1>

        <div className="space-y-5">
          <FloatingInput
            label="Full Name"
            required
            value={formData.fullName}
            onChange={handleChange("fullName")}
          />

          <FloatingInput
            label="Phone number"
            required
            type="tel"
            value={formData.phone}
            onChange={handleChange("phone")}
          />

          <FloatingInput
            label="Email address"
            required
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
          />

          <FloatingInput
            label="Password"
            required
            type="password"
            value={formData.password}
            onChange={handleChange("password")}
          />

          <FloatingInput
            label="Company name"
            value={formData.company}
            onChange={handleChange("company")}
          />

          <div className="pt-2">
            <p className="text-sm text-foreground mb-3">
              Are you an Agency?<span className="text-popx-purple ml-0.5">*</span>
            </p>
            <div className="flex gap-6">
              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isAgency === true
                      ? "border-popx-purple"
                      : "border-gray-300"
                  }`}
                  onClick={() => setIsAgency(true)}
                >
                  {isAgency === true && (
                    <div className="w-2.5 h-2.5 rounded-full bg-popx-purple"></div>
                  )}
                </div>
                <span className="text-sm text-foreground">Yes</span>
              </label>

              <label className="flex items-center gap-2 cursor-pointer">
                <div
                  className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                    isAgency === false
                      ? "border-popx-purple"
                      : "border-gray-300"
                  }`}
                  onClick={() => setIsAgency(false)}
                >
                  {isAgency === false && (
                    <div className="w-2.5 h-2.5 rounded-full bg-popx-purple"></div>
                  )}
                </div>
                <span className="text-sm text-foreground">No</span>
              </label>
            </div>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          className="w-full h-12 bg-popx-purple text-white font-medium rounded-md mt-6 hover:bg-popx-purple/90 transition-colors"
        >
          Create Account
        </button>
      </div>
    </MobileFrame>
  );
};

export default CreateAccount;
