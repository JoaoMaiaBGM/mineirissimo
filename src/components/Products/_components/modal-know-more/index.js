import Image from 'next/image';
import { MdClose, MdWhatsapp } from 'react-icons/md';
import { Ingredients } from './ingredients';
import { NutritionalInformation } from './nutritional-information';
import { PreparationMode } from './preparation-mode';

const Divider = () => {
  return <div className="w-full h-px bg-accent"></div>;
};

export function KnowMoreModal({ dialogId, product }) {
  const titleId = `${dialogId}-title`;

  return (
    <>
      <el-dialog>
        <dialog
          id={dialogId}
          aria-labelledby={titleId}
          className="fixed inset-0 size-auto max-h-none max-w-none overflow-y-auto bg-transparent backdrop:bg-transparent"
        >
          <el-dialog-backdrop className="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in" />

          <div
            tabIndex="0"
            className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
          >
            <el-dialog-panel className="relative flex w-full max-w-3xl max-h-[calc(100vh-2rem)] sm:my-8 sm:max-h-[calc(100vh-4rem)] flex-col overflow-hidden rounded-lg bg-primary-dark text-left border border-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="relative min-h-0 flex-1 overflow-y-auto p-4">
                <button
                  type="button"
                  command="close"
                  commandfor={dialogId}
                  className="absolute top-2 right-2 z-10"
                >
                  <MdClose className="size-6 text-mine-yellow-50" />
                </button>

                <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                  <div className="flex w-full flex-col items-center md:hidden justify-center gap-2">
                    <h3 id={titleId} className="h3 text-mine-yellow-50 capitalize">
                      {product.title}
                    </h3>

                    <Divider />
                  </div>

                  <div
                    id="product-image"
                    className="w-full h-48 aspect-2/1 p-0.5 bg-white rounded-lg md:aspect-50/70 md:h-full"
                  >
                    <Image
                      src={product.url}
                      alt={product.alt}
                      width={1200}
                      height={1200}
                      className="w-full h-full object-cover rounded-lg"
                      loading="eager"
                    />
                  </div>

                  <div
                    id="product-information"
                    className="w-full flex flex-col items-center gap-2 md:max-w-[45%]"
                  >
                    <div className="hidden w-full flex-col items-center md:flex justify-center gap-2">
                      <h3 id={titleId} className="h3 text-mine-yellow-100 capitalize">
                        {product.title}
                      </h3>

                      <Divider />
                    </div>

                    <div
                      id="product-information-content"
                      className="w-full flex flex-col items-start justify-center gap-4"
                    >
                      <Ingredients ingredients={product.ingredients} />

                      <Divider />

                      <NutritionalInformation
                        nutritionalInformation={product.nutritionalInformation}
                      />

                      <Divider />

                      <PreparationMode preparation={product.preparation} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex shrink-0 flex-col items-center justify-center bg-primary-dark py-3.5 px-5 gap-4">
                <div className="flex items-center justify-between w-full">
                  <p className="p-medium text-mine-yellow-100 text-left w-full">A partir de</p>
                  <p className="p-medium text-mine-yellow-50 font-bold text-right w-full">
                    R$29,60
                  </p>
                </div>

                <a
                  className="flex w-full items-center justify-center"
                  href="https://web.whatsapp.com/send?phone=5581996272423"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="btn-primary w-full text-mine-blue-300 bg-mine-whatsapp border-none shadow-none flex items-center justify-center gap-3">
                    <MdWhatsapp className="size-6" />
                    Comprar pelo WhatsApp
                  </button>
                </a>

                <p className="p-caption text-mine-yellow-100 text-center -mt-2">
                  Você será redirecionado para o nosso WhatsApp
                </p>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </>
  );
}
