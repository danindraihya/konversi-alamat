import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User';

export default class AuthController {

    public async register({ request, response }: HttpContextContract) {
        const body = request.body();

        const newUserSchema = schema.create({
            username: schema.string(),
            password: schema.string(),
        });

        try {
            
            await request.validate({ schema: newUserSchema });

            const user = await User.findBy('username', body['username']);

            if(user) {
                return response.status(400).json({
                    status: "failed",
                    messages: "User already exists"
                });
            }

            const newUser = new User();

            newUser.username = body['username'];
            newUser.password = body['password'];

            await newUser.save();

            return response.json({
                status: "success",
            });

        } catch (error) {

            console.log(error);

            return response.status(500).json({
                status: "failed",
                messages: "Internal server error"
            });
            
        }

    }

    public async login({ auth, request, response }: HttpContextContract) {
        const params = request.body();

        try {
            const token = await auth.use('api').attempt(params['username'], params['password']);

            return response.json({
                status: "success",
                data: {
                    "token": token
                }
            });
        } catch {
            return response.unauthorized('Invalid credentials')
        }
    }

    public async logout({ auth, response }: HttpContextContract) {
        await auth.use('api').revoke()
        return response.json({
            status: "success",
            messages: "Successfully logout"
        });
    }
}
