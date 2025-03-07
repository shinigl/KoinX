import { useState } from 'react';
import { FaCheck, FaChevronDown } from 'react-icons/fa';

const country = [
  {
    id: 1,
    name: 'India',
    avatar: 'https://img.icons8.com/color/48/india.png',
  },
  {
    id: 2,
    name: 'Australia',
    avatar: 'https://img.icons8.com/color/48/australia-circular.png',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  const [selected, setSelected] = useState(country[1]);
  const [open, setOpen] = useState(false); 

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <div className="relative mt-2">
      {/* Label */}
      <label className="block text-sm font-medium leading-6 text-gray-900">Assigned to</label>

      {/* Dropdown button */}
      <div
        style={{ width: '228px', height: '48px' }}
        className="bg-white border border-gray-300 rounded-lg px-4 py-2 font-semibold relative w-full cursor-pointer text-gray-900 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-left sm:text-sm sm:leading-6"
        onClick={toggleDropdown}
      >
        <span className="flex items-center">
          <img src={selected.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
          <span className="ml-3 block truncate">{selected.name}</span>
        </span>
        <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
          <FaChevronDown className="h-5 w-5 text-gray-400" aria-hidden="true" />
        </span>
      </div>

      {/* Dropdown options */}
      {open && (
        <div
          className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          {country.map((cn) => (
            <div
              key={cn.id}
              onClick={() => {
                setSelected(cn);
                setOpen(false); 
              }}
              className={classNames(
                'relative cursor-pointer select-none py-2 pl-3 pr-9',
                selected.id === cn.id ? 'bg-indigo-600 text-white' : 'text-gray-900'
              )}
            >
              <div className="flex items-center">
                <img src={cn.avatar} alt="" className="h-5 w-5 flex-shrink-0 rounded-full" />
                <span
                  className={classNames(selected.id === cn.id ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                >
                  {cn.name}
                </span>
              </div>

              {selected.id === cn.id && (
                <span className="absolute inset-y-0 right-0 flex items-center pr-4 text-white">
                  <FaCheck className="h-5 w-5" aria-hidden="true" />
                </span>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
