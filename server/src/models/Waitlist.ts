import mongoose from 'mongoose';

// generate me a model for waitlist which will be used to store the email and userType of the user
// the email is required and should be unique
// the userType is required and should be one of the following: 'renter', 'owner', '


export interface IWaitlist extends mongoose.Document {
    email: string;
    userType: string;
    }
    export const WaitlistSchema = new mongoose.Schema({
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true
        },
        userType: {
            type: String,
            required: true,
            enum: ['renter', 'owner', 'admin']
        }
    }, {
        timestamps: true
        });
        export const WaitlistModel =
        mongoose.model<IWaitlist>('Waitlist', WaitlistSchema);
        export default WaitlistModel;


    