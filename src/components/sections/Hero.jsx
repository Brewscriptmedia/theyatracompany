import Container from "../ui/Container";
import Button from "../ui/Button";

export default function Hero(){
    return(
        <section className="bg-slate-900 text-white">
            <Container>
                <div className="min-h-[85vh] flex flex-col justify-center items-center text-center">

                    <span className="uppercase tracking-[5px] text-amber-400 text-sm font-semibold">
                        Trusted Taxi Services Across India
                    </span>

                    <h1 className="text-5x1 md:text-7x1 font-extrabold mt-5 leading-tight">
                        Your Journey 
                        <br/>
                        Starts With Us
                    </h1>

                    <p className="max-w-2x1 mt-8 text-lg text-grey-300">
                        Airport Transfers, Local Taxi, Outstration Trips and Corporate Travel with Professional Drivers.
                    </p>

                    <div className="flex gap-5 mt-10 text-lg text-grey-300">

                        <Button href="/contact">
                            Book Now
                        </Button>

                        <Button href="tel:+919999999999" varient= "secondary">
                            Call Now
                        </Button>
                        
                    </div>
                </div>
            </Container>
        </section>
    )
}