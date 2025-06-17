"use client";
import { Mail, Pencil, Rocket } from "lucide-react";
import React from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { toast, Toaster } from "sonner";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const ContactForm = () => {
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");

  const sendEmail = (e: any) => {
    e.preventDefault();
    try {
      console.log("hi");
      if (e.target.email.value === "" || e.target.full_name.value === "") {
        if (e.target.email.value === "") {
          setEmailError("Email is required");
          if (e.target.full_name.value === "") {
            setNameError("Fullname is required");
          }
        }
      } else {
        emailjs.sendForm(
          "service_luvg8op",
          "template_sx6i957",
          e.target,
          "1MxDwCSvQF6Leln4f"
        );
        e.target.reset();
        setEmailError("");
        setNameError("");

        toast("Email Sent", {
          description: "We will get back to you shortly",
        });
      }
    } catch (err) {}
  };
  return (
    <div className="w-full flex flex-col items-center mt-32 lg:h-[100vh] px-6 z-30">
      <section className="flex flex-col lg:flex-row items-center justify-center gap-2 lg:w-[75%] mt-10 mb-20">
        <div className="flex flex-col items-start justify-center gap-1">
          <p className="text-3xl lg:text-7xl font-bold lg:w-[50%]">
            Switch. Seamlessly.
          </p>
          <p className="text-xl lg:text-2xl font-semibold lg:w-[55%] mb-8 mt-2">
            Running a business? Switching platforms takes time, but not with
            Framer. Give your team a head start with a high-quality site.
          </p>

          <div className="flex gap-2 items-center">
            <Rocket size={18} />
            <p className="lg:text-lg">
              Tell us what you’re building and share your design
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Rocket size={18} />
            <p className="lg:text-lg">
              Tell us what you’re building and share your design
            </p>
          </div>

          <div className="flex gap-2 items-center">
            <Rocket size={18} />
            <p className="lg:text-lg">
              Tell us what you’re building and share your design
            </p>
          </div>
        </div>

        <form
          onSubmit={sendEmail}
          className="w-full lg:w-[75%] flex flex-col gap-2 rounded-xl shadow-slate-400 shadow-lg px-4 lg:px-10 py-4 pt-6  bg-white text-black mt-6 lg:mt-0"
        >
          <div className="flex flex-col items-start gap-2 mt-12">
            <Pencil size={36} />
            <p className="lg:text-2xl font-medium lg:w-[80%]">
              Brief us Available to new and existing teams on an active Scale
              plan, billed yearly at $200/month.
            </p>
          </div>
          {/* <Mail className="text-blue-500" size={40} /> */}
          <div className="flex flex-col gap-4 items-end mt-4">
            <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-2 lg:gap-4">
              <div className="flex flex-col items-start gap-1 w-full">
                <p>Full Name</p>
                <Input
                  type="text"
                  placeholder="Jacob Johns"
                  name="full_name"
                  className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <p>Email</p>
                <Input
                  type="text"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-2 lg:gap-4">
              <div className="flex flex-col items-start gap-1 w-full">
                <p>Full Name</p>
                <Input
                  type="text"
                  placeholder="Jacob Johns"
                  name="full_name"
                  className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <p>Email</p>
                <Input
                  type="text"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 w-full">
              <p>Message</p>
              <Textarea
                placeholder="Your message"
                name="website"
                className="w-full h-[100px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
              />
            </div>
                 <div className="flex flex-col lg:flex-row items-center lg:justify-between w-full gap-2 lg:gap-4">
              <div className="flex flex-col items-start gap-1 w-full">
                <p>Full Name</p>
                <Input
                  type="text"
                  placeholder="Jacob Johns"
                  name="full_name"
                  className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>

              <div className="flex flex-col items-start gap-1 w-full">
                <p>Email</p>
                <Input
                  type="text"
                  placeholder="johndoe@gmail.com"
                  name="email"
                  className="w-full h-[50px] p-2 placeholder:text-gray-500 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-200 bg-gray-50"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full h-[45px] bg-slate-950 text-white text-base shadow-slate-400 shadow-lg mb-6 font-semibold"
            >
              Request a free quote
            </Button>

            {/* <div className="flex flex-col items-start gap-1">
                              <p>Message</p>
                              <textarea placeholder="Tell us more about your project" name="phone" className="w-full h-[115px] p-2 placeholder:text-slate-50 placeholder:text-base focus-visible:ring-0 border-[1px] border-gray-500 bg-[#242424]" />
                          </div> */}
          </div>
          {/* <p className="text-left text-sm text-gray-500">
            By submitting your contact details, you agree to receive automated
            SMS/MMS messages from Eastline Mechanical. Message & data rates may
            apply.
          </p> */}
        </form>
      </section>
      <Toaster />
    </div>
  );
};

export default ContactForm;
