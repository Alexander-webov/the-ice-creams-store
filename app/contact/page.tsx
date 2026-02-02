import { Berkshire_Swash } from "next/font/google";
import Container from "../components/Container";
import TitleSection from "../components/ui/TitleSection";

//Images
import iconLocation from "@/public/icons/contact-icon-1.png";
import iconPhone from "@/public/icons/contact-icon-2.png";
import iconEmail from "@/public/icons/contact-icon-3.png";
import Image from "next/image";
import { createContactFormData } from "../utils/actions";

const berkshireSwash = Berkshire_Swash({
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});
function ContactUs() {
  return (
    <main className="mb-40 ">
      <TitleSection titlePage="Contact US" />
      <div>
        <Container>
          <div className="text-center">
            <h2 className={`${berkshireSwash.className} pt-20 pb-8  text-6xl`}>
              Get in <span className="text-[#F83D8E]">Touch</span> With Us
            </h2>
            <p className="text-gray-500 text-xl mt-5">
              Reach out and connect with us today for any inquiries or
              assistance!
            </p>
          </div>
          <div className="flex justify-between mt-20 mr-16 ">
            <div className=" max-w-[350px] w-full ">
              <div className="flex items-center gap-5 mb-5 py-9 px-5  rounded-xl shadow-xl">
                <Image
                  src={iconLocation}
                  alt="Our Location"
                  width={75}
                  height={75}
                />
                <div className="">
                  <h4 className="font-bold text-2xl">Our Location</h4>
                  <p className="text-gray-500">
                    121 King Street, Melbourne Victoria 3000 Australia
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5 py-9 px-5  rounded-xl shadow-xl">
                <Image
                  src={iconPhone}
                  alt="Our Location"
                  width={75}
                  height={75}
                />
                <div className="">
                  <h4 className="font-bold text-2xl">Phone Number</h4>
                  <p className="text-gray-500">(+1 929-376-6284)</p>
                  <p className="text-gray-500">(+800 2345 6789)</p>
                </div>
              </div>
              <div className="flex items-center gap-5 mb-5 py-9 px-5  rounded-xl shadow-xl">
                <Image
                  src={iconEmail}
                  alt="Our Location"
                  width={75}
                  height={75}
                />
                <div className="">
                  <h4 className="font-bold text-2xl">Email us at</h4>
                  <p className="text-gray-500">info@icedelights.com</p>
                  <p className="text-gray-500">icedelights@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="ml-20 flex-1">
              <form
                action={createContactFormData}
                className="flex flex-wrap justify-between gap-4"
              >
                <div className="flex flex-col gap-2 w-[47%]">
                  <label className="text-gray-500" htmlFor="firstName">
                    First Name
                  </label>
                  <input
                    className="border rounded-2xl p-3 border-gray-400"
                    type="text"
                    name="firstName"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[47%]">
                  <label className="text-gray-500" htmlFor="lastName">
                    Last Name
                  </label>
                  <input
                    className="border rounded-2xl p-3 border-gray-400"
                    name="lastName"
                    type="text"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[47%]">
                  <label className="text-gray-500" htmlFor="email">
                    Email address
                  </label>
                  <input
                    className="border rounded-2xl p-3 border-gray-400"
                    type="text"
                    name="email"
                  />
                </div>
                <div className="flex flex-col gap-2 w-[47%]">
                  <label className="text-gray-500" htmlFor="phone">
                    Phone
                  </label>
                  <input
                    className="border rounded-2xl p-3 border-gray-400"
                    type="text"
                    name="phone"
                  />
                </div>

                <div className="w-full">
                  <label className="text-gray-500" htmlFor="message">
                    Message
                  </label>
                  <textarea
                    className="w-full border rounded-2xl p-3 border-gray-400"
                    rows={7}
                    name="message"
                    id="message"
                  ></textarea>
                </div>
                <button
                  className="bg-[#F83D8E] py-5 px-15 rounded-2xl cursor-pointer text-white"
                  type="submit"
                >
                  Submit Now
                </button>
              </form>
            </div>
          </div>
        </Container>
      </div>
    </main>
  );
}

export default ContactUs;
