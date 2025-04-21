const BusinessVoipCompareTableData = [
  {
    d1: "Hardware Cost",
    d2: "Budget-friendly with no upfront costs",
    d3: "High costs for on-premises PBX needed on day one.",
  },
  {
    d1: "Implementation",
    d2: "Fast & free",
    d3: "Needs technicians and missed appointments",
  },
  {
    d1: "Contracts & Fees",
    d2: "Flexible, free upgrades",
    d3: "Locked-in contracts, upgrade fees",
  },
  {
    d1: "Customer support",
    d2: "24/7 support available for your whole team",
    d3: "Limited support and costly tech visits",
  },
  {
    d1: "Management",
    d2: "Self-manage on mobile devices",
    d3: "Requires IT experts",
  },
  {
    d1: "Scalability",
    d2: "Add/remove lines easily",
    d3: "Fixed lines",
  },
];

const BusinessVoipCompareTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        {/* Table Header */}
        <thead>
          <tr className="text-white bg-blue-600 px-[20px] w-full flex items-center py-[1rem] mt-[24px] border-b">
            <th className="text-xl text-start w-full mx-auto">{"Feature"}</th>

            <th className="text-xl text-start w-full mx-auto">
              {"VoIP Systems"}
            </th>
            <th className="text-xl text-start w-full mx-auto">
              {"Traditional Landlines"}
            </th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="w-full divide-y">
          {BusinessVoipCompareTableData?.map((item: any, index: number) => (
            <tr key={index} className="w-full p-[20px] flex items-center">
              <td className="w-full font-bold">{item?.d1}</td>

              <td className="w-full">{item?.d2}</td>

              <td className="w-full">{item?.d3}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BusinessVoipCompareTable;
