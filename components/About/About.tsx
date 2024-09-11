import Image from "next/image";

const About = () => {
  return (
    <div className="container">
      <div className=" flex flex-col items-center lg:flex-row md:flex-row sm:mt-16">
        <div className="flex items-center justify-center gap-10 mx-4 flex-col lg:w-1/2 md:w-1/2">
          <h2 className="lg:text-4xl text-2xl text-center font-medium">
            A podcast for makers and entrepreneurs
          </h2>
          <p className="lg:text-xl text-sm text-center">
            Apparently we had reached a great height in the atmosphere, for the
            sky was a dead black, and the stars had ceased to twinkle.
          </p>
        </div>
        <div className=" bg-primary lg:w-1/2 md:w-1/2">
          <Image src={"/images/podcast.jpg"} alt="" width={600} height={600} />
        </div>
      </div>
      <div className=" flex flex-col items-center lg:flex-row md:flex-row sm:mt-16">
        <div className=" bg-primary lg:w-1/2 md:w-1/2">
          <Image
            src={"/images/podcast-2.jpg"}
            alt=""
            width={600}
            height={600}
          />
        </div>
        <div className="flex items-center justify-center gap-10 mx-4 flex-col lg:w-1/2 md:w-1/2">
          <h2 className="lg:text-4xl text-2xl text-center font-medium">
            My origins on YouTube in 2008
          </h2>
          <p className="lg:text-xl text-sm text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mus cras
            lacus tellus morbi viverra suspendisse ornare. Sit volutpat,
            volutpat ut netus malesuada enim penatibus non aliquet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
