import Navbar from "./shared/Navbar";
import { useIntersectionObserver } from "../Hooks/useIntersectionObserver";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const { sentinelRef, isScrolled } = useIntersectionObserver();
  return (
    <>
      <div className="flex min-h-screen relative flex-col ">
        <div
          ref={sentinelRef}
          className="absolute top-0 left-0 w-full h-25 pointer-events-none"
        />

        <header className="fixed top-0 w-full z-50">
          <Navbar isScrolled={isScrolled} />
        </header>

        <main className="flex-1 pt-20">{children}</main>
      </div>
    </>
  );
};

export default Layout;
