import ContactoView from "../layout/contactoLayout/ContactoView";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

export const metadata = {
    title: "Contacto | Estamos para ayudarte",
    description: "¿Tienes dudas o necesitas un presupuesto? Contacta con Servicios Digitales Network. Soporte rápido y atención personalizada para tus proyectos tecnológicos.",
};

export default function Contacto() {
    return (
        <>
            <Header />
            <ContactoView />
            <Footer />
        </>
    )
}