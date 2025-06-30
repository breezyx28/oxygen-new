import { useLastFormQuery } from "@/redux/endpoints/form";
import "../../../styles/booking-form.css";
import { useState } from "react";

const BookingForm = () => {
  const { data, isLoading } = useLastFormQuery({});

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    interest: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your form submission logic here
    setErrors({ firstname: true });
  };

  return data?.is_active ? (
    <section id="booking-form" className="w-full">
      <div className="container-container container-narrow">
        <div className="wrapper w-full md:h-[90vh] h-auto flex md:flex-row flex-col-reverse gap-[24px]">
          <div className="booking-banner-image relative md:w-[33.3%] w-full md:h-full h-[350px] rounded-[clamp(16px,1.25vw,32px)]">
            <img
              src={
                data?.form_person_img ??
                "/assets/images/booking-form/Steve-Wozniak-Large.webp"
              }
              className="absolute left-0 w-full h-full rounded-[clamp(16px,1.25vw,32px)] object-cover"
            />
            <div className="flex flex-col justify-end h-full">
              <div className="relative bottom-[0px] left-[0px] z-2 p-[18px] flex items-start gap-x-[18px]">
                <svg
                  className="relative top-[-6px] w-[22px]"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.27459 16.668H16.7456V32.668H0.332031V15.7666C0.332031 11.1844 1.80359 7.54121 4.74671 4.83698C7.7653 2.13276 11.7649 0.74309 16.7456 0.667969V8.21727C14.1798 8.44262 12.2932 9.15623 11.0857 10.3581C9.87831 11.4849 9.27459 13.1375 9.27459 15.3159V16.668ZM31.8008 16.668H39.2718V32.668H22.8582V15.7666C22.8582 11.1844 24.3298 7.54121 27.2729 4.83698C30.2915 2.13276 34.2911 0.74309 39.2718 0.667969V8.21727C36.706 8.44262 34.8194 9.15623 33.612 10.3581C32.4045 11.4849 31.8008 13.1375 31.8008 15.3159V16.668Z"
                    fill="#3758F9"
                  ></path>
                </svg>
                <div className="w-full text-white">
                  <h3 className="md:text-[22px] text-[20px] font-[600] leading-[26px] mb-[12px]">
                    {data?.form_person_qoute ?? "loading Qoute ..."}
                  </h3>
                  <p className="md:text-[16px] text-[12px] md:leading-[20px] leading-[16px]">
                    {data?.form_person_name ?? "loading Name ..."}
                  </p>
                  <p className="md:text-[16px] text-[12px] md:leading-[20px] leading-[16px] opacity-50">
                    {data?.form_person_position ?? "loading Position ..."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="booking-form flex flex-col justify-between">
            <h3 className="booking-form-header">
              {data?.form_header_title ??
                `Let's talk about how to build great customer journeys together.`}
            </h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-y-4">
              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* First Name */}
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="firstName"
                    className="text-[#111827] text-sm font-medium"
                  >
                    {data?.input_first_name_label ?? "Label loading..."}
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    placeholder={
                      data?.input_first_name_placeholder ??
                      "Placeholder loading..."
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        firstName: e.target.value,
                      })
                    }
                  />
                </div>

                {/* Last Name */}
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="lastName"
                    className="text-[#111827] text-sm font-medium"
                  >
                    {data?.input_last_name_label ?? "Label loading..."}
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    placeholder={
                      data?.input_last_name_placeholder ??
                      "Placeholder loading..."
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* Email */}
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="email"
                    className="text-[#111827] text-sm font-medium"
                  >
                    {data?.input_email_placeholder ?? "Label Loading..."}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder={
                      data?.input_email_placeholder ?? "Placeholder loading..."
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="phone"
                    className="text-[#111827] text-sm font-medium"
                  >
                    {data?.input_phone_label ?? "Label Loading..."}
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder={
                      data?.input_phone_placeholder ?? "Placeholder Loading..."
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.phone}
                    onChange={(e) =>
                      setFormData({ ...formData, phone: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
                {/* Company */}
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="company"
                    className="text-[#111827] text-sm font-medium"
                  >
                    {data?.input_company_name_label ?? "Label Loading..."}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    placeholder={
                      data?.input_company_name_placeholder ??
                      "Placeholder Loading..."
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.company}
                    onChange={(e) =>
                      setFormData({ ...formData, company: e.target.value })
                    }
                  />
                </div>

                {/* Company Size */}
                <div className="flex flex-col gap-y-1">
                  <label
                    htmlFor="companySize"
                    className="text-[#111827] text-sm font-medium"
                  >
                    {data?.input_company_size_label ?? "Label Loading..."}
                  </label>
                  <input
                    type="text"
                    id="companySize"
                    name="companySize"
                    placeholder={
                      data?.input_company_size_placeholder ??
                      "Placeholder Loading..."
                    }
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 bg-[#F9FAFB] placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    value={formData.companySize}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        companySize: e.target.value,
                      })
                    }
                  />
                </div>
              </div>

              {/* Interest Dropdown */}
              <div className="flex flex-col gap-y-1">
                <label
                  htmlFor="interest"
                  className="text-[#111827] text-sm font-medium"
                >
                  {data?.option_most_interested_label ?? "Label Loading..."}
                </label>
                <select
                  id="interest"
                  name="interest"
                  className={`w-full px-3 py-2 rounded-lg border border-gray-300 ${
                    errors.interest ? "border-red-500" : ""
                  } bg-[#F9FAFB] text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none`}
                  value={formData.interest}
                  onChange={(e) =>
                    setFormData({ ...formData, interest: e.target.value })
                  }
                >
                  <option value="">Please Select</option>
                  {data?.option_most_interested_options?.map(
                    (item: string, index: number) => (
                      <option value={item} key={index}>
                        {item}
                      </option>
                    )
                  )}
                </select>
                {errors.interest && (
                  <p className="text-red-500 text-sm mt-1">
                    Please complete this required field.
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="flex items-center justify-center text-center w-auto bg-primary-600 text-white font-medium py-3 px-4 rounded-full hover:bg-primary-500 transition-colors duration-200 cursor-pointer"
              >
                {data?.form_btn_title ?? "Button Loading..."}
              </button>

              {/* Privacy Policy */}
              <p className="text-sm text-gray-600 mt-4">
                {data?.form_footer ?? "Loading..."}{" "}
                <a
                  href="/privacy-policy"
                  className="text-blue-600 hover:underline"
                >
                  Privacy Policy
                </a>
                .
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  ) : null;
};

export default BookingForm;
