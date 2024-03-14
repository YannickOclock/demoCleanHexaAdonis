import vine from '@vinejs/vine'

export const registerUserValidator = vine.compile(
  vine.object({
    name: vine.string().trim(),
    email: vine.string().trim().email(),
    password: vine.string().trim().minLength(6),
  })
)
