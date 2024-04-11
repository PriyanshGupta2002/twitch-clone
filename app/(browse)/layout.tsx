import { Fragment } from "react";
import Navbar from "./_components/navbar";

const BrowseLayout = ({ children }: { readonly children: React.ReactNode }) => {
  return (
    <Fragment>
      <Navbar />
      <div className="flex h-full pt-20">{children}</div>
    </Fragment>
  );
};

export default BrowseLayout;
