import nodemailer from "nodemailer";
import { env } from "@/config/env";
import { EMail } from "@/types";

export function sendMail({ name, from, subject, message }: EMail) {
  return new Promise((resolve, reject) => {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: env.EMAIL_HOST,
      port: 465,
      secure: true,
      auth: {
        user: env.EMAIL_USER,
        pass: env.EMAIL_PASS,
      },
    });

    transporter.sendMail(
      {
        to: env.EMAIL_USER,
        subject,
        html: `
        <div>
          <h1><Send From:> ${from} - ${name}</h1>
          <p>${message}</p>
        </div>
        `,
      },
      (error, info) => {
        if (error) {
          reject(new Error(error.message));
        } else {
          resolve(info);
        }
      }
    );
  });
}
