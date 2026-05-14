import Image from 'next/image';
import { MdClose } from 'react-icons/md';

export function ModalNoMore({ dialogId, product }) {
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
            tabindex="0"
            className="flex min-h-full items-end justify-center p-4 text-center focus:outline-none sm:items-center sm:p-0"
          >
            <el-dialog-panel className="relative transform overflow-hidden rounded-lg bg-gray-800 text-left shadow-xl outline -outline-offset-1 outline-white/10 transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 sm:w-full sm:max-w-lg data-closed:sm:translate-y-0 data-closed:sm:scale-95">
              <div className="bg-primary-dark px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start sm:justify-center">
                  <div className="w-full flex flex-col items-center gap-6">
                    <div className="w-72 h-full p-0.5 bg-white rounded-lg">
                      <Image
                        src={product.url}
                        alt={product.alt}
                        width={100}
                        height={100}
                        className="w-full h-full object-cover rounded-lg"
                      />
                    </div>
                    <h3 id={titleId} className="p-medium text-white">
                      {product.title}
                    </h3>
                    <div className="mt-2">
                      <p className="p-large text-mine-gray-150">{product.alt}</p>
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
            </el-dialog-panel>
          </div>
        </dialog>
      </el-dialog>
    </>
  );
}
