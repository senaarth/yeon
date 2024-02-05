import React from "react";
import Head from "next/head";
import { Form } from "@quillforms/renderer-core";
import "@quillforms/renderer-core/build-style/style.css";
import { registerCoreBlocks } from "@quillforms/react-renderer-utils";

import { Main } from "../styles/Home";
import { theme } from "../styles/theme";
import { submitForm } from "../services/formSubmission";
import { formatFormData } from "../utils/formatData";

registerCoreBlocks();

export default function Home(): JSX.Element {
  const [submissionSucceeded, setSubmissionSucceeded] = React.useState(false);
  const [submissionFailed, setSubmissionFailed] = React.useState(false);

  return (
    <Main>
      <Head>
        <title>yeon | em breve</title>
      </Head>
      {submissionFailed || submissionSucceeded ? null : (
        <Form
          applyLogic={false}
          formId={1}
          formObj={{
            messages: {
              "label.hintText.enter": `<span class="renderer-enter-button">aperte Enter ↵</span>`,
              "label.submitBtn": "Enviar",
              "label.progress.percent": null,
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
            ],
          }}
          onSubmit={async (data, { completeForm, setIsSubmitting }) => {
            setIsSubmitting(true);

            // @ts-ignore
            submitForm(formatFormData(data.answers))
              .then(() => {
                completeForm();
                setIsSubmitting(false);
                setSubmissionSucceeded(true);
              })
              .catch(() => {
                setIsSubmitting(false);
                setSubmissionFailed(true);
              });
          }}
        />
      )}
      {submissionSucceeded ? <h1>sucesso</h1> : null}
      {submissionFailed ? <h1>erro</h1> : null}
    </Main>
  );
}
