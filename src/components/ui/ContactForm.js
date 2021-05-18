import React from 'react'

export const ContactForm = ({opciones}) => {
    return (
 <section id="requestQuote" class="request-quote-2 pt-0 pb-30" style={{marginTop: '0px'}}>
      <div class="container">
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="request-quote-panel">
              <div class="request__panel-banner bg-overlay bg-overlay-theme">
                <div class="request__panel-banner-inner">
                  <h5 class="request__panel-title">Contamos con un equipo de consultores dedicados y fomentamos el uso
                    metodologías ágiles de trabajo.</h5>
                  <p class="request__panel-desc">Nuestra presencia internacional garantiza la puntualidad, la
                    rentabilidad y el cumplimiento de los estándares necesarios para garantizar que se cumplan sus
                    plazos de producción.</p>
                  <button onclick="window.open('/material/descargables/SOFTMINERS-BROCHURE-Empresa.pdf')"  class="btn btn__secondary btn__hover2">
                    <i class="icon-printer"></i><span>Download 2021 Brochure</span>
                  </button>
                </div>
              </div>
              <div class="request__form mb-0">
                <div class="request__form-body">
                  <form method="post" class="" action="contactengine.php">
                    <input type="hidden" name="recaptcha_response" id="recaptchaResponse"/>

                    <div class="row">
                      <div class="col-sm-12 col-md-12 col-lg-12">
                        <h4 class="request__form-title">Formulario de Contacto</h4>
                        <p class="request__form-desc">Si desea conocer más sobre alguna de las soluciones o productos
                          que ofrecemos no dude en contactarnos. </p>
                      </div>
                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control" id="Name" name="Name" placeholder="Nombre"/>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form-group">
                          <input type="email" class="form-control" id="Email" name="Email" placeholder="Email"/>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control" id="Tel" name="Tel" placeholder="Teléfono"/>
                        </div>
                      </div>

                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control" id="Cargo" name="Cargo" placeholder="Cargo"/>
                        </div>
                      </div>
                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form-group">
                          <input type="text" class="form-control" id="Empresa" name="Empresa" placeholder="Empresa"/>
                        </div>
                      </div>


                      <div class="col-sm-6 col-md-6 col-lg-6">
                        <div class="form-group form-group-select">
                          <select class="form-control" id="Solucion" name="Solucion">
                            <option>Interesado en:</option>
                            {
                                opciones.map((item, i) => 
                                    <option key={i}>{item}</option>
                                )
                            }
                            

                            {/* <option>IBM Blockchain</option>
                            <option>IBM Security</option>
                            <option>IBM Watson - Internet De Las Cosas</option>
                            <option>IBM Data and AI</option>
                            <option>IBM Cloud</option>
                            <option>IBM Infraestructura de TI</option>
                            <option>IBM Global Financing</option>


                            <option>SE - Gestión de la Calidad Empresarial</option>
                            <option>SE - Gestión de Procesos de Negocios</option>
                            <option>SE - Gestión De Documentos y Digitalización</option>
                            <option>SE - Gestión De Activos</option>
                            <option>SE - Gestión de Recursos Humanos</option> */}

                            <option>Otros</option>

                          </select>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-12">
                        <div class="form-group">
                          <textarea class="form-control" id="Coments" name="Coments"
                            placeholder="Describanos su necesidad"></textarea>
                        </div>
                      </div>
                      <div class="col-sm-12 col-md-12 col-lg-12">
                        <button class="btn btn__secondary">Contactar</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-12 col-md-12 col-lg-12 text-center mt-40">
            <p class="text__link mb-0">Nos pondremos en contacto con usted dentro de las 24 horas o llámenos.
              <span class="font-bold color-theme">+54 9 351 5218080</span></p>
          </div>
        </div>
      </div>
    </section>
    )
}
