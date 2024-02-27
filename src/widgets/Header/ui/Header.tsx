import { Link } from "@tanstack/react-router";

export const Header = () => {
  return (
    <header className="shadow-[0_4px_8px_0_rgba(57,113,164,0.25)] bg-background mb-3">
      <div className="container flex items-center gap py-6 justify-between">
        <Link to="/" className="shrink-0">
          <img src="/logo.svg" alt="logo" className="h-[2.625rem]" />
        </Link>
        <div>
          <address className="justify-self-end items-center gap-16 hidden md:flex">
            <a className="not-italic" href="tel:+7-343-290-84-76">
              +7 343 290 84 76
            </a>
            <a className="not-italic" href="mailto:info@66bit.ru">
              info@66bit.ru
            </a>
          </address>
        </div>
      </div>
    </header>
  );
};
