import { LinkIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import {
  EmailShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TumblrShareButton,
  TwitterShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  InstapaperIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TumblrIcon,
  TwitterIcon,
  WhatsappIcon,
} from "react-share";
import { toast } from "react-toastify";
import { closeShareModal } from "../../../features/modals/ShareModalSlice";
import CloseModalButton from "../CloseModalButton";

function ShareModal() {
  const { isShareModalOpen } = useSelector((state) => state.shareModal);

  const dispatch = useDispatch();
  const location = useLocation();
  const shareModalRef = useRef();

  const postUrl = `http://localhost:3000${location.pathname}`;

  const copyLinkToClipboard = () => {
    navigator.clipboard.writeText(postUrl);

    toast.info(`Link copied to clipboard`);
  };

  const closeModal = (e) => {
    if (shareModalRef.current === e.target) {
      dispatch(closeShareModal());
    }
  };

  const closeButton = () => {
    dispatch(closeShareModal());
  };

  return (
    <>
      {isShareModalOpen && (
        <div
          ref={shareModalRef}
          onClick={closeModal}
          className="fixed flex top-0 left-0 right-0 bottom-0 items-center justify-center h-screen bg-white/95 z-20"
        >
          <div className="relative w-[300px]  flex justify-center items-center text-center py-[44px] px-[56px] bg-white shadow-lg">
            <CloseModalButton closeFunction={closeButton} />
            <div className="flex flex-col gap-5">
              <h1 className="font-semibold">Share</h1>

              <div className="border-b-[1px] pb-5 border-black">
                <button
                  onClick={copyLinkToClipboard}
                  className="h-[31px] w-[31px] bg-gray-200 rounded-full flex justify-center items-center"
                >
                  <LinkIcon className="h-[15px]" />
                </button>
              </div>

              <div className="grid grid-cols-5 gap-2 pb-5 border-b-[1px] border-black">
                <EmailShareButton url={postUrl}>
                  <EmailIcon size={32} round={true} />
                </EmailShareButton>

                <FacebookShareButton url={postUrl}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <TwitterShareButton url={postUrl}>
                  <TwitterIcon size={32} round={true} />
                </TwitterShareButton>

                <TumblrShareButton url={postUrl}>
                  <TumblrIcon size={32} round={true} />
                </TumblrShareButton>

                <FacebookShareButton url={postUrl}>
                  <FacebookIcon size={32} round={true} />
                </FacebookShareButton>

                <RedditShareButton url={postUrl}>
                  <RedditIcon size={32} round={true} />
                </RedditShareButton>

                <InstapaperShareButton url={postUrl}>
                  <InstapaperIcon size={32} round={true} />
                </InstapaperShareButton>

                <WhatsappShareButton url={postUrl}>
                  <WhatsappIcon size={32} round={true} />
                </WhatsappShareButton>

                <TelegramShareButton url={postUrl}>
                  <TelegramIcon size={32} round={true} />
                </TelegramShareButton>

                <LinkedinShareButton url={postUrl}>
                  <LinkedinIcon size={32} round={true} />
                </LinkedinShareButton>

                <PinterestShareButton url={postUrl}>
                  <PinterestIcon size={32} round={true} />
                </PinterestShareButton>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShareModal;
