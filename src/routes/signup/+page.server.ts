import type { Actions } from './$types';
import { prisma } from '../../lib/server/prisma';
import { fail } from '@sveltejs/kit';

export const actions: Actions = {
    createAccount: async ({ request}) => {
        // TODO log the user in
          const { Username, Email, Password, ConfirmPassword } = Object.fromEntries(await request.formData()) as {
               Username: string
               Email: string
               Password: string
               ConfirmPassword: string
          }

          try {
               if (Password !== ConfirmPassword) {
                    return fail(400, {message: "Passwords do not match"})
               }
               await prisma.user.create({
                    data: {
                         Username,
                         Email,
                         Password
                    },
              })
          }
          catch (err) {
              console.error(err);
              return fail(500, {message: "Something went wrong"})
          }
          return {
               status: 201,
          }
     }
}        

