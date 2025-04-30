export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 px-4 pt-32 pb-10 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg grid gap-6 p-6 sm:p-8">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Checkout</h2>
          <CheckoutForm />
          <PaymentMethod />
        </div>
      </div>
    </div>
  );
}

function CheckoutForm() {
  return (
    <form className="space-y-4">
      <h3 className="text-lg sm:text-xl font-medium">Billing Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="input w-full" />
        <input type="text" placeholder="Last Name" className="input w-full" />
      </div>
      <input type="email" placeholder="Email Address" className="input w-full" />
      <input type="text" placeholder="Street Address" className="input w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" placeholder="City" className="input w-full" />
        <input type="text" placeholder="State" className="input w-full" />
        <input type="text" placeholder="ZIP" className="input w-full" />
      </div>
    </form>
  );
}

function PaymentMethod() {
  return (
    <div className="mt-8">
      <h3 className="text-lg sm:text-xl font-medium mb-4">Payment Method</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Card Number" className="input w-full" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <input type="text" placeholder="Expiry Date (MM/YY)" className="input w-full" />
          <input type="text" placeholder="CVC" className="input w-full" />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
          Pay Now
        </button>
      </form>
    </div>
  );
}
