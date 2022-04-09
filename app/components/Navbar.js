/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';

const navigation = [
  { name: 'Dashboard', href: '#', current: true },
  { name: 'Team', href: '#', current: false },
  { name: 'Projects', href: '#', current: false },
  { name: 'Calendar', href: '#', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <nav className='hidden sm:block sm:ml-6'>
      <div className='flex space-x-4'>
        {navigation.map(item => (
          <a
            key={item.name}
            href={item.href}
            className={classNames(
              item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
              'px-3 py-2 rounded-md text-sm font-medium'
            )}
            aria-current={item.current ? 'page' : undefined}>
            {item.name}
          </a>
        ))}
      </div>
    </nav>
  );
}
