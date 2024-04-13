import { Text } from "../Text";
import { CardProps } from "./types/card";

export const Card: React.FC<CardProps> = ({ title, description, type, image, tags, urls }) => {
  return (
    <article className="group max-w-sm lg:max-w-full min-h-full bg-slate-50 rounded-xl shadow-lg dark:bg-slate-900 dark:border-slate-700">
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Text type="SPAN" styles={{ className: "absolute top-2 right-2 flex gap-1" }}>
          {type.map(t => <Text message={t} type="SPAN" styles={{ className: "backdrop-blur-md bg-slate-600/50 py-1 px-2 rounded-lg z-10 text-sm font-semibold text-slate-100 " }} />)}
        </Text>
        <img alt={image?.alt} loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className=" group-hover:scale-[1.03]  transition-all duration-500 object-cover h-full" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet={image?.src}></img>
      </div>
      <div className="p-5">
        <Text type="HEADING_5" message={title} styles={{ className: "mb-2 text-lg font-bold tracking-tight text-emerald-600 dark:text-emerald-400" }} />
        <Text type="PARAGRAPH" message={description} styles={{ className: "mb-3 text-sm font-normal text-black dark:text-white line-clamp-3" }} />
        {
          tags?.length && 
          <ul className="flex gap-1 flex-wrap text-black dark:text-white text-sm mb-4">
            {tags.map(tag => <li className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-300/60 dark:bg-slate-800 px-1 font-mono text-xs">{tag}</li>)}
          </ul>
        }
        {
          urls?.length && 
          <div className="flex flex-col gap-1 flex-wrap text-black dark:text-white mb-2 text-sm">
            {urls.map(({ title, url }) => <a className="rounded-full text-black dark:text-emerald-300 border border-white dark:border-black flex justify-center items-center gap-x-2 py-1 px-2 md:py-2 text-xs md:text-base md:px-4 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900" href={url}>{title}</a>)}
          </div>
        }
      </div>
    </article>
  );
}