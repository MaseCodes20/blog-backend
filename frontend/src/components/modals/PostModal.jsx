import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closePostModal } from "../../features/modals/postModalSlice";
import CloseModalButton from "./CloseModalButton";
import PostModalForm from "./PostModalForm";

function PostModal() {
  const { isPostModalOpen } = useSelector((state) => state.postModal);

  const dispatch = useDispatch();
  const postModalRef = useRef();

  const closeModal = (e) => {
    if (postModalRef.current === e.target) {
      dispatch(closePostModal());
    }
  };

  const closeButton = () => {
    dispatch(closePostModal());
  };

  return (
    <>
      {isPostModalOpen && (
        <div
          ref={postModalRef}
          onClick={closeModal}
          className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-white/95 z-20"
        >
          <div className="relative md:w-[560px] md:h-[600px] flex justify-center items-center text-center py-[44px] px-[56px] bg-white shadow-lg">
            <CloseModalButton closeFunction={closeButton} />

            <PostModalForm />
          </div>
        </div>
      )}
    </>
  );
}

export default PostModal;
