export default function CheckoutPage() {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 pt-40">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg overflow-hidden grid md:grid-cols-3 gap-6 p-6">
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Checkout</h2>
          <CheckoutForm />
          <PaymentMethod />
        </div>
        <div>
          <OrderSummary />
        </div>
      </div>
    </div>
  )
}

function CheckoutForm() {
  return (
    <form className="space-y-4">
      <h3 className="text-lg font-medium">Billing Details</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="input" />
        <input type="text" placeholder="Last Name" className="input" />
      </div>
      <input type="email" placeholder="Email Address" className="input w-full" />
      <input type="text" placeholder="Street Address" className="input w-full" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input type="text" placeholder="City" className="input" />
        <input type="text" placeholder="State" className="input" />
        <input type="text" placeholder="ZIP" className="input" />
      </div>
    </form>
  )
}

function PaymentMethod() {
  return (
    <div className="mt-8">
      <h3 className="text-lg font-medium mb-4">Payment Method</h3>
      <form className="space-y-4">
        <input type="text" placeholder="Card Number" className="input w-full" />
        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Expiry Date (MM/YY)" className="input" />
          <input type="text" placeholder="CVC" className="input" />
        </div>
        <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md font-medium">
          Pay Now
        </button>
      </form>
    </div>
  )
}

function OrderSummary() {
  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
      <h3 className="text-lg font-medium mb-4 text-gray-800">Order Summary</h3>
      <div className="space-y-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span>Product 1</span>
          <span>$29.99</span>
        </div>
        <div className="flex justify-between">
          <span>Product 2</span>
          <span>$19.99</span>
        </div>
        <hr className="my-2" />
        <div className="flex justify-between font-semibold">
          <span>Total</span>
          <span>$49.98</span>
        </div>
      </div>
    </div>
  )
}
