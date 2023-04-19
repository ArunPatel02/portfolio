import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import HomePage from "../components/HomePage";
import styles from "../styles/Home.module.css";
import AppContext from "./AppContext";

export default function Home() {
  return (
    <div className="p-0 m-0 bg-[#ffff]">
      <HomePage />
    </div>
  );
}
