
import { Listbox } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";

function Select({ options, selected, onChange }) {
  return (
    <Listbox value={selected} onChange={onChange}>
      <div className="relative w-full">
        {/* Selected Item Display */}
        <Listbox.Button className=" w-[27vh] flex items-center bg-gray-600/30 border px-2 py-0.5 border-gray-600 rounded-md shadow-sm">
          <div className="flex items-center justify-center gap-3 px-2">
            <img src={selected.logo} alt={selected.label} className={selected.value === 'go' ? 'w-5 h-4' : 'w-5 h-5'}/>
            <span className="text-white font-sans">{selected.label}</span>
          </div>
          <ChevronDown className="w-4 h-4 text-white" />
        </Listbox.Button>

        {/* Dropdown Options */}
        <Listbox.Options className="absolute mt-1 w-[27vh] shadow-xl overflow-auto max-h-80 scrollbar-none rounded-lg">

          {options.map((option) => (
            <Listbox.Option
              key={option.value}
              value={option}
              className="flex items-center gap-3 py-1.75 px-2 bg-gray-700 text-white hover:bg-gray-500 cursor-pointer active:bg-gray-500 duration-100"
            >
              <div className="w-7 h-7 rounded-md shadow-md bg-gray-600/30 flex justify-center items-center">
                <img src={option.logo} alt={option.label} className={option.value === 'go' ? 'w-6 h-4' : 'w-6 h-6'}/>
              </div>
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
