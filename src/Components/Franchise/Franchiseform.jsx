import React from "react";

const statesOfIndia = [
  "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh",
  "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka",
  "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya",
  "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim",
  "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand",
  "West Bengal", "Andaman and Nicobar Islands", "Chandigarh",
  "Dadra and Nagar Haveli and Daman and Diu", "Delhi", "Jammu and Kashmir",
  "Ladakh", "Lakshadweep", "Puducherry"
];

const FranchiseForm = () => {
  return (
    <div className="min-h-screen bg-white px-4 py-8">
      <form className="w-full max-w-5xl mx-auto text-gray-800">
        {/* PERSONAL DETAILS */}
        <h2 className="text-xl font-bold mb-4 text-center">
          <span className="text-[#b98a30]">PERSONAL</span> DETAILS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <input type="text" placeholder="Name" className="input-style" />
          <input type="text" placeholder="Mobile Number" className="input-style" />
          <input type="email" placeholder="Mail Id" className="input-style" />

          <select className="input-style">
            <option>Select State</option>
            {statesOfIndia.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>

          <input type="text" placeholder="Preferred Location" className="input-style" />
          <input
            type="text"
            placeholder="Present Location"
            className="input-style md:col-span-3"
          />

          <select className="input-style">
            <option>Select Id Type</option>
            <option value="Aadhaar">Aadhaar</option>
            <option value="PAN">PAN</option>
            <option value="Passport">Passport</option>
            <option value="Voter ID">Voter ID</option>
            <option value="Driving License">Driving License</option>
          </select>
          <input type="text" placeholder="Id Number" className="input-style" />
        </div>

        {/* FINANCIAL DETAILS */}
        <h2 className="text-xl font-bold mb-4 mt-8 text-center">
          <span className="text-[#b98a30]">FINANCIAL</span> DETAILS
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <input type="text" placeholder="Nature of Current Business" className="input-style" />
          <input type="text" placeholder="Yearly Turnover (in Cor)" className="input-style" />
        </div>

        {/* Franchise Type */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Franchise Type</label>
          <div className="flex flex-wrap gap-4">
            {["₹ 10 Crores", "₹ 5 Crores", "₹ 50 Lakhs", "₹ 25 Lakhs"].map((val, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input
                  type="radio"
                  name="franchiseType"
                  value={val}
                  defaultChecked={index === 0}
                />
                <span>{val}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Mode of Investment */}
        <div className="mb-6">
          <label className="block font-medium mb-2">Mode of Investment</label>
          <div className="flex flex-wrap gap-4">
            {["Own Equity", "Bank Loan", "Both"].map((val, index) => (
              <label key={index} className="flex items-center space-x-2">
                <input type="radio" name="investmentMode" value={val} />
                <span>{val}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-[#b98a30] hover:bg-yellow-700 text-white font-semibold px-8 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FranchiseForm;
