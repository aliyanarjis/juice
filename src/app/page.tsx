import Image from "next/image";

import '@fortawesome/fontawesome-svg-core/styles.css'
import Hero from "./component/hero/hero";
import About from "./component/about/about";
import Service from "./component/services/service";
import Blog from "./component/blog/blog";
import Book from "./component/bookus/bookus";
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
