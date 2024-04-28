import Image from "next/image";

import '@fortawesome/fontawesome-svg-core/styles.css'
import Hero from "./component/hero/hero";
import About from "./about/page";
import Service from "./services/page";
import Blog from "./blog/page";
import Book from "./bookus/page";
import Item from "./component/listitem/item";

export default function Home() {
  return (
    <>
    <Hero />
    <About />
    <Service />
    <Book />
    <Item />
    <Blog />
    </>
  );
}
