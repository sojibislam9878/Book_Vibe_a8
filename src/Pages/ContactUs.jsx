const ContactUs = () => {
  return (
    <div className=" flex flex-col-reverse lg:flex lg:flex-row justify-between mt-20">
      <div className="lg:w-1/2 border bg-black text-white p-4">
        <h1 className="text-3xl font-bold text-center">Contact Information</h1>
        <p className="text-center">We are available 24/7/365</p>
        <div className="mt-6">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">near_me</span>
            <h3 className="text-xl font-medium">Head Office</h3>
          </div>
          <p className="border-t mt-2 pt-2">
            Beckam Street, Clifornia -19 United States Of America
          </p>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">phone_callback</span>
            <h3 className="text-xl font-medium">Call Us</h3>
          </div>
          <p className="border-t mt-2 pt-2">Mon-Fri: 10am - 8pm</p>
          <p>@ +123 124567890</p>
          <p>@ +123 124567890</p>
        </div>
        <div className="mt-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined">mail</span>
            <h3 className="text-xl font-medium">Write Us</h3>
          </div>
          <p className="border-t mt-2 pt-2">help@bookvibe.suport</p>
          <p className="">sales@bookvibe.suport</p>
        </div>
      </div>

      <div className="border lg:w-1/2 p-4">
        <div className="text-center">
        <h1 className="text-3xl font-bold">Have A Question?</h1>
        <p className="font-semibold opacity-80">We are available 24/7/365</p>
        </div>
        <div className="flex gap-4">
            <input type="text" className="border-b pb-8 mt-2  w-full" placeholder="First Name"/>
            <input type="text" className="border-b pb-8 mt-2  w-full" placeholder="Last Name"/>
        </div>
        <div className="lg:flex gap-4">
            <input type="text" className="border-b pb-8 mt-2 w-full" placeholder="Your Email"/>
            <input type="text" className="border-b pb-8 mt-2 w-full" placeholder="Phone"/>
        </div>
        <textarea className="border w-full mt-3 h-28 p-2" placeholder="Your messages"></textarea>
        <button className="btn bg-green-600 text-white"> Submit</button>
      </div>
    </div>
  );
};

export default ContactUs;
