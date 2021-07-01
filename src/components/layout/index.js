import Header from "./header";

const Layout = (props) => {
  document.title = props.page;
  return (
    <>
      <Header title={props.page} />
      <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 flex-1">
        {props.children}
      </div>
    </>
  );
};

export default Layout;