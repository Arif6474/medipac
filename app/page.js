import ContactUs from "./(HomePage)/ContactUs/ContactUs";
import Banner from "./(HomePage)/Banner/Banner";
import OurProducts from "./(HomePage)/OurProducts/OurProducts";
import OurClients from "./(HomePage)/OurClients/OurClients";
import OurSolutions from "./(HomePage)/OurSolutions/OurSolutions";
import AboutUs from "./(HomePage)/AboutUs/AboutUs";
import OurNews from "./(HomePage)/OurNews/OurNews";
import Blogs from "./(HomePage)/Blogs/Blogs";

export default function Home() {
  return (
    <main>
      <Banner />
      <OurSolutions />
      <AboutUs />
      <OurProducts />
      <OurNews/>
      <OurClients />
      <Blogs/>
      <ContactUs />
    </main>
  );
}
