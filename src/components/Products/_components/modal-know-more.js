import Image from 'next/image';
import { FaCheckCircle } from 'react-icons/fa';
import { MdClose } from 'react-icons/md';

const Divider = () => {
  return <div className="w-full h-px bg-accent"></div>;
};

const ingredients = [
  {
    id: 1,
    name: 'Ingrediente 1',
    icon: <FaCheckCircle />,
  },
  {
    id: 2,
    name: 'Ingrediente 2',
    icon: <FaCheckCircle />,
  },
  {
    id: 3,
    name: 'Ingrediente 3',
    icon: <FaCheckCircle />,
  },
];

const nutritionalInformation = [
  {
    id: 1,
    name: 'Valor energético',
    icon: <FaCheckCircle />,
    value: '100 kcal',
  },
  {
    id: 2,
    name: 'Proteínas',
    icon: <FaCheckCircle />,
    value: '10 g',
  },
  {
    id: 3,
    name: 'Gorduras totais',
    icon: <FaCheckCircle />,
    value: '10 g',
  },
  {
    id: 4,
    name: 'Carboidratos',
    icon: <FaCheckCircle />,
    value: '10 g',
  },
  {
    id: 5,
    name: 'Sódio',
    icon: <FaCheckCircle />,
    value: '10 g',
  },
];

export function ModalKnowMore({ dialogId, product }) {
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
            <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="bg-primary-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="flex flex-col items-start justify-center">
                  <div className="w-full flex flex-col items-center justify-center gap-6">
                    <h3 id={titleId} className="h3 text-white">
                      {product.title}
                    </h3>

                    <Divider />

                    <div
                      id="product-image"
                      className="w-full max-h-5/12 h-full p-0.5 bg-white rounded-lg"
                    >
                      <Image
                        src={product.url}
                        alt={product.alt}
                        width={500}
                        height={500}
                        className="w-full h-full object-cover rounded-lg"
                        loading="eager"
                      />
                    </div>

                    <div id="product-information" className="flex flex-col items-center gap-2">
                      <div
                        id="product-information-content"
                        className="flex flex-col items-start justify-center gap-4 mt-2"
                      >
                        <p className="p-small text-mine-gray-150">{product.alt}</p>

                        <div id="ingredients">
                          <p className="p-small text-white mb-2">Ingredientes</p>

                          <div className="flex flex-col items-start justify-center gap-2">
                            {ingredients.map((ingredient) => (
                              <div
                                key={ingredient.id}
                                className="w-full p-caption text-white flex flex-row items-center gap-2"
                              >
                                {ingredient.icon}
                                {ingredient.name}
                              </div>
                            ))}
                          </div>
                        </div>

                        <Divider />

                        <div
                          id="nutritional-information"
                          className="flex flex-col items-start justify-center gap-2 mt-2"
                        >
                          <p className="p-small text-white mb-2">Informações nutricionais</p>

                          <div className="flex flex-row items-start justify-between gap-2">
                            {nutritionalInformation.map((nutritionalInformation) => (
                              <div
                                key={nutritionalInformation.id}
                                className="w-full p-caption text-white flex flex-col items-start justify-center gap-2"
                              >
                                <div className="flex items-center justify-center">
                                  {nutritionalInformation.icon}
                                </div>
                                <span className="p-caption text-white">
                                  {nutritionalInformation.value}
                                </span>
                                <span className="p-caption text-white">
                                  {nutritionalInformation.name}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <Divider />

                        <div id="preparation-mode">
                          <p className="p-small text-white mb-2">Modo de preparo</p>
                          <p className="p-caption text-white">
                            lore ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                          </p>
                        </div>
                      </div>
                    </div>

                    <button
                      type="button"
                      command="close"
                      commandfor={dialogId}
                      className="relative top-0 right-0"
                    >
                      <MdClose className="size-6 text-white" />
                    </button>
                  </div>
                </div>
              </div>
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </>
  );
}
