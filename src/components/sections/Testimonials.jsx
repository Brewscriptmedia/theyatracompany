import Container from "../ui/Container";
import Card from "../ui/Card";

export default function Testimonials() {
    return (
        <section>

            <Container>

                <h2 className="text-4x1 font-bold text-center mb-14">
                    What Our Clients Say
                </h2>

                <div className="grid md:grid-cols-3 gap-8">

                    <Card>
                        ⭐️⭐️⭐️⭐️⭐️
                        <p className="mt-4">
                            Excellent airport pickup service. Driver arrived on time.
                        </p>
                        <h4 className="font-semibold mt-5">
                            Rahul Sharma
                        </h4>
                    </Card>

                    <Card>
                        ⭐️⭐️⭐️⭐️⭐️
                        <p className="mt-4">
                            Comfortable ride and affordable pricing.
                        </p>
                        <h4 className="font-semibold mt-5">
                            Priya Verma
                        </h4>
                    </Card>

                    <Card>
                        ⭐️⭐️⭐️⭐️⭐️
                        <p className="mt-4">
                            Best taxi service for business travel.
                        </p>
                        <h4 className="font-semibold mt-5">
                            Amit Singh
                        </h4>
                    </Card>
                </div>
            </Container>
        </section>
    )
}