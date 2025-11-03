import ClientsSay from "@/components/home/ClientsSay";
import Hero from "@/components/home/Hero";
import LastingImpression from "@/components/home/LastingImpression";
import Qualification from "@/components/home/Qualification";
import SelectedWork from "@/components/home/SelectedWork";
import TheProcess from "@/components/home/TheProcess";
import TimeLine from "@/components/home/TimeLine";

export default function Home() {
  return (
    <div className="">
      <Hero/>
      <Qualification/>
      <SelectedWork/>
      <TheProcess/>
      <TimeLine/>
      <ClientsSay/>
      <LastingImpression/>
    </div>
  );
}
