import React, { useEffect, useState } from "react";

import "./Dropdown.css";

const Dropdown = ({ placeHolder, options }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);

        return () => window.removeEventListener("click", handler);
    }, []);

    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue;
        }
        return placeHolder;
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
    };

    const isSelected = (option) => {
        if (!selectedValue) {
            return false;
        }
        return selectedValue === option;
    };

    return (
        <div className="dropdown-container">
            <div onClick={handleInputClick} className="dropdown-input">
                {showMenu && (
                    <div className="dropdown-menu">
                        {options.map((option) => (
                            <div
                                onClick={() => onItemClick(option)}
                                className={`dropdown-item ${
                                    isSelected(option) && "selected"
                                }`}
                            >
                                {option}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dropdown;
