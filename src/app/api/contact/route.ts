import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
    try {
        const { name, surname, email, phone, date, topic, comment, title } =
            await req.json();

        const transporter = nodemailer.createTransport({
            host: "fedrez.hostingas.lt",
            port: 465,
            secure: true,
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
        });
        const formattedDate = date ? date.split("T")[0] : "";

        const fields = [
            name &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Jūsų vardas:</p><p>${name}</p>`,
            surname &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Pavardė:</p><p>${surname}</p>`,
            email &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">El. paštas:</p><p>${email}</p>`,
            phone &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Telefono numeris:</p><p>${phone}</p>`,
            date &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Pageidaujama vizito data:</p><p>${formattedDate}</p>`,
            topic &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Pasirinkite vizito temą:</p><p>${topic}</p>`,
            comment &&
                `<p style="background-color: #cddfd9; font-weight: bold; padding: 2px 4px;">Žinutė:</p><p>${comment}</p>`,
        ]
            .filter(Boolean)
            .join("");

        await transporter.sendMail({
            from: `"Сайт" <${process.env.SMTP_USER}>`,
            to: "form@eyes.lt",
            subject: `${title} - ${name} ${surname ? surname : ""}`,
            html: fields,
        });

        return NextResponse.json({ ok: true });
    } catch (error) {
        console.error("SMTP error:", error);
        return NextResponse.json({ error: "Email error" }, { status: 500 });
    }
}
