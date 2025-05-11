import { BadgeDollarSign, Truck, ShieldCheck, Shield } from "lucide-react";

const features = [
  {
    icon: <BadgeDollarSign className="h-8 w-8 text-yellow-600" />,
    title: "Fixed Price Guarantee",
    description: "Price is confirmed in the contract and will not change.",
  },
  {
    icon: <Truck className="h-8 w-8 text-yellow-600" />,
    title: "Free Delivery",
    description: "Furniture is delivered to and from the workshop at no cost.",
  },
  {
    icon: <Shield className="h-8 w-8 text-yellow-600" />,
    title: "Best Price Match",
    description: "Found it cheaper? We'll beat the price.",
  },
  {
    icon: <ShieldCheck className="h-8 w-8 text-yellow-600" />,
    title: "18-Month Warranty",
    description: "Quality control at every stage of upholstery.",
  },
];

export default function FeatureCards() {
  return (
    <section className="-mt-16 relative z-30  py-10 px-4">
      <div className="max-w-screen-xl mx-auto grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {features.map((item, index) => (
          <div
            key={index}
            className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="mb-4">{item.icon}</div>
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
