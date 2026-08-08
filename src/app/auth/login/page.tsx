import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="h-screen grid grid-cols-2">
      <div className="bg-[#3525CD] p-16 ">
        <span>
          <Image
            src={'/logo2.png'}
            width={200}
            height={200}
            alt="logo"
          />
        </span>

        <div className="relative flex flex-col justify-center items-center h-full">
          <h1 className="relative font-bold text-5xl text-white">
            Learn skills that <br />
            move you forward.
          </h1>

          <Image
          src={'/image.png'}
          width={512}
          height={382}
          alt="avatar"
          className="absolute -bottom-20"/>

        </div>
      </div>

      <div>

      </div>
    </section>
  );
};

export default LoginPage;