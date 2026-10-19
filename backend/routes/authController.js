import user from '../models/user.js';
import bcrypt from 'bcryptjs';

export const signupUser = async (req, res) => {
    try {


        const name = req.body.name;
        const email = req.body.email;
        const password = req.body.password;
        // email finder

        let userexist = await user.findOne({ email: email });
        if (userexist) {
            console.log({ message: 'User already exists' });
            return res.status(400).json({ message: 'User already exists' });
        }
        else {
            console.log({ message: 'User does not exist' });
        }
        // hashpassowrd
        const hashedPassword = await bcrypt.hash(password, 10);


        // query to create a new user in the database with the provided name, email, and hashed password. If the user is created successfully, it sends a 201 status code with a success message. If there is an error during the process, it logs the error and sends a 500 status code with an internal server error message.
        await user.create({
            name: name,
            email: email,
            password: hashedPassword,
        });
        res.status(201).json({ message: 'User created successfully' });

    } catch (error) {
        // here stringify the error object to log it in a readable format. This can help in debugging by providing more context about the error that occurred during the user signup process.
        console.log(JSON.stringify(error));
        res.status(500).json({ message: 'Something Went Wrong', error: JSON.stringify(error) });
    }
};