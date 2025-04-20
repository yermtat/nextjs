import banner from "./banner.png";
import pizza from "./pizza.png";
import fries from "./fries.png";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-black text-white py-12 md:py-20 flex flex-col md:flex-row items-center justify-between px-6 md:px-12 lg:px-20">
      {/* Левая часть с текстом и кнопками */}
      <div className="md:w-1/2 space-y-6 text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
          The Fastest <br />
          Pizza <span className="text-orange-400">⚡</span> Delivery
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-300">
          We will deliver juicy pizza for your family in 30 minutes, if the
          courier is late –{" "}
          <span className="font-bold text-white">pizza is free!</span>
        </p>

        <div className="flex flex-col items-center md:items-start">
          <p className="mb-2 text-lg">Cooking process:</p>
          <div className="w-64 h-36 bg-orange-500 rounded-lg shadow-lg overflow-hidden">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Cooking Process Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-full text-lg font-semibold w-full sm:w-auto">
            To order
          </button>
          <button className="border-2 border-orange-500 text-orange-500 px-6 py-3 rounded-full text-lg font-semibold w-full sm:w-auto">
            Pizza-Menu
          </button>
        </div>
      </div>

      <div className="p-5 relative">
        <div className="absolute w-1/2 z-10 -top-[82px] -right-[35px]">
          <Image
            src={pizza}
            alt="Pizza slice"
            width={200}
            height={200}
            className="w-full"
            priority
          />
        </div>
        <div className="relative z-0">
          <Image
            src={banner}
            alt="Pizza"
            width={500}
            height={500}
            className="w-full rounded-[46px] z-10 relative"
            priority
          />
        </div>
        <div className="absolute w-1/2 z-10 -bottom-[50px] -left-[100px]">
          <Image
            src={fries}
            alt="Fries"
            width={200}
            height={200}
            className="w-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}
