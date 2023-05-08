import { useLoaderData } from "react-router-dom";
import BestMenu from "../Components/Home/BestMenu";
import Chef from "../Components/Home/Chef";
import Hero from "../Components/Home/Hero";
import { getBestMenu } from "../api";

export function loader() {
  return getBestMenu();
}

export default function Home() {
  const bestMenu = useLoaderData();
  return (
    <>
      <Hero />
      <BestMenu bestMenu={bestMenu} />
      <Chef />
    </>
  );
}
