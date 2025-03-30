import { Link } from "next-view-transitions";
import Image from "next/image";

const Header = () => {
  return (
    <section className="shadow-xl items-center flex mt-12 max-w-[70%] mx-auto rounded-3xl p-4 justify-between">
      <div className="flex gap-2 items-center">
        
        <Image src="/assets/icons/mkglogo.png" alt="Image de l'entreprise MKGBOX" width={70} height={0} className=""></Image>
        <h1 className="text-primary font-bold text-xl">MKGDORK</h1>
      </div>

      <div className="">
        <Link href="" className="bg-primary p-4 font-bold uppercase text-white rounded-lg">Commencer</Link>
      </div>
    </section>
  );
};

export { Header };
