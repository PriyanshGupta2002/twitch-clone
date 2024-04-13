import { Fragment } from "react";
import Navbar from "./_components/navbar";
import Sidebar from "./_components/sidebar";
import Container from "./_components/container";

const BrowseLayout = ({ children }: { readonly children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex h-full pt-20">
        <Sidebar />
        <Container>{children}</Container>
      </div>
    </Fragment>
  );
};

export default BrowseLayout;
