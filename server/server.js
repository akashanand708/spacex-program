import path from 'path';
import fs from 'fs';

import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

import App from '../src/App';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core';
import { store } from '../src/store';
import theme from '../src/Theme';

const PORT = 8080;
const app = express();

const router = express.Router();

const serverRenderedContent = (req, res, next) => {
    fs.readFile(path.resolve('./build/index.html'), 'utf8', (err, data) => {
        if (err) {
            console.error(err);
            return res.status(500).send('got error')

        }
        return res.send(
            data.replace(
                '<div id="root"></div>',
                `<div id="root">${ReactDOMServer.renderToString(
                    <Provider store={store}>
                        <MuiThemeProvider theme={theme}>
                            <App />
                        </MuiThemeProvider>
                    </Provider>
                )}</div>`
            )
        )
    })
};
router.use('^/$', serverRenderedContent);

router.use(
    express.static(path.resolve(__dirname, '..', 'build'), { maxAge: '20d' })
);

app.use(router);

app.listen(PORT, () => {
    console.log(`SSR running on port ${PORT}`)
});

