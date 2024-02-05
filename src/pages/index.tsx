import React from "react";
import Head from "next/head";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

import { Main, FeedbackMessage, Loading } from "../styles/Home";
import { theme } from "../styles/theme";
import { submitForm } from "../services/formSubmission";
import { formatFormData } from "../utils/formatData";

registerCoreBlocks();

export default function Home(): JSX.Element {
  const [isSubmitting, setSubmitting] = React.useState(false);
  const [submissionSucceeded, setSubmissionSucceeded] = React.useState(false);
  const [submissionFailed, setSubmissionFailed] = React.useState(false);

  return (
    <Main>
      <Head>
        <title>yeon | em breve</title>
      </Head>
      {submissionFailed || submissionSucceeded || isSubmitting ? null : (
        <Form
          applyLogic={false}
          formId={1}
          formObj={{
            messages: {
              "label.hintText.enter": `<span class="renderer-enter-button">aperte Enter ↵</span>`,
              "label.submitBtn": "Enviar",
              "label.progress.percent": null,
              "label.errorAlert.required": "Esse campo é obrigatório!",
              "label.errorAlert.email": "Endereço de e-mail inválido!",
              "label.errorAlert.url": "URL inválida!",
            },
            theme: {
              backgroundColor: theme.colors.rock950,
              font: theme.font.family,
              buttonsBgColor: theme.colors.yeon600,
              progressBarFillColor: theme.colors.yeon600,
              progressBarBgColor: theme.colors.rock950,
              answersColor: theme.colors.rock50,
            },
            blocks: [
              {
                name: "welcome-screen",
                id: "welcome",
                attributes: {
                  customHTML: `
                    <div class="welcome-screen">
                      <h1>Seja pioneiro!</h1>
                      <h2>
                        Faça seu pré-cadastro Yeon e tenha acesso a plataforma
                        antes de todo mundo.
                      </h2>
                      <p>
                        Preencha esse formulário pra solicitar um convite de
                        acesso, os convites serão enviados para um número limitado
                        de artistas e parceiros em 2024.
                      </p>
                    </div>`,
                  buttonText: "Começar",
                },
              },
              {
                name: "short-text",
                id: "name",
                attributes: {
                  classnames: "name-block",
                  required: true,
                  label: "Qual é o seu nome artístico?",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "multiple-choice",
                id: "role",
                attributes: {
                  required: false,
                  multiple: true,
                  verticalAlign: false,
                  label: "Você é...",
                  description: "Selecione uma ou mais opções",
                  choices: [
                    {
                      label: "Vocalista / Cantor",
                      value: "vocalista/cantor",
                    },
                    {
                      label: "DJ",
                      value: "dj",
                    },
                    {
                      label: "Beatmaker / Produtor",
                      value: "beatmaker/produtor",
                    },
                    {
                      label: "Compositor",
                      value: "compositor",
                    },
                    {
                      label: "Instrumentista",
                      value: "instrumentista",
                    },
                  ],
                  nextBtnLabel: "Continuar",
                },
              },
              {
                name: "short-text",
                id: "genre",
                attributes: {
                  classnames: "genre-block",
                  required: false,
                  label: "Qual o seu gênero musical? (pode ser mais de um)",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                id: "statement",
                name: "statement",
                attributes: {
                  classnames: "statement",
                  label:
                    "Compartilhe os links das suas redes sociais e de onde estão suas músicas (se você tiver)",
                  buttonText: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "spotify",
                attributes: {
                  label: "Spotify",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "soundcloud",
                attributes: {
                  label: "SoundCloud",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "bandcamp",
                attributes: {
                  label: "Bandcamp",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "instagram",
                attributes: {
                  label: "Instagram",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "tiktok",
                attributes: {
                  label: "TikTok",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "youtube",
                attributes: {
                  label: "YouTube",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "website",
                id: "twitter",
                attributes: {
                  label: "Twitter",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
              {
                name: "email",
                id: "email",
                attributes: {
                  classnames: "email-block",
                  required: true,
                  label: "Qual o seu e-mail?",
                  nextBtnLabel: "Continuar",
                  placeholder: "",
                },
              },
            ],
          }}
          onSubmit={(data, { completeForm, setIsSubmitting }) => {
            setSubmitting(true);
            setIsSubmitting(true);

            // @ts-ignore
            submitForm(formatFormData(data.answers))
              .then(() => {
                completeForm();
                setSubmitting(false);
                setIsSubmitting(false);
                setSubmissionSucceeded(true);
              })
              .catch(() => {
                setSubmitting(false);
                setIsSubmitting(false);
                setSubmissionFailed(true);
              });
          }}
        />
      )}
      {isSubmitting && !submissionSucceeded && !submissionFailed ? (
        <Loading>
          <div className="lds-ripple">
            <div />
            <div />
          </div>
        </Loading>
      ) : null}
      {submissionSucceeded && !isSubmitting && !submissionFailed ? (
        <FeedbackMessage>
          <h1>Pré-cadastro completo</h1>
          <h2>
            Muito obrigado por se inscrever para ser um Pioneiro Yeon, em breve
            você vai receber um convite VIP para acessar a plataforma e para uma
            surpresinha que a gente já já vai contar lá no Instagram.
          </h2>
          <a
            href="https://instagram.com/yeon.live"
            target="_blank"
            rel="noreferrer"
          >
            instagram.com/yeon.live
          </a>
          <p>segue lá!</p>
        </FeedbackMessage>
      ) : null}
      {submissionFailed && !isSubmitting && !submissionSucceeded ? (
        <FeedbackMessage>
          <h1>Parece que encontramos algum erro no seu cadastro...</h1>
          <h2>
            Infelizmente aconteceu algum problema com o seu pré-cadastro.
            <br />
            Mas não se preocupa, recarrega a página e tenta novamente.
          </h2>
        </FeedbackMessage>
      ) : null}
    </Main>
  );
}
