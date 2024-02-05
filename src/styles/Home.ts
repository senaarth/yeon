import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100vh;
  position: relative;

  padding: 4rem 1.5rem;

  .renderer-components-field-content {
    max-width: 850px;
  }

  .renderer-core-submit-btn__loader {
    display: none !important;
  }

  .renderer-core-button {
    border-radius: 8px;
    padding: 1rem;

    &,
    p {
      font-weight: ${({ theme }) => theme.font.weight.semibold};
    }

    svg {
      display: none;
    }
  }

  .renderer-enter-button {
    font-size: ${({ theme }) => theme.font.size.xxs};
    color: ${({ theme }) => theme.colors.rock50};
  }

  .renderer-components-error-message-wrapper {
    background-color: transparent !important;
    padding: 0 !important;
  }

  .renderer-core-html-parser p {
    margin-top: 0 !important;
  }

  .renderer-components-block-label p {
    @media (max-width: 769px) {
      font-size: ${({ theme }) => theme.font.size.lg} !important;
    }
  }

  .renderer-components-block-label p {
    font-size: ${({ theme }) => theme.font.size.xl};
    color: ${({ theme }) => theme.colors.rock50};
  }

  .renderer-components-block-counter {
    font-size: ${({ theme }) => theme.font.size.lg};
    color: ${({ theme }) => theme.colors.rock300};

    .renderer-components-block-counter__value {
      margin-right: 0.625rem;
    }

    svg {
      display: none;
    }
  }

  .blocktype-welcome-screen-block {
    > div {
      max-width: unset !important;
    }

    .welcome-screen {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    h1 {
      font-size: ${({ theme }) => theme.font.size.xl};
      font-weight: ${({ theme }) => theme.font.weight.bold};
    }

    h2 {
      max-width: 640px;
      margin-top: 0.5rem;
    }

    h2,
    p {
      font-size: ${({ theme }) => theme.font.size.sm};
    }

    p {
      color: ${({ theme }) => theme.colors.rock700};
      max-width: 895px;
      margin-top: 1rem;
      margin-bottom: 0.25rem;
    }

    @media (min-width: 1024px) {
      h1 {
        font-size: ${({ theme }) => theme.font.size.xxl};
      }

      h2,
      p {
        font-size: ${({ theme }) => theme.font.size.lg};
      }
    }
  }

  .multiplechoice__options {
    gap: 10px;

    .multipleChoice__optionWrapper {
      font-size: ${({ theme }) => theme.font.size.md} !important;
      padding: 10px 16px !important;
      border: 0 !important;
      border-radius: 8px !important;
      background-color: ${({ theme }) => theme.colors.rock900};
      display: inline-block !important;
      width: fit-content;
      max-width: unset !important;
      min-width: unset !important;
      flex: unset !important;
      text-align: center;
      line-height: 100% !important;
      height: fit-content !important;
      margin: 0 !important;

      &.selected {
        color: ${({ theme }) => theme.colors.rock50};
        background-color: ${({ theme }) => theme.colors.rock600};
      }

      .multipleChoice__optionLabel {
        padding: 0 !important;
      }

      .multipleChoice__optionKey {
        display: none !important;
      }
    }
  }
`;

export const FeedbackMessage = styled.div`
  width: 100%;
  max-width: 960px;
  margin: 0 auto;
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;

  * {
    text-align: center;
  }

  h1 {
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: ${({ theme }) => theme.font.weight.semibold};
  }

  h2 {
    font-size: ${({ theme }) => theme.font.size.lg};
  }

  a {
    color: ${({ theme }) => theme.colors.rock50};
    font-size: ${({ theme }) => theme.font.size.md};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    text-decoration: none;
    margin: 16px 0;
    border-bottom: 2px solid ${({ theme }) => theme.colors.rock50};
  }

  p {
    font-size: ${({ theme }) => theme.font.size.sm};
  }

  @media (max-width: 769px) {
    h1 {
      font-size: ${({ theme }) => theme.font.size.lg};
    }

    h2 {
      font-size: ${({ theme }) => theme.font.size.md};
    }

    a {
      font-size: ${({ theme }) => theme.font.size.sm};
    }

    p {
      font-size: ${({ theme }) => theme.font.size.xs};
    }
  }
`;

// interface ProgressBarProps extends HTMLAttributes<HTMLDivElement> {
//   $progress: number;
// }

// export const ProgressBar = styled.span<ProgressBarProps>`
//   position: absolute;
//   bottom: 0;
//   left: 0;

//   width: ${(props) => props.$progress}%;
//   height: 5px;

//   background-color: ${({ theme }) => theme.colors.yeon500};

//   transition: width 0.3s;
// `;
