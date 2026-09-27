import { Card } from "../components/Card";
import KeyIcon from "@/assets/images/icon-key.svg";
import WiFiIcon from "@/assets/images/icon-wifi.svg";
import { copyToClipboard } from "@/shared/lib/clipboard";
import { useEffect, useRef, useState } from "react";

export function CardsSection() {
  const [copyText, setCopyText] = useState("Copy");
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  async function onCopyToClipboard() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    try {
      await copyToClipboard("soleil-2026");
      setCopyText("✓");
    } catch {
      setCopyText("x");
    } finally {
      timeoutRef.current = setTimeout(() => {
        setCopyText("Copy");
      }, 1000);
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <section className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4.5 xl:gap-6">
      <Card
        topComponent={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5">
              <div className="bg-terracotta-600 rounded-8 flex h-10 w-10 items-center justify-center">
                <img src={KeyIcon} alt="Key icon" />
              </div>
              <p className="text-preset-6 text-terracotta-600 font-dm-mono uppercase">
                Arrival
              </p>
            </div>
            <p className="text-preset-3 text-terracotta-600">01</p>
          </div>
        }
        title="Check-in from 15:00"
        subtitle="Sat, 25 April"
        bottomComponent={
          <p className="text-preset-5 text-neutral-700">
            Ring the brass bell by the blue door. If we're at the market, the
            key is in the terracotta pot by the olive tree.
          </p>
        }
      />
      <Card
        topComponent={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5">
              <div className="rounded-8 flex h-10 w-10 items-center justify-center bg-blue-500">
                <img src={WiFiIcon} alt="WiFi icon" />
              </div>
              <p className="text-preset-6 font-dm-mono text-blue-500 uppercase">
                WiFi
              </p>
            </div>
            <p className="text-preset-3 text-blue-500">02</p>
          </div>
        }
        title="Le Soleil · Guest"
        subtitle="Password below"
        bottomComponent={
          <div className="flex flex-col gap-y-1">
            <div className="rounded-8 flex items-center justify-between bg-neutral-200 px-2.5 py-[7.5px]">
              <p className="text-preset-8 font-dm-mono text-neutral-600 uppercase">
                Network
              </p>
              <p className="font-dm-sans text-preset-7 text-neutral-900">
                Le Soleil · Guest
              </p>
            </div>
            <div className="rounded-8 flex items-center justify-between bg-neutral-200 px-2.5 py-[7.5px]">
              <p className="text-preset-8 font-dm-mono text-neutral-600 uppercase">
                Password
              </p>
              <div className="flex items-center gap-x-1.5">
                <p className="font-dm-sans text-preset-7 text-neutral-900">
                  soleil-2026
                </p>
                <button
                  className="flex cursor-pointer items-center justify-center rounded-full border border-neutral-400 px-2 pt-1 pb-0.5 text-center"
                  onClick={onCopyToClipboard}
                >
                  <span className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
                    {copyText}
                  </span>
                </button>
              </div>
            </div>
          </div>
        }
      />
      <Card
        topComponent={
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-x-2.5">
              <div className="rounded-8 flex h-10 w-10 items-center justify-center bg-rose-500">
                <img src={KeyIcon} alt="Key icon" />
              </div>
              <p className="text-preset-6 font-dm-mono text-rose-500 uppercase">
                Breakfast
              </p>
            </div>
            <p className="text-preset-3 text-rose-500">03</p>
          </div>
        }
        title="Served 8 – 10:30"
        subtitle="On the terrace"
        bottomComponent={
          <p className="text-preset-5 text-neutral-700">
            Fresh figs, Marseille honey, pain au levain, and espresso.
            Gluten-free option? Leave a note the night before.
          </p>
        }
      />
    </section>
  );
}
