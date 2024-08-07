import Rating from "@/common/Rating";
import { CommentProps } from "@/lib/definitions";
import Image from "next/image";
import { FC } from "react";



const ReviewComment: FC<CommentProps> = ({ comment }) => {
  const { author, date, expertise, rate, avatar, text } = comment;
  return (
    <>
      <p className="w-16 aspect-square relative">
        <Image src={avatar} alt="" fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
      </p>
      <div className="flex flex-col text-xs gap-0.5 w-full">
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-0.5">
            <h3 className="font-bold dark:text-slate-100">{author}</h3>
            <p className="text-[10px] text-slate-400 dark:text-slate-500">{expertise}</p>
          </div>
          <div className="flex flex-col gap-0.5">
            <h3 className=" text-slate-400">{date}</h3>
            <Rating rate={rate} stars={5} size="sm" />
          </div>
        </div>
        <p className="text-slate-400 dark:text-slate-300 mt-2 line-clamp-3 text-[9px] md:text-xs">
          {text}
        </p>
      </div>
    </>
  );
};

export default ReviewComment;
