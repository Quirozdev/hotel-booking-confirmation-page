import { MenuItem } from "../components/MenuItem";
import { items } from "../model/menu.constants";

export function Menu() {
  return (
    <div className="flex flex-col gap-y-0.5">
      {items.map((item, index) => (
        <MenuItem
          key={index}
          Icon={item.icon}
          text={item.text}
          count={item.count}
        />
      ))}
    </div>
  );
}
