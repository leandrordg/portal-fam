import Sidebar from "../components/sidebar";
import Warnings from "../components/warnings";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="flex items-start">
      <Sidebar />

      <section className="flex-[2] border-x min-h-screen p-4">
        {children}
      </section>

      <Warnings />
    </section>
  );
};

export default Layout;
