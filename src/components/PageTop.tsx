import { PostBody } from "@/components/PostBody";
import { RoundImage } from "@/components/RoundImage";
import { Socials } from "@/components/Socials";
import type { TPortableText } from "@/typings/schema-types";

export type PageTopProps = {
  title: string;
  subtitle?: string;
  socials?: string[];
  pictureUrl?: string;
  text: TPortableText;
};

export function PageTop({
  title,
  subtitle = "",
  socials = [],
  pictureUrl = "",
  text,
}: PageTopProps) {
  return (
    <div className="flex flex-col-reverse items-start sm:flex-row">
      <div className="flex flex-col pr-8">
        <h1 className="gradient-header mb-1 text-3xl font-bold tracking-tight md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <h2 className="text-2xl font-medium tracking-tight text-gray-800  dark:text-gray-200 md:text-3xl">
            {subtitle}
          </h2>
        )}
        <PostBody text={text} />
        <div className="itms-center mb-2 flex align-middle">
          {socials.length > 0 && <Socials socials={socials} />}
        </div>
      </div>
      {pictureUrl && (
        <div className="flex-col">
          <div className="mb-4 h-32 w-32 md:mb-0 md:h-48 md:w-48">
            <RoundImage alt={title} url={pictureUrl} />
          </div>
        </div>
      )}
    </div>
  );
}
