import { SearchInput } from "./search-input";
import { ThemeSwitcher } from "./theme-switcher";
import { Cart } from "./cart";
import { WishList } from "./wish-list";
import { Logo } from "./logo";
import { Suspense } from "react";

export function Header() {
  return (
    <header className="border-b flex items-center px-8 justify-between">
      <Logo className="flex md:hidden" />
      <div className="flex md:w-full justify-between ">
        <div className="space-x-4 w-1/2 hidden md:flex">
          <Suspense>
            <SearchInput />
          </Suspense>
        </div>
        <div className="flex space-x-12 items-center">
          <ThemeSwitcher />
          <div className="flex space-x-2">
            <WishList />
            <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}
