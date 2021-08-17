import React from "react";

const ChatOptions = (props) => {
    const options = [
        {
            text: "Voir mon portfolio et mes autres projets",
            handler: props.actionProvider.handlePortfolioList,
            id: 1,
        },
        {
            text: "Télécharger mon CV",
            handler: props.actionProvider.handleCurriculum,
            id: 2,
        },
        {
            text: "Me contacter",
            handler: props.actionProvider.handleContact,
            id: 3,
        },
    ];

    const optionsMarkup = options.map((option) => (
        <button
            className="option-button"
            key={option.id}
            onClick={option.handler}
        >
            {option.text}
        </button>
    ));

    return <div className="options-container">{optionsMarkup}</div>;
};

export default ChatOptions;