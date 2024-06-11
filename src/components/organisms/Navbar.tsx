import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react'
import { Link } from 'react-router-dom'


const navigation = [
    { name: 'Groups', href: '/groups', current: false },
    { name: 'Members', href: '/members', current: false },
    { name: 'Social Networks', href: '/social-networks', current: false },
    { name: 'About', href: '/about', current: false },
]

function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ')
}

export default function Example() {
    return (
        <Disclosure as="nav" className="bg-black">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <img src="https://www.svgrepo.com/show/286790/cross-close.svg" alt="" className="block h-6 w-6" />
                                    ) : (
                                        <img src="https://www.svgrepo.com/show/427126/menu-2.svg" alt="" className="block h-6 w-6" />
                                    )}
                                </DisclosureButton>
                            </div>
                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="flex flex-shrink-0 items-center">
                                    <Link
                                        to={"/"}>
                                        <img
                                            className="h-8 w-auto"
                                            src="https://www.svgrepo.com/show/486355/coffee.svg"
                                            alt="logo olympus"
                                            title='Logo Olympus'
                                        />
                                    </Link>
                                </div>
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <button
                                    type="button"
                                    className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                                >
                                    <span className="absolute -inset-1.5" />
                                    <span className="sr-only">View notifications</span>
                                    <img src="https://www.svgrepo.com/show/231132/notification-bell.svg" alt="logo notification" className="h-6 w-6" />
                                </button>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="https://www.svgrepo.com/show/493162/hacker.svg"
                                                alt="picture profile"
                                            />
                                        </MenuButton>
                                    </div>
                                    <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <Link
                                                        to="/login"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Login
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <Link
                                                        to="/register"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Register
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <Link
                                                        to="/profile"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Profile
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <Link
                                                        to="/settings"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Settings
                                                    </Link>
                                                )}
                                            </MenuItem>
                                            <MenuItem>
                                                {({ focus }) => (
                                                    <Link
                                                        to="/"
                                                        className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        Sign out
                                                    </Link>
                                                )}
                                            </MenuItem>
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}

