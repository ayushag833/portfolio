import { Box } from "@/components/ui/moving-border";
import { AiOutlineMail } from "react-icons/ai";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { ImLocation } from "react-icons/im";

const Contact = () => {
  return (
    <div>
      <Box
        borderRadius="1rem"
        className="bg-white dark:bg-dark-color-2 text-black dark:text-white border-neutral-200 dark:border-slate-800 p-10 flex flex-col"
        containerClassName="m-auto w-[750px] max-w-[90%] h-auto md:mt-10"
      >
        <h1 className="text-2xl md:text-4xl font-bold">Get in touch with Me</h1>
        <div className="mt-10 text-lg">
          <ul>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <AiOutlineMail size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Email:</span>{" "}
                <a
                  href="mailto:ayushaggarwal600@gmail.com"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  ayushaggarwal600@gmail.com
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaTwitter size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Twitter:</span>{" "}
                <a
                  href="https://x.com/AyushAg600"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @AyushAg600
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <FaInstagram size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">DM on Instagram:</span>{" "}
                <a
                  href="https://www.instagram.com/_ayushaggarwal__"
                  target="_blank"
                  className="text-blue-700 dark:text-blue-200"
                >
                  @_ayushaggarwal__
                </a>
              </div>
            </li>
            <li className="mt-6 flex items-center gap-3">
              <div>
                <ImLocation size="1.5rem" />
              </div>
              <div>
                <span className="font-semibold">Address:</span> Sector - 62, Noida, PinCode - 201309, Uttar Pradesh, India
              </div>
            </li>
          </ul>
        </div>
      </Box>
    </div>
  );
};

export default Contact;
