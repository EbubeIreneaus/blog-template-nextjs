import React from "react";

function page() {
  return (
    <div>
      <div className="bg-white w-screen h-screen">
        <div className="h-full flex justify-center items-center">
          <div className="max-w-lg w-full bg-slate-50 py-20 px-4 shadow-lg">
            <div className="mb-7 text-center">
                <h2 className="text-3xl uppercase font-semibold">Admin</h2>
            </div>
            <form action="">
              <div className="relative border mb-8">
                <label
                  htmlFor="username"
                  className="absolute top-0 left-0 -mt-3.5 ms-3 bg-white font-semibold"
                >
                  username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="w-full outline-none  py-3.5 px-4"
                  id="username"
                />
              </div>

              <div className="relative border mb-8">
                <label
                  htmlFor="username"
                  className="absolute top-0 left-0 -mt-3.5 ms-3 bg-white font-semibold"
                >
                  password
                </label>
                <input
                  type="password"
                  placeholder="password"
                  className="w-full outline-none  py-3.5 px-4"
                  id="username"
                />
              </div>

              <div>
                <button type="submit" className="px-14 py-3 border rounded-sm hover:ring-2">Authorize</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
