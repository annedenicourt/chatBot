import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import ChatOptions from "../components/ChatOptions";
import LinkList from "../components/LinkList";
import CV from "../components/CV";
import Contact from "../components/Contact";

const config = {
    botName: "Mon ChatBot",
    customStyles: {
        botMessageBox: {
            backgroundColor: "#2b3d6d",
        },
        chatButton: {
            backgroundColor: "#1A2238",
        },
    },
    initialMessages: [
        createChatBotMessage("Salut, je suis Anne Denicourt, développeur web ultra-motivé ! Que voulez-vous faire ?", {
            widget: "chatOptions",
        }),
    ],
    widgets: [
        {
            widgetName: "chatOptions",
            widgetFunc: (props) => <ChatOptions {...props} />,
        },
        {
            widgetName: "projectLinks",
            widgetFunc: (props) => <LinkList {...props} />,
            props: {
                options: [
                    {
                        text: "Portfolio Anne Denicourt",
                        url:
                            "https://www.annedenicourt.com/",
                        id: 1,
                    },
                    {
                        text: "Site e-commerce",
                        url:
                            "https://anita-shop.fr/",
                        id: 2,
                    },
                    {
                        text: "Réseau social d'entreprise",
                        url:
                            "https://www.youtube.com/watch?v=xHydDx5GU7A",
                        id: 3,
                    },
                    {
                        text: "Site e-commerce",
                        url:
                            "https://annedenicourt.github.io/AnneDenicourt_5_08122020/",
                        id: 4,
                    },
                ],
            },
        },
        {
            widgetName: "cvLink",
            widgetFunc: (props) => <CV {...props} />,
        },
        {
            widgetName: "contactLink",
            widgetFunc: (props) => <Contact {...props} />,
        },
    ],
}
export default config