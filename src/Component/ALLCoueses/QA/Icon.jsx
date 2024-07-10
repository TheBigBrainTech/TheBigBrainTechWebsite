import React from 'react';
import PropTypes from "prop-types";
import MavenIcon from '../../../Assets/images/OtherImages/Maven.svg';
import SeleniumIcon from '../../../Assets/images/OtherImages/selenium.svg';
import CucumberIcon from '../../../Assets/images/OtherImages/cucumber.svg';
import TestNGIcon from '../../../Assets/images/OtherImages/testNG.svg';
import PostmanIcon from '../../../Assets/images/OtherImages/postman.svg';
import RestAssuredIcon from '../../../Assets/images/OtherImages/rest-api-icon.svg';


const icons = {
    maven: MavenIcon,
    selenium: SeleniumIcon,
    cucumber: CucumberIcon,
    testng: TestNGIcon,
    postman: PostmanIcon,
    restassured: RestAssuredIcon,
};

const Icon = ({ name, size = '32px', color = 'currentColor', className }) => {
    const SvgIcon = icons[name];
    return SvgIcon ? (
        <SvgIcon
            width={size}
            height={size}
            style={{ fill: color }}
            className={className}
        />
    ) : null;
};
Icon.propTypes = {
    name: PropTypes.string.isRequired,
    size: PropTypes.string,
    color: PropTypes.string,
    className: PropTypes.string,
};

export default Icon;
