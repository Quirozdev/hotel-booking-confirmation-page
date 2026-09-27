import { Header } from "../widgets/Header";
import { SideBar } from "../widgets/Sidebar";
import { MainSection } from "../widgets/MainSection";
import { useState } from "react";
import { Overlay } from "@/shared/components/Overlay";

export function LandingPage() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] =
    useState<boolean>(false);

  return (
    <div className="flex">
      <SideBar
        isOpenOnMobile={isMobileSidebarOpen}
        onClose={() => setIsMobileSidebarOpen(false)}
      />
      <div className="flex-1">
        <Header
          onMenuToggle={() => {
            setIsMobileSidebarOpen((prev) => !prev);
          }}
        />
        <MainSection />
      </div>

      <Overlay
        isVisible={isMobileSidebarOpen}
        onOverlayClick={() => setIsMobileSidebarOpen(false)}
        className="xl:hidden"
      />
    </div>
  );
}
