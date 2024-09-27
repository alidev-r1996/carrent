import { footerTitle } from "@/constants/constant";

const Footer = () => {
  return (
    <div className="flex flex-col max-h-max p-4 md:p-8 bg-header/90 static bottom-0 w-full dark:shadow-[0px_-2px_4px_rgba(0,0,0,0.8)]  shadow-[-1px_-1px_2px_rgba(0,0,0,0.1)]">
      <div className="flex pb-4 flex-col gap-6 md:gap-0 md:flex-row items-start justify-between border-b dark:border-b-slate-600">
        <div className="flex flex-col">
          <h1 className="uppercase mt-4 text-blue-700 font-bold text-lg md:text-[32px] text-LogoColor">
            Morent
          </h1>
          <p className="text-xs text-slate-700 dark:text-slate-200 mt-2">
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="flex flex-wrap gap-8">
          {Object.entries(footerTitle).map((i, index) => {
            return (
              <div key={index} className="flex flex-col gap-1">
                <h1 className="font-bold dark:text-slate-200 text-sm mb-2">{i[0]}</h1>
                {i[1].map((j, index) => {
                  return (
                    <p key={index} className="text-xs text-slate-600 dark:text-slate-400 text-searchColor">
                      {j}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex mt-4  dark:text-slate-600 gap-4 flex-wrap-reverse justify-between items-center">
        <p className="text-[10px] sm:text-xs">©2022 MORENT. All rights reserved</p>
        <div className="flex items-center justify-between w-full md:w-max md:gap-10">
          <p className="text-[10px] sm:text-xs">Privacy & Policy</p>
          <p className="text-[10px] sm:text-xs">Terms & Condition</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
