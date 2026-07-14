import Container from "../ui/Container";
import Button from "../ui/Button";

export default function CTA() {
    return (
        <section className="bg-amber-500">

            <Container>

                <div className="text-center py-10">

                    <h2 className="text-5x1 font-bold text-white">
                        Need a Taxi Today?
                    </h2>

                    <p className="mt-5 text-white text-lg">
                        Book your ride now and travel confortably anywhere in India.
                    </p>

                    <div className="mt-10">
                        <Button href="/contact">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </Container>
        </section>
    )
}