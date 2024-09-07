import Button from "../Button/Button";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-[600px]">
      <div className="container grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl text-center">
            Become The Hero Of Your Own Story
          </h1>
          <p className="text-2x text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta
            delectus expedita dolore illo porro magnam quasi sequi saepe
            voluptas? Consequuntur maiores illum omnis aliquam. Cumque dolore
            perspiciatis illum distinctio neque?
          </p>
          <form className="flex items-center justify-center">
            <input
              type="text"
              id="email"
              className="bg-slate-100 p-4 w-96 outline-none"
              placeholder="Enter Your Email Id"
            />
            <Button
              label="Subscribe"
              type="submit"
              style="bg-primary text-white p-4 w-32"
            />
          </form>
        </div>
        <div className="flex items-center justify-center gap-10">
          <div className="w-10 bg-secondary h-52  sec-2"></div>
          <div className="w-10 bg-primary h-48  sec-4"></div>
          <div className="w-10 bg-secondary h-48  sec-6"></div>
          <div className="w-10 bg-primary h-64  sec-8"></div>
          <div className="w-10 bg-secondary  h-64 sec-10"></div>
          <div className="w-10 bg-primary h-64  sec-12"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
