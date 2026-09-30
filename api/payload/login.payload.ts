export function loginPayload(
  csrfToken: string,
  email: string,
  password: string
) {
  return {
    csrfmiddlewaretoken: csrfToken,
    email,
    password,
  };
}