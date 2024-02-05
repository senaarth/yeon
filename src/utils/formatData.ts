export function formatFormData(answers) {
  return {
    name: answers?.name?.value || "",
    role: answers?.role?.value?.join(", ") || "",
    genre: answers?.genre?.value || "",
    email: answers?.email?.value || "",
    spotify: answers?.spotify?.value || "",
    soundcloud: answers?.soundcloud?.value || "",
    bandcamp: answers?.bandcamp?.value || "",
    instagram: answers?.instagram?.value || "",
    tiktok: answers?.tiktok?.value || "",
    youtube: answers?.youtube?.value || "",
    twitter: answers?.twitter?.value || "",
  };
}
