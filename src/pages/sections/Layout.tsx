import { Fragment, ReactNode, useContext } from "react";
import { ComponentRefs } from "../../App";
import portfolioContext from "../../store/portfolioStore";

// importing supporting components
import Nav from "./Nav";
import Footer from "./Footer";
import BacktoTop from "../../components/BacktoTop";

type LayoutProps = {
  children: ReactNode;
  componentsRef: ComponentRefs;
};

const Layout = ({ children, componentsRef }: LayoutProps) => {
  const Contx = useContext(portfolioContext);
  return (
    <Fragment>
      <Nav componentsRef={componentsRef} />
      {children}
      <Footer />
      {Contx.scrollPosition > window.innerHeight / 2 && <BacktoTop />}
    </Fragment>
  );
};

export default Layout;
