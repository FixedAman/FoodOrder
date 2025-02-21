const Contact = () => {
  return (
    <>
      <section className="flex flex-col md:flex-row items-center justify-between  p-8 rounded-lg ">
      {/* Image Section */}
      <div className="md:w-1/2">
        <img
          src="/images/contact_us.png"
          alt="Delicious Food"
          className="rounded-lg shadow-md w-full h-100 object-cover"
        />
      </div>

      {/* Text & Button Section */}
      <div className="md:w-1/2 text-center md:text-left mt-6 md:mt-0 md:pl-8 flex align-middle ">
      
      <form className="form ">
      <h1 className="text-3xl font-bold text-amber-600 mb-7">Contact Us</h1>
        <div className="flex flex-col mb-4">
            <label htmlFor="username" className="text-amber-700 font-bold">User Name</label>
            <input type="text" id="username" name="username" className="border text-amber-700 w-70 h-10 rounded-sm bg-amber-100" required autoComplete="off" />
        </div>
        <div className="flex flex-col mb-4">
            <label htmlFor="email" className="text-amber-700 font-bold">Email</label>
            <input type="email" id="email" name="email" className="border text-amber-700 w-70 h-10 rounded-sm bg-amber-100" required autoComplete="off" />
        </div>
        <div className="flex flex-col mb-4">
            <label htmlFor="message" className="text-amber-700 font-bold">Message</label>
            <textarea type="text" id="message" name="message" className="border text-amber-700 w-70 rounded-sm bg-amber-100" required autoComplete="off" rows="4" />
        </div>   
        <button className="mt-4 bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-lg shadow-md transition cursor-pointer">
          Submit
        </button>
    </form>
        
      </div>
    </section>
    </>
  );
};
export default Contact;
