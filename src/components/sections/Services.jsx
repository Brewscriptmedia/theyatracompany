import { FaTaxi, FaPlaneArrival, FaRoad, FaBriefcase} from "react-icons/fa";
import Container from "../ui/Container";
import Card from "../ui/Card";

const services = [
    {
        title: "Airport Pickup",
        icon: <FaPlaneArrival size={40}/>,
        description: "Reliable airport pickup service with professional drivers."
    },
    {
        title: "Airport Drop",
        icon: <FaTaxi size={40}/>,
        description: "Reach the airport comfortably and on time."
    },
    {
        title: "Outstation Trips",
        icon: <FaRoad size={40}/>,
        description: "Comfortable long-distance travel across India."
    },
    {
        title: "Corporate Travel",
        icon: <FaBriefcase size={40}/>,
        description: "Professional transport solution for businesses."
    },
];

export default function Services() {
    return (
        <section>
            <Container>

                <h2 className="text-4x1 font-bold text-center mb-14">
                    Our Services
                </h2>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

                    {services.map((services) =>(
                        <Card key={services.title}>
                            <div className="text-amber-500 mb-4">
                                {services.icon}
                            </div>

                            <h3 className="text-x1 font-semibold mb-3">
                                {services.title}
                            </h3>

                            <p className="text-grey-600">
                                {services.description}
                            </p>
                        </Card>
                    ))}
                    
                </div>
            </Container>
        </section>
    );
}