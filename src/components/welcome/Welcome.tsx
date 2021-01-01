import React from 'react';
import Vector from './vector.svg';
import './Welcome.scss';

const Welcome = () => {
    return (
        <section id="home" className="section welcome-area bg-overlay overflow-hidden d-flex align-items-center">
            <div className="container">
                <div className="row align-items-center">
            

            <div className="col-12 col-md-7 col-lg-5">
                <div className="welcome-intro">
                    <h1 className="text-white title-h1">
                        ¡Puedes enviar dinero a Venezuela con Tarjeta Efectivo!
                    </h1>

                    <p className="text-white my-4 d-none d-sm-block">
                        Con Tarjeta Efectivo puedes enviar dinero a Venezuela para tus familiares y seres queridos
                        de forma rápida y segura, sin intermediarios desde cualquier parte del mundo. Solo necesitas
                        adquirirla, pagar con el método de tu preferencia y retirar el efectivo en nuestra tienda.
                    </p>

                    <p className="text-white my-4 d-block d-sm-none">
                        Con Tarjeta Efectivo puedes enviar dinero a Venezuela para tus familiares y seres queridos
                        de forma rápida y segura, sin intermediarios desde cualquier parte del mundo. Solo necesitas
                        adquirirla, pagar con el método de tu preferencia y retirar el efectivo en nuestra tienda.
                    </p>

                    <div className="button-group store-buttons d-flex">

                        <button type="button" className="btn btn-secondary m-1">
                            <span className="icon-paypal"></span> ¡Canjea tu PayPal!
                        </button>

                        <button type="button" className="btn btn-primary m-1">
                            <span className="icon-gift"></span> ¡Regala!
                        </button>

                    </div>
                </div>
            </div>

            <div className="col-12 col-md-5 col-lg-7">
                <div className="welcome-thumb m-0 p-0" data-aos="fade-right" data-aos-delay="500" data-aos-duration="1000">
                    <img src="assets/img/welcome/illustration.webp" alt="" />
                </div>
            </div>

        </div>
    </div>

    <div className="shape-bottom">
        <img src={Vector} alt="" />
    </div>
</section>
    );
}

export default Welcome;