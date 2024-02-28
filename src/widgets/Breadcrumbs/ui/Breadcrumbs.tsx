import { Link, useMatches } from "@tanstack/react-router";
import { ChevronRight } from "lucide-react";
import { Fragment } from "react";

export const Breadcrumbs = () => {
  const matches = useMatches();
  
  const matchList = matches
    .filter((m, i) => m.context.path && m.context.title && i)
    .map((match) => ({
      path: match.context.path,
      title: match.context.title,
    }));

  return (
    <nav className="container flex items-center gap-4 mb-3 py-7 md:text-[1.125rem] md:leading-[1.375rem] text-muted-foreground">
      {matchList.map(({ path, title }, index) => (
        <Fragment key={`${path}-${title}-${index}`}>
          <Link key={title} to={path}>
            {title}
          </Link>
          {index !== matchList.length - 1 && <ChevronRight />}
        </Fragment>
      ))}
    </nav>
  );
};
