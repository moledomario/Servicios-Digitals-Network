import ServiciosView from "../layout/serviciosLayout/serviciosView";
import Header from "../componentes/Header";

export const metadata = {
    title: "Servicios Digitales | Nuestra Oferta de Soluciones",
    description: "Conoce nuestra amplia gama de servicios digitales: desde consultoría IT hasta implementaciones tecnológicas a medida para tu empresa.",
};

export default function ServiciosPage() {
    return (
        <>
            <Header />
            <ServiciosView />
        </>
    );
}
