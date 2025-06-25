"use client"

const Footer = () => {
  const date = new Date();
  return (
    <div className="mt-auto py-10">
      <p className="text-center text-sm md:text-base">copyright {date.getFullYear()} &copy; Ayush Aggarwal 🗿</p>
    </div>
  );
};

export default Footer;
