import React from "react";
import deved from "../../public/image1.png";
import pic from "../../public/pic.png";
import web1 from "../../public/Screenshot (4).png"
import web2 from "../../public/Screenshot (5).png"
import web3 from "../../public/Screenshot (6).png"
import web4 from "../../public/Screenshot (7).png"
import web5 from "../../public/Screenshot (8).png"
import web6 from "../../public/Screenshot (9).png"
import { BsFillMoonStarsFill } from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
} from "react-icons/ai";
import Image from "next/image";
import SignupForm from "./form";
import { ContactUs } from "./footer";
const Home_1 = () => {
  return (
    <>
      <section className="min-h-screen px-10 ">
        <nav className="py-10 mb-12 flex justify-between">
          <div className="flex gap-2 justify-center items-center">
            <div className="relative w-14 h-14 border-2 border-black rounded-full flex items-center justify-center overflow-hidden mr-2">
              <Image src={pic} objectFit="cover" layout="fill" />
            </div>

            <h1 className="text-xl font-Jost">@Jatin9071</h1>
          </div>

          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
            </li>
            <li>
              <a
                href="#"
                className="bg-gradient-to-r  from-cyan-500 to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <main className="flex justify-center items-center">
          <div className="xl:flex gap-10">
            <div className="text-center p-10 flex flex-col items-center xl:text-left xl:items-start">
              <h2 className="text-5xl py-2 text-teal-600 font-medium">
                Jatin Kumar
              </h2>
              <h3 className="text-2xl py-2">Developer and designer.</h3>
              <p className="text-md py-5 leading-8 text-gray-800 max-w-lg">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Itaque, officiis. Facere harum eos distinctio error architecto
                reprehenderit consequuntur necessitatibus, impedit deleniti quo
                nemo laudantium aliquam consectetur perspiciatis maxime dolore
                sed.
              </p>

              <div className="text-5xl flex justify-center mt-10 gap-16 py-1 text-gray-600">
                <AiFillTwitterCircle />
                <AiFillLinkedin />
                <AiFillYoutube />
              </div>
            </div>

            <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mt-20 mx-auto overflow-hidden">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </main>
      </section>
      <section>
        <div className="p-20 flex flex-col items-center">
          <h3 className="text-3xl py-1">Services I offer</h3>
          <p className="text-md py-2 leading-8 text-gray-800 max-w-md text-center xl:max-w-2xl">
            Since the beginning of my journey as a freelancer developer, {"I've"}
            done remote work for
            <span className="text-teal-500">Jatin kumar </span> is my name
            Worked fro Google ,Amazon and even{" "}
            <span className="text-teal-500 leading-8 py-2 ">Dark Web</span>
          </p>
        </div>
        <div className=" flex flex-row mx-auto flex-wrap gap-5 justify-center items-center p-10">
          <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-sm flex flex-col items-center">
            <Image src={deved} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              {" "}
              Creating elegant designs suited for your needs following core
              design theory{" "}
            </p>
            <h4 className="py-4 text-teal-600">Design tools used</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-sm flex flex-col items-center">
            <Image src={deved} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              {" "}
              Creating elegant designs suited for your needs following core
              design theory{" "}
            </p>
            <h4 className="py-4 text-teal-600">Design tools used</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-sm flex flex-col items-center">
            <Image src={deved} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              {" "}
              Creating elegant designs suited for your needs following core
              design theory{" "}
            </p>
            <h4 className="py-4 text-teal-600">Design tools used</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <div className="text-center shadow-lg p-10 rounded-xl my-10 max-w-sm flex flex-col items-center">
            <Image src={deved} width={100} height={100} />
            <h3 className="text-lg font-medium pt-8 pb-2">Beautiful Designs</h3>
            <p className="py-2">
              {" "}
              Creating elegant designs suited for your needs following core
              design theory{" "}
            </p>
            <h4 className="py-4 text-teal-600">Design tools used</h4>
            <p className="text-gray-800 py-1">Photoshop</p>
            <p className="text-gray-800 py-1">Illustrator</p>
            <p className="text-gray-800 py-1">Figma</p>
          </div>
          <section className="py-20 lg:px-20">
          <div>
            <h3 className="text-3xl py-1 dark:text-gray-800 ">Portofolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-800">
              Since the beginning of my journey as a freelance designer and
              developer, {"I've"} done remote work for
              <span className="text-teal-500"> agencies </span>
              consulted for <span className="text-teal-500">startups </span>
              and collaborated with talanted people to create digital products
              for both business and consumer use.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-800">
              I offer from a wide range of services, including brand design,
              programming and teaching.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1 ">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web1}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web2}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web3}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web4}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web5}
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={"100%"}
                height={"100%"}
                layout="responsive"
                src={web6}
              />
            </div>
          </div>
        </section>
        </div>
        <SignupForm/>
       
      </section>
    </>
  );
};

export default Home_1;
