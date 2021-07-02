import { Fragment, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { logoutAction } from '../../store/actions/auth';
import Logo from '../../assets/img/logo_3.png';

const navigation = [
  { label: "Home", route: "/", profile: null },
  { label: "Serviços", route: "/product", profile: null },
  { label: "Usuários", route: "/userlist", profile: 'admin' },
  { label: "Fornecedores", route: "/supplierlist", profile: 'admin' },
  { label: "Categorias", route: "/category", profile: 'admin' },
  { label: "Produtos", route: "/productlist", profile: 'supplier' },
];
const profile = [
  { label: "Sign out", route: "/logout" },
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

  const userName = useSelector((state) => state.auth.user.nome);
  const userEmail = useSelector((state) => state.auth.user.email);
  const userType = useSelector((state) => state.auth.user.userType);

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
                      className="h-8 w-24"
                      src={Logo}
                      alt="Workflow"
                    />
                  </div>
                  <div className="hidden md:block">
                    <div className="ml-10 flex items-baseline space-x-4">
                      {navigation.map((item) =>
                        (item.profile === userType || item.profile === null) ? (
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
                        ) : ('')
                      )}
                    </div>
                  </div>
                </div>
                <div className="hidden md:block">
                  <div className="ml-4 flex items-center md:ml-6">

                    {/* Profile dropdown */}
                    { userEmail ? (
                    <Menu as="div" className="ml-3 relative z-50">
                      {({ open }) => (
                        <>
                          <div>
                            <Menu.Button className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                              <span className="sr-only">Menu do usuário</span>
                              { userName }
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
                                      key={item.label}
                                      to={item.route === '/logout' ? '' : item.route}
                                      onClick={item.route === '/logout' ? logout : null}
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
                    ) : '' }
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
                  (item.profile === userType || item.profile === null) ? (
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
                  ) : ('')
                )}
              </div>
              { userEmail ? (
              <div className="pt-4 pb-3 border-t border-gray-700">
                <div className="flex items-center px-5">
                  <div>
                    <div className="text-base font-medium leading-none text-white">
                      {userName || ''}
                    </div>
                    <div className="text-sm font-medium leading-none text-gray-400">
                      {userEmail || ''}
                    </div>
                  </div>
                </div>
                <div className="mt-3 px-2 space-y-1">
                  {profile.map((item) => (
                    <Link
                      key={item.label}
                      to={item.route === '/logout' ? '' : item.route}
                      onClick={item.route === '/logout' ? logout : null}
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              ) : '' }
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}

export default Header;