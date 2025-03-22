import React from 'react';

const inputsInfo = [
    "Input a link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
    "Input which image format you would prefer for your screenshot: jpeg, png, or webp",
    "Input true or false if you would like your website screenshot to not contain any ads",
    "Input true or false if you would like your website screenshot to not contain any of those annoying 'allow cookies' banners",
    "Choose the width of your screenshot (in pixels)",
    "Choose the height of your screenshot (in pixels)",
];

const APIForm = ({ inputs, handleChange, onSubmit }) => {
    return (
        <div>
            <h2>Select your Image Attributes:</h2>
            <form className="form-container">
                <ul>
                    {inputs &&
                        Object.entries(inputs).map(([category, value], index) => (
                            <li className="form" key={index}>
                                <h2>{category} </h2>
                                <input
                                    type="text"
                                    name={category}
                                    value={value}
                                    placeholder="Input this attribute..."
                                    onChange={handleChange}
                                    className="textbox"
                                />
                                <br />
                                <p>{inputsInfo[index] || "Provide a valid input"}</p>
                            </li>
                        ))}
                </ul>
            </form>

            <button type="button" className="button" onClick={onSubmit}>
                Take that pic!
            </button>
        </div>
    );
};

export default APIForm;
