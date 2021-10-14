import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

import { Provider } from "./Provider";
import {
  MODAL_LIGHTBOX_CLASSNAME,
  MODAL_CONTAINER_CLASSNAME,
  MODAL_HITBOX_CLASSNAME,
  MODAL_CARD_CLASSNAME,
} from "../constants";

const SLightbox = styled.div`
  transition: opacity 0.1s ease-in-out;
  text-align: center;
  position: fixed;
  width: 100vw;
  height: 100vh;
  margin-left: -50vw;
  top: ${({ offset }) => (offset ? `-${offset}px` : 0)};
  left: 50%;
  z-index: 2;
  will-change: opacity;
  background-color: ${({ opacity }) => {
    let alpha = 0.4;
    if (typeof opacity === "number") {
      alpha = opacity;
    }
    return `rgba(0, 0, 0, ${alpha})`;
  }};
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
  display: flex;
  justify-content: center;
  align-items: center;

  & * {
    box-sizing: border-box !important;
  }
`;

const SModalContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};
`;

const SHitbox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const SModalCard = styled.div`
  position: relative;
  width: 100%;
  background-color: ${({ themeColors }) => themeColors.background};
  border-radius: 12px;
  margin: 10px;
  padding: 0;
  opacity: ${({ show }) => (show ? 1 : 0)};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  pointer-events: ${({ show }) => (show ? "auto" : "none")};

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "800px")};
  min-width: fit-content;
  max-height: 100%;
  overflow: auto;

  @media screen and (max-width: 768px) {
    max-width: ${({ maxWidth }) => (maxWidth ? `${maxWidth}px` : "500px")};
    grid-template-columns: 1fr;
  }
`;

const INITIAL_STATE = {
  show: false,
  lightboxOffset: 0,
};

export class Modal {
  constructor(props) {
    window.updateWeb3Modal = async (state) => {
      this.setState(state);
    };
  }
  propTypes = {
    userOptions: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired,
    resetState: PropTypes.func.isRequired,
    lightboxOpacity: PropTypes.number.isRequired,
  };

  lightboxRef = null;
  mainModalCard = null;

  state = {
    ...INITIAL_STATE,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.show && !this.state.show) {
      this.props.resetState();
    }
    if (this.lightboxRef) {
      const lightboxRect = this.lightboxRef.getBoundingClientRect();
      const lightboxOffset = lightboxRect.top > 0 ? lightboxRect.top : 0;

      if (
        lightboxOffset !== INITIAL_STATE.lightboxOffset &&
        lightboxOffset !== this.state.lightboxOffset
      ) {
        this.setState({ lightboxOffset });
      }
    }
  }

  render = () => {
    const { show, lightboxOffset } = this.state;

    const { onClose, lightboxOpacity, userOptions, themeColors } = this.props;

    return (
      // <SLightbox
      //   className={MODAL_LIGHTBOX_CLASSNAME}
      //   offset={lightboxOffset}
      //   opacity={lightboxOpacity}
      //   ref={(c) => (this.lightboxRef = c)}
      //   show={show}
      // >
      //   <SModalContainer className={MODAL_CONTAINER_CLASSNAME} show={show}>
      //     <SHitbox className={MODAL_HITBOX_CLASSNAME} onClick={onClose} />
      //     <SModalCard
      //       className={MODAL_CARD_CLASSNAME}
      //       show={show}
      //       themeColors={themeColors}
      //       maxWidth={userOptions.length < 3 ? 500 : 800}
      //       ref={(c) => (this.mainModalCard = c)}
      //     >
      //       {userOptions.map((provider) =>
      //         !!provider ? (
      //           <Provider
      //             name={provider.name}
      //             logo={provider.logo}
      //             description={provider.description}
      //             themeColors={themeColors}
      //             onClick={provider.onClick}
      //           />
      //         ) : null
      //       )}
      //     </SModalCard>
      //   </SModalContainer>
      // </SLightbox>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Payment successful
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-sm text-gray-500">
                    Your payment has been successfully submitted. We’ve sent you
                    an email with all of the details of your order.
                  </p>
                </div>

                <div className="mt-4">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={closeModal}
                  >
                    Got it, thanks!
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  };
}
