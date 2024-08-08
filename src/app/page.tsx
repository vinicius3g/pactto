import { Home } from "@/app/home";
import '@/../styles/index.css';
import { Metadata } from "next";

export const metadata: Metadata = {
  description: 'home page',
  title: 'Home',
}

export default function Page() {
  return <Home />
}