import Navbar from "./shared/Navbar";
import { useScrollTracker } from "../Hooks/useScrollTracker";

interface LayoutProps {
  children: React.ReactNode;
  activeId: string;
}

const Layout = ({ children, activeId }: LayoutProps) => {
  const { sentinelRef, isScrolled } = useScrollTracker(0);

  return (
    <>
      <div className="flex min-h-screen relative flex-col ">
        <div
          ref={sentinelRef}
          className="absolute top-0 left-0 w-full h-25 pointer-events-none"
        />

        <header className="fixed top-0 w-full z-50">
          <Navbar activeId={activeId} isScrolled={isScrolled} />
        </header>

        <main className="flex-1 pt-20">{children}</main>
      </div>
    </>
  );
};

export default Layout;
