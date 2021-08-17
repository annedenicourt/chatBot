import React from "react";

const LinkList = (props) => {
    const linkMarkup = props.options.map((link) => (
        <div key={link.id} className="link-list-item">
            <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="link-list-item-url"
            >
                {link.text}
            </a>
        </div>
    ));

    return <div className="link-list">{linkMarkup}</div>;
};

export default LinkList;