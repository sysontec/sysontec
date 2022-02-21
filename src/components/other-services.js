export default function OtherServices() {
    return (
        <div className="row" style={{ "paddingLeft": "30px", "paddingRight": "30px", "paddingBottom": "50px","background":"#f2f2f2" }}>
            <div className="col col-lg-6 col-md-6 " style={{ "paddingBottom": "10px" }}>
                <div className="card  mx-auto animated-card service-card" >
                    <img src="https://i0.wp.com/redes.noralemilenio.com/wp-content/uploads/2015/04/esquema-red-cualquiera.jpg?ssl=1" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Redes/Comunicaciones</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Cableado estructurado</li>
                        <li className="list-group-item">LAN, Wireless</li>
                        <li className="list-group-item">Telefonía Voz IP</li>
                        <li className="list-group-item">Instalación/configuración de Cámaras</li>
                    </ul>
                </div>
            </div>
            <div className="col col-lg-6 col-md-6 " style={{ "paddingBottom": "10px" }}>
                <div className="card  mx-auto animated-card service-card" >
                    <img src="https://www.senati.edu.pe/sites/default/files/2018/carrera/10/video-soporte-de-mantenimiento-y-equipos-de-computacion-295x147.jpg" className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Soporte/Servicio Técnico</h5>
                        {/* <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> */}
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Mantenimiento preventivo/correctivo de equipos</li>
                        <li className="list-group-item">Recuperación de archivos</li>
                        <li className="list-group-item">Instalación de Sistemas Operativos</li>
                        <li className="list-group-item">Clonación de discos</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}