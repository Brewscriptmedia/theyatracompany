import Container from "../ui/Container";

const reasons = [
    "24x7 Customer Support",
    "Professional Drivers",
    "Clean & Senitized Vehicles",
    "Affordable Pricing",
    "Safe & Secure Travel",
    "On-Time Pickup"
];

export default function WhyChooseUs(){
    return (
        <section className="bg-slate-100">

            <Container>

                <h2 className="text-4x1 font-bold text-center mb-12">
                    Why Choose Us?
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {reasons.map((reason) => (
                        <div key={reason} className="bg-white p-8 rounded-x1 shadow">
                            ✅ {reason}
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    )
}