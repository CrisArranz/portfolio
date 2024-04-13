import { Text } from "../Text";
import { CardProps } from "./types/card";

export const Card: React.FC<CardProps> = ({ title, description, type, tags, urls }) => {
  return (
    <article className="group max-w-sm lg:max-w-full min-h-full bg-slate-50 rounded-xl shadow-lg dark:bg-slate-900 dark:border-slate-700">
      <div className="relative h-48 w-full overflow-hidden rounded-t-xl">
        <Text message={type} type="SPAN" styles={{ className: "absolute top-2 right-2 backdrop-blur-md bg-slate-600/50 py-1 px-2 rounded-lg z-10 text-sm font-semibold text-slate-100 " }} />
        <img alt="Street fights" loading="lazy" width="500" height="500" decoding="async" data-nimg="1" className=" group-hover:scale-[1.03]  transition-all duration-500 object-cover h-full" sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" srcSet="https://res.cloudinary.com/dp520ozjl/image/upload/v1672414846/personal/StreetFigther_jwbdpk.png"></img>
      </div>
      <div className="p-5">
        <Text type="HEADING_5" message={title} styles={{ className: "mb-2 text-lg font-bold tracking-tight text-emerald-600 dark:text-emerald-400" }} />
        <Text type="PARAGRAPH" message={description} styles={{ className: "mb-3 text-sm font-normal text-black dark:text-white line-clamp-3" }} />
        {
          tags?.length && 
          <ul className="flex gap-1 flex-wrap text-black dark:text-white mb-2 text-sm">
            {tags.map(tag => <li className="rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-300/60 dark:bg-slate-800 px-1 font-mono text-xs">{tag}</li>)}
          </ul>
        }
        {
          urls?.length && 
          <div className="flex gap-1 flex-wrap text-black dark:text-white mb-2 text-sm">
            {urls.map(({ title, url }) => <a href={url}>{title}</a>)}
          </div>
        }
      </div>
    </article>
  );
}