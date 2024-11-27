import React, { useState } from "react";
import NativeSelect from "@mui/material/NativeSelect";

function ContactForm() {
  // const [file, setFile] = useState(null);
  const [services, setServices] = useState(""); 

  const handleChangeService = (event) => {
    setServices(event.target.value);
  };

  // const handleFileChange = (ev) => {
  //   const file = ev.target.files[0];
  //   if (file) {
  //     setFile(file); 
  //     console.log(file); 
  //   }
  // };

  return (
    <div className="bg-white rounded-md w-full p-7">
      <div className="text-lg font-[15px]">Contact us</div>
      <div className="xl:p-6 lg:ml-1 ml-1 xl:ml-10">
        <form>
          <div className="lg:flex md:flex gap-7 mt-5">
            <label className="text-[13px] md:text-right lg:text-right w-28 mt-2 font-medium">
              Subject
            </label>
            <NativeSelect
              id="demo-customized-select-native"
              value={services}
              onChange={handleChangeService}
              className="border h-10 rounded-md xl:w-[380px] md:w-[380px] sm:w-[250px] w-[250px] lg:w-[380px] p-2"
              sx={{ fontSize: 14 }}
            >
              <option value={1}>Customer service</option>
              <option className="text-sm" value={2}>
                Webmaster
              </option>
            </NativeSelect>
          </div>

          <div className="lg:flex md:flex gap-7 mt-4">
            <label className="text-[13px] text-right mt-2 font-medium w-28">
              Email address
            </label>
            <input
              type="email"
              placeholder="your@gmail.com"
              className="border h-10 rounded-md p-2 placeholder:text-[#7b7b7b] placeholder:text-xs text-sm md:w-[380px] w-[250px] lg:w-[380px]"
            />
          </div>

          <div className="lg:flex md:flex sm:flex gap-7 items-center mt-4">
            <label className="text-[13px] text-right w-28 font-medium">
              Attachment
            </label>

            {/* <label htmlFor="attachment" className="flex cursor-pointer">
              <div className="border rounded-l-md h-10 bg-gray-100 xl:w-[260px] sm:w-[170px] w-[170px] md:w-[200px] lg:w-[245px]">
                <div className="text-sm text-start mt-2 px-2">
                  {file}
                </div>
              </div>
              <div className="lg:px-6 xl:px-6 py-2 text-sm rounded-r-md bg-[#dc2e3a] text-white">
                Choose File
              </div>
              <input
                id="attachment"
                onChange={handleFileChange}
                name="fileName"
                type="file"
                className="hidden"
              />
            </label> */}

            <div className="text-[13px] text-[#7b7b7b]"> optional</div>
          </div>

          <div className="lg:flex md:flex gap-7 mt-4">
            <label className="text-[13px] text-right mt-2 font-medium w-28">
              Message
            </label>
            <textarea
              rows="4"
              cols="60"
              className="border placeholder:text-[#7b7b7b] placeholder:text-xs rounded-md text-sm p-2 md:w-[380px] w-[250px] lg:w-[380px]"
              placeholder="How can we help?"
            />
          </div>

          <button
            type="submit"
            className="bg-[#dc2e3a] lg:ml-auto md:ml-auto mt-5 text-white text-sm h-11 w-24 rounded-sm"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
