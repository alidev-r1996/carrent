import {ChangeEvent} from "react" 


type sideOptionProps = {
  title: string;
  options: { title: string; quantity: number }[];
  Handler: (e: ChangeEvent<HTMLInputElement>) => void;
};


const SideOption: React.FC<sideOptionProps> = ({ title, options, Handler }) => {
  return (
    <div className="flex flex-col h-max">
      <h1 className="text-[sm] dark:text-slate-100  text-xs text-slate-400 mb-3  uppercase">
        {title}
      </h1>
      {options.map((item) => {
        return (
          <div
            key={item.title}
            className="flex  cursor-pointer items-center align-middle gap-1 mb-3"
          >
            <input
              type="checkbox"
              name="type"
              className="w-4 h-4 border  dark:bg-slate-800 dark:text-slate-800 border-gray-300 focus:ring-0 ring-offset-0 rounded"
              id={item.title}
              value={item.title}
              onChange={Handler}
            />
            <label
              htmlFor={item.title}
              className="text-slate-600 dark:text-slate-400 capitalize text-xs"
            >
              {item.title}
            </label>
            <p className="text-[10px] text-slate-400">({item.quantity})</p>
          </div>
        );
      })}
    </div>
  );
};

export default SideOption;
