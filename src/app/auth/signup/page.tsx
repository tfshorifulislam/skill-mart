"use client";

import { InputFieldgroup } from "@/components/shared/SignupForm";
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
                        © 2026 SkillMart Professional Marketplace. All rights reserved.
                    </div>
                </section>

                {/* Right Side */}
                <div className="flex flex-col items-center justify-center w-11/12 mx-auto md:w-fit md:px-24">
                    <div>
                        <h1 className="font-semibold text-3xl leading-10 text-[#191c1d] mb-2">
                            Create your account
                        </h1>
                        <p className="text-sm leading-6 text-[#464555] mb-6">
                            Join thousands of learners growing their skills with
                            SkillMart.
                        </p>
                    </div>

                    <InputFieldgroup />

                </div>
            </div>
        </main>
    );
};

export default SignUpPage