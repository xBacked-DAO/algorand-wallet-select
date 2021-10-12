import * as React from "react";
import * as PropTypes from "prop-types";
import styled from "styled-components";

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
  static propTypes = {
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
      <SLightbox
        className={MODAL_LIGHTBOX_CLASSNAME}
        offset={lightboxOffset}
        opacity={lightboxOpacity}
        ref={(c) => (this.lightboxRef = c)}
        show={show}
      >
        <SModalContainer className={MODAL_CONTAINER_CLASSNAME} show={show}>
          <SHitbox className={MODAL_HITBOX_CLASSNAME} onClick={onClose} />
          <SModalCard
            className={MODAL_CARD_CLASSNAME}
            show={show}
            themeColors={themeColors}
            maxWidth={userOptions.length < 3 ? 500 : 800}
            ref={(c) => (this.mainModalCard = c)}
          >
            {userOptions.map((provider) =>
              !!provider ? (
                <Provider
                  name={provider.name}
                  logo={provider.logo}
                  description={provider.description}
                  themeColors={themeColors}
                  onClick={provider.onClick}
                />
              ) : null
            )}
          </SModalCard>
        </SModalContainer>
      </SLightbox>
    );
  };
}
