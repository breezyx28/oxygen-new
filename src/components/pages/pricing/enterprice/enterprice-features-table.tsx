import { MinusCirlce, TickCircle } from "iconsax-react";
import InfoIcon from "../../../icons/info-icon";

const EnterpriceFeatuesTable = () => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full">
        {/* Table Header */}
        <thead>
          <tr className="faq-table-head px-[0px] w-full flex items-center py-[1rem] my-[24px] border-b border-b-black">
            <th className="text-start w-full mx-auto md:block hidden">
              Included features:
            </th>
            <th className="text-center w-full mx-auto">Essential</th>
            <th className="text-center w-full mx-auto">Professional</th>
            <th className="text-center w-full mx-auto">Premium</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="faq-table-body-wrapper w-full divide-y">
          {[1, 2, 3].map((item: any) => (
            <tr
              key={item}
              className="faq-row w-full flex md:flex-row flex-col items-center md:gap-y-0 gap-y-4 py-[20px]"
            >
              {/* Feature Name Column */}
              <td className="max-w-[256px] w-full flex md:flex-row flex-row-reverse items-center gap-x-[4px]">
                <InfoIcon className="w-[20px] opacity-50" />
                <span className="text-black text-[14px]">
                  Unlimited business voice & Video
                </span>
              </td>

              <td className="w-full flex items-center justify-between">
                {/* Feature Status Columns */}
                <div className="w-full flex justify-center">
                  <MinusCirlce size="26" color="#c8c9ce" variant="Bold" />
                </div>

                <div className="w-full flex justify-center items-center">
                  <TickCircle
                    size="26"
                    className="text-primary-600"
                    variant="Bold"
                  />
                </div>

                <div className="w-full flex justify-center items-center">
                  <TickCircle
                    size="26"
                    className="text-primary-600"
                    variant="Bold"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EnterpriceFeatuesTable;
