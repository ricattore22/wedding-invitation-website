export default function Box({
  modalId = "",
  boxTitle = "",
  boxDetails = "",
  btnModal = false,
  txtModalBtn = "",
  modalTitle = "",
  modalDetails = "",
}) {
  return (
    <>
      <div className="card w-full max-w-96 xl:max-w-[450px] bg-base-100 shadow-xl rounded-xl">
        <div className="card-body gap-[16px] xl:gap-[24px] font-Lora">
          {boxTitle !== "" && (
            <h2 className="card-title font-DancingScript text-primary-gold text-[24px] md:text-[28px] xl:text-[32px] leading-[1.2]">
              {boxTitle}
            </h2>
          )}
          <div className="space-y-[16px] xl:space-y-[24px]">
            {boxDetails !== "" && boxDetails}

            {btnModal === true && (
              <div>
                <button
                  className="bg-white px-[4px] pb-[8px] hover:pr-[12px] border-b-2 border-b-primary-gold text-[16px] xl:text-[18px] hover:text-primary-gold transition-all"
                  onClick={() =>
                    document.getElementById(`${modalId}`).showModal()
                  }
                >
                  {txtModalBtn}
                </button>
                <dialog id={modalId} className="modal">
                  <div className="modal-box ">
                    {/* Close Box Btn */}
                    <form method="dialog">
                      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                        ✕
                      </button>
                    </form>

                    {/* Box Content */}
                    <div className="font-Lora italic space-y-[16px]">
                      {modalTitle !== "" && (
                        <h3 className="font-semibold text-lg xl:text-xl">
                          {modalTitle}
                        </h3>
                      )}
                      <div className="space-y-[8px]">
                        {modalDetails !== "" && modalDetails}
                      </div>
                    </div>
                  </div>

                  {/* Close Backdrop */}
                  <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                  </form>
                </dialog>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
