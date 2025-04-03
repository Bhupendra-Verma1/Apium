
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

function Select({ options, selected, onChange }) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative w-full">
        {/* Selected Item Display */}
        <Listbox.Button className=" w-[25vh] flex items-center bg-gray-600/30 border px-2 py-0.5 border-gray-600 rounded-md shadow-sm">
          <div className="flex items-center justify-center gap-3 px-2">
            <img src={selected.logo} alt={selected.label} className="w-5 h-5"/>
            <span className="text-white font-sans">{selected.label}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-white" />
        </Listbox.Button>

        {/* Dropdown Options */}
        <Listbox.Options className="absolute mt-1 w-full bg-white border rounded-md shadow-lg">
          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option}
              className="flex items-center gap-3 py-1.75 px-2 bg-gray-700 text-white hover:bg-gray-400 cursor-pointer active:bg-gray-500 duration-100"
            >
              <img src={option.logo} alt={option.label} className="w-6 h-6" />
              <span>{option.label}</span>
              {selected.value === option.value && <Check className="w-4 h-4 text-green-600" />}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
}

export default Select;
