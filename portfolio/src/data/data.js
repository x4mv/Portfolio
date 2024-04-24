import apv from '../images/apv-dashboard-opt.jpg'
import crm from '../images/crm.jpg'
import travel from '../images/traven-agency-landing.jpg'

export const projects = [
    {
        "id":1,
        "title": "APV",
        "description": "Es una aplicación web construida con la pila MERN (MongoDB, Express, React, Node.js) diseñada para administrar las operaciones diarias de una veterinaria. La aplicación permite gestionar pacientes, citas, veterinarios, facilitando la administración eficiente de los servicios.",
        "image": apv,
        "link": 'https://github.com/x4mv/apv-mern.git'
    },
    {
        "id":2,
        "title": "Agencia de Viajes",
        "description": "Es una aplicación web diseñada para mostrar y vender servicios de viajes. Construida con tecnologías como JavaScript, Bootstrap para el frontend, y Node.js con Express para el backend, la aplicación también utiliza Sequelize como ORM para interactuar con la base de datos.",
        "image": travel,
        "link": 'https://github.com/x4mv/travel-agency-js.git'
    },
    {
        "id":3,
        "title": "Administrador de clientes",
        "description": "Una aplicación web para un sistema de gestión de relaciones con el cliente (CRM) construida con JavaScript y IndexedDB proporciona una solución local y flexible para gestionar datos de clientes.",
        "image": crm,
        "link": 'https://github.com/x4mv/CRM-JS.git'
    },
]

