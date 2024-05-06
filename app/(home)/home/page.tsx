import Sidebar from "@/app/components/Sidebar";
import Dashboard from "./Dashboard";
import SignupFooter from "./SignupFooter";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

export default async function Home() {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <main className={`flex flex-col m-2 `}>
      <div className={`flex ${!user ? "flex-grow" : ""}`}>
        <Sidebar />
        <Dashboard />
      </div>
      {!user && <SignupFooter />}
    </main>
  );
}
