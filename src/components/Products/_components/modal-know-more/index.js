import Image from 'next/image';
import { MdClose } from 'react-icons/md';
import { ingredients, nutritionalInformation } from '../../_data';
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
          <el-dialog-backdrop class="fixed inset-0 bg-gray-900/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"></el-dialog-backdrop>

          <div
            tabIndex="0"
            className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
          >
            <el-dialog-panel className="relative max-w-3xl bg-primary-dark p-4 transform overflow-hidden rounded-lg text-left border border-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="flex flex-col items-center justify-center gap-6 md:flex-row">
                <div className="flex w-full flex-col items-center md:hidden justify-center gap-2">
                  <h3 id={titleId} className="h3 text-white capitalize">
                    {product.title}
                  </h3>

                  <Divider />
                </div>

                <div id="product-image" className="w-full aspect-50/70 p-0.5 bg-white rounded-lg">
                  <Image
                    src={product.url}
                    alt={product.alt}
                    width={500}
                    height={500}
                    className="w-full h-full object-cover rounded-lg"
                    loading="eager"
                  />
                </div>

                <div
                  id="product-information"
                  className="w-full flex flex-col items-center gap-2 md:max-w-[45%]"
                >
                  <div className="hidden w-full flex-col items-center md:flex justify-center gap-2">
                    <h3 id={titleId} className="h3 text-white capitalize">
                      {product.title}
                    </h3>

                    <Divider />
                  </div>

                  <div
                    id="product-information-content"
                    className="w-full flex flex-col items-start justify-center gap-4"
                  >
                    <p className="p-small text-mine-gray-150">{product.alt}</p>

                    <Ingredients ingredients={ingredients} />

                    <Divider />

                    <NutritionalInformation nutritionalInformation={nutritionalInformation} />

                    <Divider />

                    <PreparationMode />
                  </div>
                </div>

                <button
                  type="button"
                  command="close"
                  commandfor={dialogId}
                  className="absolute top-2 right-2"
                >
                  <MdClose className="size-6 text-white" />
                </button>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </>
  );
}
