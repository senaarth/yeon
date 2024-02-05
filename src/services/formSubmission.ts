import axios from "axios";

export async function submitForm(answers) {
  await axios
    .post(
      "https://sheet.best/api/sheets/94360e8f-b221-4ccc-9761-036418c7dfa7",
      answers
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}
