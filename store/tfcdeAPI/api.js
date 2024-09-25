import axios from "axios"
const tfcdeAPI = axios.create({
  baseURL: "https://tfcde-49477.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return tfcdeAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_jcdfer_list(payload) {
  return tfcdeAPI.get(`/api/v1/jcdfer/`)
}
function api_v1_jcdfer_create(payload) {
  return tfcdeAPI.post(`/api/v1/jcdfer/`, payload)
}
function api_v1_jcdfer_retrieve(payload) {
  return tfcdeAPI.get(`/api/v1/jcdfer/${payload.id}/`)
}
function api_v1_jcdfer_update(payload) {
  return tfcdeAPI.put(`/api/v1/jcdfer/${payload.id}/`, payload)
}
function api_v1_jcdfer_partial_update(payload) {
  return tfcdeAPI.patch(`/api/v1/jcdfer/${payload.id}/`, payload)
}
function api_v1_jcdfer_destroy(payload) {
  return tfcdeAPI.delete(`/api/v1/jcdfer/${payload.id}/`)
}
function api_v1_login_create(payload) {
  return tfcdeAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return tfcdeAPI.post(`/api/v1/signup/`, payload)
}
function rest_auth_login_create(payload) {
  return tfcdeAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return tfcdeAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return tfcdeAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return tfcdeAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return tfcdeAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return tfcdeAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return tfcdeAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return tfcdeAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return tfcdeAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return tfcdeAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return tfcdeAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_jcdfer_list,
  api_v1_jcdfer_create,
  api_v1_jcdfer_retrieve,
  api_v1_jcdfer_update,
  api_v1_jcdfer_partial_update,
  api_v1_jcdfer_destroy,
  api_v1_login_create,
  api_v1_signup_create,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
