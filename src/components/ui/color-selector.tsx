import * as RadioGroup from "@radix-ui/react-radio-group";

const colors = {
  primary: "bg-brandPrimary",
  success: "bg-brandSecondary",
  warning: "bg-warning",
  danger: "bg-destructive",
  info: "bg-info",
};

export function ColorSelector({ colorOptions }: { colorOptions: string[] }) {
  return (
    <div className="space-y-4">
      <label className="text-lg font-bold" htmlFor="color-picker">
        Opções de cor
      </label>
      <RadioGroup.Root
        className="flex justify-evenly md:justify-normal md:max-w-48 gap-2.5"
        defaultValue={colorOptions[0]}
        aria-label="Seleção de cor do produto"
        id="color-picker"
      >
        {colorOptions.map((color) => (
          <div key={color} className="flex items-center">
            <RadioGroup.Item
              className={`${
                colors[color as keyof typeof colors]
              } w-12 h-12 rounded-full focus:shadow-[0_0_0_2px] focus:shadow-black outline-none cursor-pointer`}
              value={color}
            />
          </div>
        ))}
      </RadioGroup.Root>
    </div>
  );
}
