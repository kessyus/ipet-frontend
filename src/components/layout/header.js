import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSelector } from 'react-redux';
// import { isAuthenticated } from '../../config/auth';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions/auth';

// Profiles
// 1 - Admin
// 2 - Supplier
// 3 - Customer

const navigation = [
  { label: "Home", route: "/", profile: [] },
  { label: "Serviços", route: "/service", profile: [] },
  { label: "Fornecedores", route: "/supplier", profile: [1] },
  { label: "Contato", route: "/about", profile: [] },
  { label: "Clientes", route: "/customer", profile: [1] },
  { label: "Vendas", route: "/sales", profile: [2] },
  { label: "Relatórios", route: "/report", profile: [1] },
];
const profile = [
  { label: "Perfil", route: "/profile", profile: [] },
  { label: "Sign out", route: "/logout", profile: [] },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  let location = useLocation();
  const dispatch = useDispatch();
  const [currentRoute, setCurrentRoute] = useState(location.pathname);
  const [pageTitle, setPageTitle] = useState("Home");

  useEffect(() => {
    setCurrentRoute(location.pathname);
    if (navigation.find((item) => item.route === currentRoute))
      setPageTitle(
        navigation.find((item) => item.route === currentRoute).label
      );
  }, [currentRoute, location]);

  // const userType = useSelector((state) => state.auth.usuario.userType);
  const userName = useSelector((state) => state.auth.usuario.nome);
  const userEmail = useSelector((state) => state.auth.usuario.email);

  const logout = () => {
    dispatch(logoutAction());
  }

  return (
    <div>
      <Disclosure as="nav" className="bg-gray-800">
        {({ open }) => (
          <>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between h-16">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) =>
                        pageTitle === item.label ? (
                          <Fragment key={item.label}>
                            <Link
                              to={item.route}
                              className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                            >
                              {item.label}
                            </Link>
                          </Fragment>
                        ) : (
                          <Link
                            key={item.label}
                            to={item.route}
                            className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                          >
                            {item.label}
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">
                    <button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <span className="sr-only">Ver notificações</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative z-50">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Menu do usuário</span>
                              <img
                                className="h-8 w-8 rounded-full"
                                src="https://upload-ipet.s3-us-west-2.amazonaws.com/2881552b30d3b0b40d45465efa790b6b-minhafoto.png"
                                alt=""
                              />
                            </Menu.Button>
                          </div>
                          <Transition
                            show={open}
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                          >
                            <Menu.Items
                              static
                              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
                            >
                              {profile.map((item) => (
                                <Menu.Item key={item.label}>
                                  {({ active }) => (
                                    <Link
                                      to={item.route === '/logout' ? '' : item.route}
                                      onClick={item.route === '/logout' ? logout : ''}
                                      className={classNames(
                                        active ? "bg-gray-100" : "",
                                        "block px-4 py-2 text-sm text-gray-700"
                                      )}
                                    >
                                      {item.label}
                                    </Link>
                                  )}
                                </Menu.Item>
                              ))}
                            </Menu.Items>
                          </Transition>
                        </>
                      )}
                    </Menu>
                  </div>
                </div>
                <div className="-mr-2 flex md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">Abrir menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                {navigation.map((item) =>
                  pageTitle === item.label ? (
                    <Fragment key={item.label}>
                      <Link
                        to={item.route}
                        className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
                      >
                        {item.label}
                      </Link>
                    </Fragment>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.route}
                      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                    >
                      {item.label}
                    </Link>
                  )
                )}
              </div>
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div className="flex-shrink-0">
                    <img
                      className="h-10 w-10 rounded-full"
                      src="https://upload-ipet.s3-us-west-2.amazonaws.com/2881552b30d3b0b40d45465efa790b6b-minhafoto.png"
                      alt=""
                    />
                  </div>
                  <div className="ml-3">
                    <div className="text-base font-medium leading-none text-white">
                      {userName || ''}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {userEmail || ''}
                    </div>
                  </div>
                  <button className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <Link
                      key={item.label}
                      to={item.route}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Header;