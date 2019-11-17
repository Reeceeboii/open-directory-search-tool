import React from 'react';
import Typography from '@material-ui/core/Typography'

import '../App.css';

class Footer extends React.Component {
    render() {
        return (
            <Typography
            align="center"
            style={{ color: "#555555" }}
            >
                Made by <a 
                className="text-link"
                href="https://www.reecemercer.dev" 
                target="_blank"
                rel="noopener noreferrer"
                >Reece Mercer
                </a>
            </Typography>
        )
    }
}

export default Footer;