import { useState } from "react";
import { Link } from "react-router-dom";

export default function CheckOut() {
  const [shippingMethod, setShippingMethod] = useState("outside");
  const [showCupon, setShowCupon] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const shippingCost = shippingMethod === "outside" ? 99 : 66;
  const totalMRP = 420; // Fixed for demonstration
  const totalAmount = totalMRP + shippingCost;

  return (
    <div className="max-w-screen-xl xl:max-w-screen-2xl mx-auto p-5 pt-20 md:pt-32  ">
      <div className="w-full p-5 bg-[#d9edf7] my-6">
        <p className="md:text-xl text-base">
          Returning Customer ?{" "}
          <Link to={"/login"}>
            {" "}
            <span className="text-orange-600">Click here to login</span>
          </Link>
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Billing & Shipping Section */}
        <div className="md:col-span-6 border-b md:border-b-0 md:border-r-2 px-3">
          <h1 className="font-serif font-bold text-xl md:text-2xl py-4 md:py-5">
            BILLING & SHIPPING
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              type="text"
              name="name"
              placeholder="Enter name"
              required
              className="w-full h-12 px-4 rounded-lg border-2 border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm"
            />
            <input
              type="text"
              name="phone"
              placeholder="Enter phone number"
              required
              className="w-full h-12 px-4 rounded-lg border-2 border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm"
            />
            <select
              name="area"
              className="w-full h-12 px-4 rounded-lg border-2 border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm"
            >
              <option value="select">Select Area</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Barishal">Barishal</option>
            </select>
            <select
              name="city"
              className="w-full h-12 px-4 rounded-lg border-2 border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm"
            >
              <option value="select">Select City</option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Barishal">Barishal</option>
            </select>
            <input
              type="text"
              name="address"
              placeholder="Address"
              required
              className="w-full h-12 px-4 rounded-lg border-2 border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm"
            />
            <input
              type="email"
              name="email"
              placeholder="Email (optional)"
              className="w-full h-12 px-4 rounded-lg border-2 border-slate-300 text-black focus:outline-none focus:ring-2 focus:ring-black transition shadow-sm"
            />
          </div>
          <textarea
            name="orderNote"
            rows={4}
            className="w-full p-4 border-2 border-slate-300 shadow-sm rounded-lg mt-4"
            placeholder="Order Note (optional)"
          ></textarea>
        </div>

        {/* Summary & Payment Section */}
        <div className="md:col-span-6">
          <div className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md">
            <button
              className="text-lg font-semibold text-orange-500 mb-4"
              onClick={() => setShowCupon(!showCupon)}
            >
              Have Coupon / Voucher?
            </button>
            {showCupon && (
              <>
                <div className="flex gap-4 mb-3">
                  <input
                    type="text"
                    className="w-full border-2 border-slate-300 shadow-sm rounded-lg p-4"
                  />
                  <button className="px-5 p-2 bg-orange-500 tex-white rounded-lg text-white">
                    apply
                  </button>{" "}
                </div>
              </>
            )}

            {/* Shipping Method */}
            <div className="mb-6">
              <h4 className="text-lg font-bold mb-2">Choose Shipping Method</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="outside"
                    checked={shippingMethod === "outside"}
                    onChange={() => setShippingMethod("outside")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2 font-medium">
                    Delivery Outside Dhaka
                  </span>
                  <span className="ml-auto font-medium">৳ 99.00</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="shipping"
                    value="inside"
                    checked={shippingMethod === "inside"}
                    onChange={() => setShippingMethod("inside")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2 font-medium">
                    Delivery Inside Dhaka
                  </span>
                  <span className="ml-auto font-medium">৳ 66.00</span>
                </label>
              </div>
            </div>

            {/* Total MRP */}
            <div className="border-t border-gray-300 py-4">
              <div className="flex justify-between text-lg font-medium">
                <span>Total MRP</span>
                <span>৳ {totalMRP.toFixed(2)}</span>
              </div>
            </div>

            {/* Total Amount */}
            <div className="border-t border-gray-300 py-4">
              <div className="flex justify-between text-xl font-bold text-orange-500">
                <span>Total Amount</span>
                <span>৳ {totalAmount.toFixed(2)}</span>
              </div>
            </div>

            {/* Payment Method */}
            <div className="mt-6">
              <h4 className="text-lg font-bold mb-2">Choose Payment Method</h4>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="cash"
                    checked={paymentMethod === "cash"}
                    onChange={() => setPaymentMethod("cash")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2 font-medium">Cash on Delivery</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="bkash"
                    checked={paymentMethod === "bkash"}
                    onChange={() => setPaymentMethod("bkash")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2 font-medium">Bkash</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="pathao"
                    checked={paymentMethod === "pathao"}
                    onChange={() => setPaymentMethod("pathao")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2 font-medium">Pathao Pay</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={paymentMethod === "card"}
                    onChange={() => setPaymentMethod("card")}
                    className="form-radio text-orange-500"
                  />
                  <span className="ml-2 font-medium">
                    Pay with Card/Mobile Wallet
                  </span>
                </label>
              </div>
            </div>

            {/* Place Order Button */}
            <button className="w-full mt-6 bg-orange-500 text-white py-3 rounded-md font-bold text-lg hover:bg-orange-600 transition">
              PLACE ORDER
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
