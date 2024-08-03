import { FC } from "react";

type TableUiProps = {
  fields: string[];
  children: React.ReactNode;
  theme: "green" | "blue" | "orange"| "red";
};

const themes = {
  green: "bg-emerald-600",
  blue: "bg-blue-600",
  orange: "bg-orange-500",
  red: "bg-rose-600",
};

const TableUi: FC<TableUiProps> = ({ fields, theme, children }) => {
  return (
    <div className="max-w-full w-full overflow-x-auto">
      <table className="border dark:border-slate-300  border-collapse w-full  table-fixed ">
        <thead>
          <tr
            className={`p-2 text-[10px] sm:text-xs text-white border dark:border-slate-300  text-center font-bold ${themes[theme]}`}
          >
            {fields.map((i, index) => {
              return (
                <th
                  key={index}
                  className="capitalize p-2 border  text-center font-bold"
                >
                  {i}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
};

export default TableUi;
