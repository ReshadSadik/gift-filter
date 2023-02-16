import Head from "next/head";
import { Inter } from "@next/font/google";
import FilterSection from "@/components/filter-section/FilterSection";
const inter = Inter({ subsets: ["latin"] });
export default function Home() {
  return (
    <>
      <Head>
        <title>Gift Filter</title>
        <meta
          name="description"
          content="This is a page for finding gift items"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FilterSection />
    </>
  );
}
