import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

const RootLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
