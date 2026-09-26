import { Header } from "../widgets/Header";
import { SideBar } from "../widgets/Sidebar";
import { MainSection } from "../widgets/MainSection";

export function LandingPage() {
  return (
    <div className="flex">
      <SideBar />
      <div className="flex-1">
        <Header />
        <MainSection />
      </div>
    </div>
  );
}
