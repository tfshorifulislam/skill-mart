import { InputForm } from "@/components/shared/inputForm";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="h-screen grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto">
      <div className="hidden md:block bg-[#3525CD] p-16 ">
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
            className="absolute -bottom-20" />

        </div>
      </div>

      <div className="bg-white md:py-65.75 md:px-25 w-11/12 mx-auto md:w-full flex flex-col items-center justify-center md:items-start">

        <h1 className="font-semibold text-3xl leading-10 text-[#191c1d] mb-2">
          Welcome back
        </h1>

        <p className="text-sm leading-6 text-[#464555] mb-6">
          Sign in to continue your learning journey.
        </p>

        <InputForm />

      </div>
    </section>
  );
};

export default LoginPage;