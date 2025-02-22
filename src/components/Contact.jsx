import { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      `Name: ${data.name}  ; Email:${data.email} ; message :${data.message}`
    );
    setData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between  p-8 rounded-3xl bg-gradient-to-r from-red-400 to-orange-100  ">
        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src="/images/contact_us.png"
            alt="Delicious Food"
            className="rounded-3xl shadow-md w-full h-100 object-cover"
          />
        </div>

        {/* Text & Button Section */}
        <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8 flex align-middle justify-center">
          <form className="form  " onSubmit={handleSubmit}>
            <h1 className="text-3xl font-bold text-black mb-7 font-serif">
              <span className="text-red-600">Contact</span> Us
            </h1>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="username"
                className="text-amber-700 font-bold font-serif"
              >
                User Name
              </label>
              <input
                type="text"
                id="username"
                name="name"
                className="border text-amber-700 w-70 h-10 rounded-sm bg-amber-100"
                required
                autoComplete="off"
                value={data.name}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="email"
                className="text-amber-700 font-bold  font-serif"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="border text-amber-700 w-70 h-10 rounded-sm bg-amber-100"
                required
                autoComplete="off"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col mb-4">
              <label
                htmlFor="message"
                className="text-amber-700 font-bold font-serif"
              >
                Message
              </label>
              <textarea
                type="text"
                id="message"
                name="message"
                className="border text-amber-700 w-70 rounded-sm bg-amber-100"
                required
                autoComplete="off"
                rows="4"
                value={data.message}
                onChange={handleChange}
              />
            </div>
            <button className="mt-4 bg-red-500 hover:bg-yellow-400 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
              Submit
            </button>
          </form>
        </div>
      </section>
    </>
  );
};
export default Contact;
