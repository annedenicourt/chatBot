class MessageParser {
    constructor(actionProvider, state) {
        this.actionProvider = actionProvider;
        this.state = state;
    }

    parse(message) {
        const lowerCaseMessage = message.toLowerCase()

        if (lowerCaseMessage.includes("bonjour")) {
            this.actionProvider.greet()
        }
        else if (lowerCaseMessage.includes("cv")) {
            this.actionProvider.handleCurriculum();
        }
        else if (lowerCaseMessage.includes("projet")) {
            this.actionProvider.handlePortfolioList();
        }
        else if (lowerCaseMessage.includes("mail") || lowerCaseMessage.includes("contact")) {
            this.actionProvider.handleContact();
        }
        else {
            this.actionProvider.error();
        }
    }
}

export default MessageParser;