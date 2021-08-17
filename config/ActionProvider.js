class ActionProvider {
    constructor(createChatBotMessage, setStateFunc) {
        this.createChatBotMessage = createChatBotMessage;
        this.setState = setStateFunc;
    }

    greet() {
        const greetingMessage = this.createChatBotMessage("Bienvenue à vous ! Que voulez-vous faire exactement ?",
            {
                widget: "chatOptions",
            }
        )
        this.updateChatbotState(greetingMessage)
    }
    error() {
        const errorMessage = this.createChatBotMessage("Que voulez-vous faire exactement ?",
            {
                widget: "chatOptions",
            }
        );
        this.updateChatbotState(errorMessage)
    }

    handlePortfolioList = () => {
        const message = this.createChatBotMessage(
            "Super ! Cliquez sur un lien ci-dessous pour découvrir mon travail:",
            {
                widget: "projectLinks",
            }
        );

        this.updateChatbotState(message);
    };

    handleCurriculum = () => {
        const message = this.createChatBotMessage(
            "Pour découvrir mon parcours et en savoir un peu plus sur moi :",
            {
                widget: "cvLink",
            }
        );

        this.updateChatbotState(message);
    };

    handleContact = () => {
        const message = this.createChatBotMessage(
            "Pour me contacter, veuillez remplir le formulaire ci-dessous ou envoyez-moi un mail à annedenicourt@gmail.com :",
            {
                widget: "contactLink",
            }
        );

        this.updateChatbotState(message);
    };

    updateChatbotState(message) {

        // NOTE: This function is set in the constructor, and is passed in
        // from the top level Chatbot component. The setState function here     
        // actually manipulates the top level state of the Chatbot, so it's
        // important that we make sure that we preserve the previous state.
        this.setState(prevState => ({
            ...prevState, messages: [...prevState.messages, message]
        }))
    }
}

export default ActionProvider