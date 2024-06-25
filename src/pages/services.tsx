import ServicesBus from "@/components/ServicesBus";
import ServicesFlamingo from "@/components/ServicesFlamingo";
import ServicesCards from "@/components/ServicesCards";

export default function Services() {
    return (
        <section>
            <ServicesCards />
            <ServicesFlamingo />
            <ServicesBus />
        </section>
    )
}