import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import dynamic from 'next/dynamic'
import InnerImageZoom from 'react-inner-image-zoom';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.min.css';


const ChatComponent = dynamic(() => import('../components/ChatBot'), { ssr: false });

export default function Home() {
    return (
        <div>
            <Head>
                <title>ChatBot Anne Denicourt</title>
                <meta name="description" content="ChatBot pour recruter Anne Denicourt" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="">
                <div className="container bg-light px-lg-5">
                    <h1 className="pt-5 mb-4 text-secondary text-center fw-bold">Anne DENICOURT - Développeur Web</h1>
                    <h3 className={`${styles.citation} text-secondary text-center fst-italic mb-5 mx-auto`}>"C'est en codant qu'on devient développeur web"</h3>
                    <div className="row mx-0 pb-5 justify-content-center">
                        <div className="col-10 col-sm-10 col-lg-6 mx-auto mt-5 d-none d-lg-block">
                            <h2 className="mb-5 text-secondary text-center fw-bold">Pourquoi me recruter ?</h2>
                            <div className={`${styles.zoom} mx-auto mb-3 rounded shadow`}>
                                <InnerImageZoom className="" zoomScale={0.4} src="/images/Recruter Anne Denicourt.jpg" alt="recruter Anne Denicourt développeur web" />
                            </div>
                        </div>
                        <div className={`${styles.bg_chat} col-10 col-sm-10 col-lg-6 mx-auto mt-5 px-0 px-md-5 py-4 d-flex flex-column align-items-center rounded`}>
                            <h2 className="mb-5 text-white text-center">Chattez avec moi<i className="bi bi-chat-dots ms-3"></i></h2>
                            <div className=" "><ChatComponent /></div>
                            <a href="https://www.linkedin.com/in/anne-denicourt-8a348228/" target="_blank" className="text-white text-decoration-none mt-5 mb-3 "><i className="bi bi-linkedin fs-1 me-3"></i>Suivez-moi sur LinkedIn</a>
                            <a href="https://github.com/annedenicourt" target="_blank" className="text-white text-decoration-none"><i className="bi bi-github fs-1 me-3"></i>Explorez mon GitHub</a>
                        </div>
                        <div className="col-10 col-sm-10 col-lg-6 mx-auto mt-5 d-lg-none">
                            <h2 className="mb-5 text-secondary text-center fw-bold">Pourquoi me recruter ?</h2>
                            <div className={`${styles.zoom} mx-auto mb-3 rounded shadow`}>
                                <InnerImageZoom className="" zoomScale={0.4} src="/images/Recruter Anne Denicourt.jpg" alt="recruter Anne Denicourt développeur web" />
                            </div>
                        </div>
                    </div>
                    <div className="row mx-0 pb-5">
                        <div className="col mt-5 text-center ">
                            <div className="text-secondary fw-bold">Sité réalisé avec REACT et NEXT.JS</div>
                            <i className="bi bi-gear fs-1 text-secondary"></i>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
