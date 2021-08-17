import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Chatbot from 'react-chatbot-kit'
import ActionProvider from '../config/ActionProvider';
import MessageParser from '../config/MessageParser';
import config from '../config/config';

export default function ChatBot() {
    return (
        <div className="">
            <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser} headerText="Bienvenue sur mon ChatBot" placeholderText="Ecrivez votre message" />
        </div>
    )
}
