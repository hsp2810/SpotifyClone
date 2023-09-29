import Sidebar from "@/components/Sidebar";
import Dashboard from "./Dashboard";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className='flex flex-col m-2 max-h-screen'>
      <div className='flex'>
        <Sidebar />
        <Dashboard />
      </div>
      <Footer />
    </main>
  );
}
