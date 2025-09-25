import Hero from "@/components/main/Hero";
import Image from "next/image";
import Skills from "@/components/main/Skills";
import Encryption from "@/components/main/Encryption";
import Project from "@/components/main/Project";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col">
        <Hero />
        <Skills/>
        <Encryption/>
        <Project />
        
      </div>
    </main>
  );
}
