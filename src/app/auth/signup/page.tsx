"use client";

import Image from "next/image";

const SignUpPage = () => {

    return (
        <main className="min-h-screen bg-[#f8f9fa] text-[#191c1d] flex antialiased">

            <div className="mx-auto flex w-full max-w-7xl flex-1">

                {/* Left Side */}
                <section className="relative hidden w-1/2 flex-col justify-between overflow-hidden bg-[#3525cd] p-8 text-white lg:flex">
                    {/* Decorative Elements */}
                    <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-[#c3c0ff]/20 blur-3xl" />

                    <div className="absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />

                    {/* Logo */}
                    <div className="relative z-10 flex items-center gap-2">
                        <span>
                            <Image
                                src={'/logo2.png'}
                                width={120}
                                height={150}
                                alt="logo"
                            />
                        </span>
                    </div>

                    {/* Hero Content */}
                    <div className="relative z-10 flex flex-1 flex-col justify-center">
                        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight">
                            Start Your
                            <br />
                            Learning Journey
                        </h1>

                        <p className="max-w-md text-lg leading-7 text-white/90">
                            Create your free SkillMart account and discover
                            courses designed to help you grow.
                        </p>
                    </div>

                    {/* Copyright */}
                    <div className="relative z-10 text-sm text-white/70">
                        © 2024 SkillMart Professional Marketplace. All rights reserved.
                    </div>
                </section>

                {/* Right Side */}



            </div>
        </main>
    );
};

export default SignUpPage