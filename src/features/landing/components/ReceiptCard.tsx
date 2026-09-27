import BarCodeIcon from "@/assets/images/icon-barcode.svg";
import { cn } from "@/shared/lib/cn";

type Props = React.ComponentPropsWithRef<"div">;

export function ReceiptCard({ className, ...props }: Props) {
  return (
    <div
      className={cn(
        "rounded-20 flex flex-col gap-y-5 p-6 shadow-[0_1px_0px_0px_rgba(0,0,0,0.03),0_16px_30px_-20px_rgba(62,44,30,0.35),0_20px_40px_-30px_rgba(62,44,30,0.16)]",
        className,
      )}
      {...props}
    >
      <div className="flex justify-between border-b border-dashed border-neutral-400 pb-3">
        <div className="flex flex-col gap-y-1">
          <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
            Receipt
          </p>
          <p className="text-preset-4 text-neutral-900">Your stay</p>
        </div>
        <div className="flex flex-col gap-y-0.5">
          <p className="text-preset-10 font-dm-mono text-neutral-600">
            № MS-2026
          </p>
          <p className="text-preset-10 font-dm-mono text-neutral-600">
            0421-AH
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around">
        <div className="flex flex-col items-center gap-y-2 text-center">
          <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
            Check In
          </p>
          <div className="flex flex-col items-center gap-y-1.5">
            <p className="text-preset-2 text-neutral-900">25 Apr</p>
            <p className="text-preset-7 font-dm-sans flex items-center gap-x-1 text-neutral-700">
              <span>Saturday</span>
              <span>·</span>
              <span>15:00</span>
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-y-2 text-center">
          <p className="text-preset-10 font-dm-mono text-neutral-600 uppercase">
            Check Out
          </p>
          <div className="flex flex-col items-center gap-y-1.5">
            <p className="text-preset-2 text-neutral-900">29 Apr</p>
            <p className="text-preset-7 font-dm-sans flex items-center gap-x-1 text-neutral-700">
              <span>Wednesday</span>
              <span>·</span>
              <span>11:00</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-y-2 border-t border-dashed border-neutral-400 pt-3">
        <div className="flex items-center justify-between">
          <p className="text-preset-5 text-neutral-900">
            Room · La Garrigue × 4 nights
          </p>
          <p className="font-dm-mono text-preset-9 text-neutral-900">
            € 620.00
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-preset-5 text-neutral-900">Breakfast × 2 guests</p>
          <p className="font-dm-mono text-preset-9 text-neutral-900">€ 96.00</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-preset-5 text-neutral-700">Tourist tax</p>
          <p className="font-dm-mono text-preset-9 text-neutral-700">€ 14.40</p>
        </div>
      </div>
      <div className="flex justify-between border-t border-neutral-600 pt-3">
        <p className="text-preset-8 font-dm-mono text-neutral-600 uppercase">
          Total Paid
        </p>
        <p className="text-preset-3 text-neutral-900">€ 730.40</p>
      </div>
      <div className="flex items-center justify-between">
        <p className="text-preset-10 font-dm-mono text-neutral-600">
          Paid · Wise · GBP
        </p>
        <img src={BarCodeIcon} alt="Barcode icon" />
      </div>
    </div>
  );
}
