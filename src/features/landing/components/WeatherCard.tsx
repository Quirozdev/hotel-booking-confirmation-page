import WeatherIcon from "@/assets/images/icon-weather.svg";

export function WeatherCard() {
  return (
    <div className="bg-sun-300 overflow-hidden relative rounded-16 py-3 px-4 flex flex-col gap-y-1.5">
      <img
        src={WeatherIcon}
        alt="Weather Icon"
        className="absolute -right-2 -top-1/3"
      />
      <p className="text-preset-10 text-neutral-700 font-dm-mono uppercase z-10">
        Today in Cassis
      </p>
      <p className="text-preset-2 text-neutral-900 z-10">27°</p>
      <p className="text-neutral-700 text-preset-7 font-dm-sans z-10">
        Sunny · light breeze
      </p>
    </div>
  );
}
