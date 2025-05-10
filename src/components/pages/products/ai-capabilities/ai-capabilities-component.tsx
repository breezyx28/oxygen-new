import { ArrowRight, SearchNormal1 } from "iconsax-react";

export const AICapabilitiesInput1 = () => (
  <div className="border md:min-w-[260px] min-w-full text-[14px] py-[22px] pl-[36px] pr-[56px] rounded-full bg-[#0b10290d]">
    <div className="flex items-center gap-4">
      <SearchNormal1 size={22} className="text-black" />
      <input
        type="search"
        name="search-input"
        id="search-input"
        className="bg-transparent border-0 text-black placeholder:text-black/70"
        placeholder="Search videos"
      />
    </div>
  </div>
);

export const AICapabilitiesInputSelect = () => (
  <div className="flex items-center pr-[12px] md:min-w-[260px] min-w-full bg-[#0b10290d] border rounded-full">
    <select
      name="search-input"
      id="search-input"
      className="text-black/70 w-full pl-[36px] text-[14px] py-[22px] outline-0 focus:rounded-full"
    >
      <option value="" selected disabled>
        Category
      </option>
      <option value="All use case">All use case</option>
      <option value="Intellignet Routing">Intellignet Routing</option>
      <option value="Agent Tooling">Agent Tooling</option>
      <option value="Outbound">Outbound</option>
      <option value="WEM Aspect">WEM Aspect</option>
      <option value="Analytics">Analytics</option>
      <option value="Journey Orchestration">Journey Orchestration</option>
      <option value="Architecture">Architecture</option>
    </select>
  </div>
);

export const AICapabilitiesCard1 = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div
    className="max-w-[320px] border rounded-[16px] p-[20px] flex flex-col gap-4"
    style={{
      boxShadow: "0 7px 32px 0 rgba(11,16,41,.05)",
    }}
  >
    <div className="content space-y-2">
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="text-black/70 leading-[1.1]">{text}</p>
    </div>
    <a
      href="#"
      className="rounded-full text-[14px] p-2 border border-black w-[fit-content]"
    >
      learn more <ArrowRight className="text-black pl-2 inline" />
    </a>
  </div>
);
