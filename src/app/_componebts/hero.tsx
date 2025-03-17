import {} from '@phosphor-icons/react'
export function Hero() {
  return (
    <main>
      <section className="bg-[#E84C3D] text-white relative overflow-hidden">
        <div>
          <article>
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10">
                Seu pet merece cuidado, carinho e atenção especial.
              </h1>
              <p className="lg:text-4xl">
                Oferecemos os melhores serviços para garatir o bem-estar e a
                felicidade do seu amigo de quatro patas.
              </p>

              <a
                href="#"
                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center"
              >
                Contato via WhatsApp
              </a>

              <div className="mt-8">
                <p className="text-sm mb-4">
                  <b className="bg-black text-white px-2 rounded-md">5%</b>
                  Na primeira compra.
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
